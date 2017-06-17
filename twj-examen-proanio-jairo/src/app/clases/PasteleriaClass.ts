export class PasteleriaClass{
  id:number;
  nombre:string;
  ciudad:string;
  correo:string;
  createdAt:Date;
  updatedAt:Date;

  constructor(id?:number,
              nombre?:string,
              ciudad?:string,
              correo?:string,
              createdAt?:Date,
              updatedAt?:Date){
    this.id = id;
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.correo = correo;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

}
