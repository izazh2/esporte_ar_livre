import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inscricao } from '../../models/inscricao';

interface AtletaCadastrado {
  cpf: string;
  nome: string;
}

@Component({
  selector: 'app-inscricao-atleta-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './inscricao-atleta-component.html',
  styleUrl: './inscricao-atleta-component.css',
})
export class InscricaoAtletaComponent {
  // --- dados do formulário ---
  atletaCadastrado = '';
  cpfBusca = '';
  corridaEscolhida = '';
  distanciaProva = '';
  kitTamanho = '';
  categoriaFaixaEtaria = '';
  termosServicos = false;

  // --- listas para preencher os selects ---
  atletas: AtletaCadastrado[] = [
    { cpf: '111.111.111-11', nome: 'João da Silva' },
    { cpf: '222.222.222-22', nome: 'Maria Souza' },
  ];

  corridas: string[] = [
    'Circuito das Estações - Etapa Verão (15/11/2026)',
  ];

  tamanhosCamiseta: string[] = ['PP', 'P', 'M', 'G', 'GG'];

  valorInscricao = 89.9;

  mensagemErro = '';
  enviando = false;

  buscarPorCpf(): void {
    const encontrado = this.atletas.find((a) => a.cpf === this.cpfBusca);
    if (encontrado) {
      this.atletaCadastrado = encontrado.cpf;
      this.mensagemErro = '';
    } else if (this.cpfBusca) {
      this.mensagemErro = 'CPF não encontrado entre os atletas cadastrados.';
    }
  }

  formularioValido(): boolean {
    return !!(
      this.atletaCadastrado &&
      this.corridaEscolhida &&
      this.distanciaProva &&
      this.kitTamanho &&
      this.categoriaFaixaEtaria &&
      this.termosServicos
    );
  }

  finalizarInscricao(): void {
    if (!this.formularioValido()) {
      this.mensagemErro = 'Preencha todos os campos e aceite os termos antes de continuar.';
      return;
    }

    this.mensagemErro = '';
    this.enviando = true;

    const inscricao: Inscricao = {
      atletaCadastrado: this.atletaCadastrado,
      corridaEscolhida: this.corridaEscolhida,
      distanciaProva: this.distanciaProva,
      kitTamanho: this.kitTamanho,
      categoriaFaixaetaria: this.categoriaFaixaEtaria,
      termosServicos: this.termosServicos,
    };

    // TODO: chamar o service para enviar a inscrição e redirecionar para pagamento
    console.log('Inscrição pronta para envio:', inscricao);

    this.enviando = false;
  }
}