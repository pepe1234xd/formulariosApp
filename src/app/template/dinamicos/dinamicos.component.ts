import { Component} from '@angular/core';


interface Persona{
  nombre:string;
  favoritos:Favorito[];
}

interface Favorito{
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  nuevoJuego:string='';

  persona:Persona={
    nombre:'Alfredo',
    favoritos:[
        {id:1,nombre:'lol'},
        {id:2, nombre:'lolsito'}    
    ]
  }

  guardar(){
    console.log('guardado');
  }

  agregarJuego(){
    const nuevo:Favorito = {
      id:this.persona.favoritos.length+1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevo});
    this.nuevoJuego='';
  }

  eliminar(i:number){
    this.persona.favoritos.splice(i,1)
  }

}
