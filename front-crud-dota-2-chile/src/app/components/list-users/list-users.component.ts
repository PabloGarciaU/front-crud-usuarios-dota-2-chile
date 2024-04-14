import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user'; // Asegúrate de importar la interfaz User desde la ubicación correcta

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listUsers: User[] = [
    {
      id: 0,
      nombre: 'Pablo Garcia',
      apodo: 'Canadrui',
      rut: '20.278.438-0',
      fechaNacimiento: new Date('1999-10-11'),
      horasJugadas: 5503,
      rangoActual: 'Divino'
    },
    {
      id: 1,
      nombre: 'Juan Pérez',
      apodo: 'Juanito',
      rut: '12.345.678-9',
      fechaNacimiento: new Date('1990-05-15'),
      horasJugadas: 200,
      rangoActual: 'Avanzado'
    },
    {
      id: 2,
      nombre: 'María González',
      apodo: 'Mary',
      rut: '23.456.789-0',
      fechaNacimiento: new Date('1995-12-28'),
      horasJugadas: 150,
      rangoActual: 'Intermedio'
    },
    {
      id: 3,
      nombre: 'Pedro Torres',
      apodo: 'Pete',
      rut: '34.567.890-1',
      fechaNacimiento: new Date('1987-08-03'),
      horasJugadas: 300,
      rangoActual: 'Avanzado'
    },
    {
      id: 4,
      nombre: 'Ana Soto',
      apodo: 'Anita',
      rut: '45.678.901-2',
      fechaNacimiento: new Date('1993-02-10'),
      horasJugadas: 100,
      rangoActual: 'Principiante'
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}