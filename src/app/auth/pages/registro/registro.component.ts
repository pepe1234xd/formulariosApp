import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  nombreApellidoPattern:string = '';

  miFormulario:FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.nombreApellidoPattern)]]
  })

  constructor(private fb:FormBuilder){}

}
