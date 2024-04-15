import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder, 
    private _userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apodo: ['', Validators.required],
      rut: ['', Validators.required],
      fechadenacimiento: ['', Validators.required],
      horasjugadas: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      rangoactual: ['', Validators.required]
    })
    this.id = Number (aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if(this.id != 0){
      this.operacion = 'Editar ';
      this.getUser(this.id);
    }
  }

  getUser(id: number){
    this.loading = true;
    this._userService.getUserById(id).subscribe(data => {
      this.form.setValue({
        nombre: data.nombre,
        apodo: data.apodo,
        rut: data.rut,
        fechadenacimiento: data.fechadenacimiento,
        horasjugadas: data.horasjugadas,
        rangoactual: data.rangoactual
      });
      this.loading = false;
    });
  }

  addUser() {
    if (this.form.valid) {
      const newUser: User = {
        id: 0,
        nombre: this.form.value.nombre,
        apodo: this.form.value.apodo,
        rut: this.form.value.rut,
        fechadenacimiento: this.form.value.fechadenacimiento,
        horasjugadas: this.form.value.horasjugadas,
        rangoactual: this.form.value.rangoactual
      };

      this.loading = true;
      this._userService.saveUser(newUser).subscribe(() => {
        console.log('Usuario agregado');
        this.loading = false;
        this.toastr.success('Usuario a sido agregado con éxito', 'Usuario Agregado');
        this.router.navigate(['/']);
      });
    } else {
      // Manejo de errores o validaciones adicionales si es necesario
    }
  }
}
