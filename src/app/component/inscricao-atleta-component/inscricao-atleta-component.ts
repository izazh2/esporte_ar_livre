import { Component } from '@angular/core';

import { Inscricao } from '../../models/inscricao';


@Component({
  selector: 'app-inscricao-atleta-component',
  imports: [],
  templateUrl: './inscricao-atleta-component.html',
  styleUrl: './inscricao-atleta-component.css',
})
export class InscricaoAtletaComponent {

  atletaCadastrado= ''
    corridaEscolhida = ''
    distanciaProva = ''
    kitTamanho = ''
    categoriaFaixaetaria = ''
    termosServicos = false

}
