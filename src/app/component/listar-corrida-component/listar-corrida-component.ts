import { Component, signal } from '@angular/core';
import { CorridaService } from '../../service/corrida/corrida-service';
import { Corrida } from '../../models/corrida';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-corrida-component',
  imports: [],
  templateUrl: './listar-corrida-component.html',
  styleUrl: './listar-corrida-component.css',
})
export class ListarCorridaComponent {
  listaCorridas = signal<Corrida[]>([])

  constructor(
     private corridaService: CorridaService,
     private router: Router
    ) { }

  ngOnInit() {
    this.listar()
  }


  //listar
  listar() {
    this.corridaService.listarCorridas()
      .subscribe({
        next: (dadosCorrida) => {
          this.listaCorridas.set([...dadosCorrida])
        },
        error: (msgErro) => {
          console.log(msgErro)
        }
      })
  }

  excluir(objCorrida: Corrida) {
    if (confirm(`Deseja excluir a corrida ${objCorrida.descricao_corrida}`)) {
      this.corridaService.excluirCorrida(objCorrida.id)
        .subscribe({
          next: (repostaAPI) => {
            this.listaCorridas.update(elem =>
              elem.filter(a => a.id !== objCorrida.id)            )
            console.log('Atleta excluído com Sucesso ', repostaAPI)
          },
          error: (msgErro) => {
            return msgErro
          }
        })
    }

    this.ngOnInit()

  }

  carregandoDadosForm(ObjCorrida: Corrida){

    this.router.navigate(["/alteracorrida", ObjCorrida.id])
    
  }



}
