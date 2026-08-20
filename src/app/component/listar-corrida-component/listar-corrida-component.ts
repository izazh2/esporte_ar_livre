import { Component, signal } from '@angular/core';
import { CorridaService } from '../../service/corrida/corrida-service';
import { Corrida } from '../../models/corrida';

@Component({
  selector: 'app-listar-corrida-component',
  imports: [],
  templateUrl: './listar-corrida-component.html',
  styleUrl: './listar-corrida-component.css',
})
export class ListarCorridaComponent {

  listaCorridas= signal<Corrida[]>([])

  constructor(private corridaService: CorridaService){}

  ngOnInit(){
    this.listar()
  }

  //listar
  listar(){
    console.log('Tsete')
    console.table(this.corridaService.listarCorridas())

    this.listaCorridas.set([...this.corridaService.listarCorridas()])
  }
}
