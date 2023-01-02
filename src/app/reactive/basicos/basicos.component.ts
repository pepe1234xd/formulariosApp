import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup= new FormGroup({
  //   nombre: new FormControl('RTX 4080TI'),
  //   precio: new FormControl(20000),
  //   existencias: new FormControl(5)
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre:[,[Validators.required, Validators.minLength(3)],],
    precio:[, [Validators.required, Validators.min(0)]],
    existencias:[, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'pepitas',
      precio:15,
      existencias:10
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.miFormulario.reset();
    console.log(this.miFormulario.value);
  }

}
