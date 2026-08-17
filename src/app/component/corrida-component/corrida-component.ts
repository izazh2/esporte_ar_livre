import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CorridaService } from '../../service/corrida-service';
import { Corrida } from '../../models/corrida';

@Component({
  selector: 'app-corrida-component',
  imports: [FormsModule],
  templateUrl: './corrida-component.html',
  styleUrl: './corrida-component.css',
})
export class CorridaComponent {

  descricao = ''
  data = ''
  dist5 = false
  dist10 = false
  dist20 = false
  
  constructor(private corridaService: CorridaService){}

  exibe(){
    console.log(this.descricao, this.data)
  }

  salvarCorrida(){
    const corrida = new Corrida()
    corrida.descricao = this.descricao
    corrida.data = this.data

    if (this.dist5) corrida.distancias.push('5km')
    if (this.dist10) corrida.distancias.push('10km')
    if (this.dist20) corrida.distancias.push('20km')

    this.corridaService.adicionar(corrida)

    this.corridaService.listar()
  }

  temDistancia(){
     return this.dist5 || this.dist10 || this.dist20
  }

  limparAtributos(){
    this.descricao = ''
    this.data = ''  
    this.dist5 = false
    this.dist10 = false
    this.dist20 = false
  }
}
