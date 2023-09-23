import { Personas } from './personas.interface';

export class Alumnos implements Personas {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public fechaIngreso: Date,
    public email: string,
    public regular: boolean,
    public inasistencias: number
  ) {}
}
