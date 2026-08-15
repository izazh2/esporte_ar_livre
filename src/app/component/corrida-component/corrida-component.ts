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
  
  constructor(private corridaService: CorridaService){}

  exibe(){
    console.log(this.descricao, this.data)
  }

  salvarCorrida(){
    const corrida = new Corrida()
    corrida.descricao = this.descricao
    corrida.data = this.data

    this.corridaService.adicionar(corrida)

    this.corridaService.listar()
  }
}
