import { Component } from '@angular/core';

import { Alumnos } from '../models/alumnos.class';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.scss'],
})
export class ListaDeAlumnosComponent {
  salvarAlumnos = true;
  regularSi = true;
  listadoAlumnos: Alumnos[] = [
    new Alumnos(
      1,
      'Pedro',
      'Farías',
      new Date(),
      'pedro@alumnos.com',
      this.regularSi,
      3
    ),
    new Alumnos(
      2,
      'Fernando',
      'Vieites',
      new Date(),
      'fernando@alumnos.com',
      this.regularSi,
      2
    ),
    new Alumnos(
      3,
      'María',
      'López',
      new Date(),
      'maria@alumnos.com',
      this.regularSi,
      0
    ),
    new Alumnos(
      4,
      'Victoria',
      'Heredia',
      new Date(),
      'victoria@alumnos.com',
      this.regularSi,
      0
    ),
    new Alumnos(
      5,
      'Camila',
      'Franco',
      new Date(),
      'camila@alumnos.com',
      this.regularSi,
      7
    ),
    new Alumnos(
      6,
      'Matías',
      'Gutiérrez',
      new Date(),
      'matías@alumnos.com',
      this.regularSi,
      14
    ),
    new Alumnos(
      7,
      'Ernesto',
      'Pulo',
      new Date(),
      'ernesto@alumnos.com',
      this.regularSi,
      0
    ),
    new Alumnos(
      8,
      'Facundo',
      'Ramallo',
      new Date(),
      'facundo@alumnos.com',
      this.regularSi,
      8
    ),
    new Alumnos(
      9,
      'Ignacio',
      'Lecuona',
      new Date(),
      'ignacio@alumnos.com',
      this.regularSi,
      6
    ),
    new Alumnos(
      10,
      'Magdalena',
      'Ruiz',
      new Date(),
      'magdalena@alumnos.com',
      this.regularSi,
      2
    ),
    new Alumnos(
      11,
      'Guillermo',
      'Diaz',
      new Date(),
      'guillermo@alumnos.com',
      this.regularSi,
      3
    ),
    new Alumnos(
      12,
      'Delfina',
      'Fernández',
      new Date(),
      'delfina@alumnos.com',
      this.regularSi,
      0
    ),
  ];

  cambiarRegularEnAlumno(alumno: Alumnos, nuevoValor: boolean) {
    alumno.regular = nuevoValor;
  }
  ngOnInit() {
    // Cambiar la propiedad regular solo para los alumnos específicos
    this.cambiarRegularEnAlumno(this.listadoAlumnos[4], false);
    this.cambiarRegularEnAlumno(this.listadoAlumnos[5], false);
    this.cambiarRegularEnAlumno(this.listadoAlumnos[7], false);
    this.cambiarRegularEnAlumno(this.listadoAlumnos[8], false);
  }
  getRegularColor(alumno: Alumnos): object {
    return {
      color: alumno.regular ? 'green' : 'red',
    };
  }
  alumnoLibre(inasistencias: number): boolean {
    return inasistencias > 5; // Cambia la condición según tus criterios
  }
  getEstadoAlumnoStyle(alumno: Alumnos): object {
    const esLibre = this.alumnoLibre(alumno.inasistencias);
    return {
      color: esLibre ? 'red' : 'green',
    };
  }
}
