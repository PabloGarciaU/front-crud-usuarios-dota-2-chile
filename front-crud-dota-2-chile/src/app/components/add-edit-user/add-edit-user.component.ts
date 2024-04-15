import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user'; // Asegúrate de importar la interfaz User desde la ubicación correcta

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: ['', Validators.required], // Requerido
      nombre: ['', Validators.required], // Requerido
      apodo: ['', Validators.required], // Requerido
      rut: ['', Validators.required], // Requerido
      fechaNacimiento: ['', Validators.required], // Requerido
      horasJugadas: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Requerido y debe ser un número entero
      rangoActual: ['', Validators.required] // Requerido
    });
  }

  ngOnInit(): void {
    // Puedes realizar inicializaciones adicionales aquí si es necesario
  }

  addUser() {
    if (this.form.valid) { // Verifica si el formulario es válido
      const newUser: User = {
        id: this.form.value.id, // Utiliza 'id' en lugar de 'idUsuario'
        nombre: this.form.value.nombre,
        apodo: this.form.value.apodo,
        rut: this.form.value.rut,
        fechadenacimiento: this.form.value.fechaNacimiento,
        horasjugadas: this.form.value.horasJugadas,
        rangoactual: this.form.value.rangoActual
      };

      // Aquí puedes realizar la lógica para agregar el usuario, por ejemplo, enviarlo a un servicio
      console.log('Nuevo usuario:', newUser);
      
      // Limpia el formulario después de agregar el usuario
      this.form.reset();
    } else {
      // Si el formulario no es válido, muestra un mensaje de error o realiza alguna acción correspondiente
      console.error('Formulario inválido. Verifica los campos.');
    }
  }
}
