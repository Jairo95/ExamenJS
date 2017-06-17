import { Component } from '@angular/core';
import {PasteleriaClass} from 'app/clases/PasteleriaClass'
import {Http} from "@angular/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pastelerias:PasteleriaClass[];

  pasteleria:PasteleriaClass;

  constructor(private _http:Http) {
    this.pasteleria = new PasteleriaClass();
  }

  ngOnInit() {
    this._http
      .get("http://localhost:1337/pasteleria")
      .subscribe(
        respuesta=>{
          let rjson:PasteleriaClass[] = respuesta.json();
          this.pastelerias = rjson;
          console.log("Pastelerias: ", this.pastelerias);
        },
        error=>{
        console.log("Error get: ", error);
        }
      )
  }


  crearPasteleria(){
  this._http
    .post("http://localhost:1337/pasteleria", this.pasteleria)
    .subscribe(
      respuesta=>{
        let rjson:PasteleriaClass[] = respuesta.json();
        this.pastelerias = rjson;
        console.log("Pastelerias: ", this.pastelerias);
      },
      error=>{
      console.log("Error get: ", error);
      }
    )
  }




}
