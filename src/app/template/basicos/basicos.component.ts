import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {


@ViewChild('miFormulario') miFormulario!:NgForm;

// guardar(miFormulario:any){
//   console.log(miFormulario);
// }

  ngOnInit(): void {

  }

  initForm={
    producto:'jamon',
    precio:10,
    existencias:10
  }

  guardar(){
    this.miFormulario.resetForm();
  }

  nombreValido():boolean{
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched
  }

  precioValido():boolean{
    return this.miFormulario?.controls['precio']?.touched && this.miFormulario?.controls['precio']?.value < 0;
  }

}
