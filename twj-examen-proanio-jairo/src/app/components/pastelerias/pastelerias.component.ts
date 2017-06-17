import { Component, Input,OnInit } from '@angular/core';
import {PasteleriaClass} from '../../clases/PasteleriaClass'
@Component({
  selector: 'app-pastelerias',
  templateUrl: './pastelerias.component.html',
  styleUrls: ['./pastelerias.component.css']
})
export class PasteleriasComponent implements OnInit {

  @Input() pasteleria:PasteleriaClass
  constructor() { }

  ngOnInit() {
  }

}
