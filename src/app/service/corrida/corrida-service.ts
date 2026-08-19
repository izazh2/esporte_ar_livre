import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Corrida } from '../../models/corrida';

@Injectable({
    providedIn: 'root',
})
export class CorridaService {

    constructor(private http: HttpClient){}

    salvarCorrida(corrida: Corrida){
        const urlAPI =`https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`

        this.http.post<Corrida>(urlAPI,corrida)
        .subscribe({
            next:(repostaAPI)=>{
                return repostaAPI
            },
            error:(msgErro)=>{
                return msgErro
            }
        })
    }

    listarCorridas(){
        const urlAPI =`https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/`

        this.http.get<Corrida[]>(urlAPI)
        .subscribe({
            next:(corridaAPI)=>{
                return corridaAPI
            },
            error:(msgErro)=>{
                return msgErro
            }
        })
    }
    
    listarCorrida(idCorrida : Number){
        const urlAPI =`https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`

        this.http.get<Corrida>(urlAPI)
        .subscribe({
            next:(corridaAPI)=>{
                return corridaAPI
            },
            error:(msgErro)=>{
                return msgErro
            }
        })
    }

    excluirCorrida(idCorrida: Number){
        const urlAPI =`https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`

        this.http.delete<Corrida>(urlAPI)
        .subscribe({
            next:(repostaAPI)=>{
                return repostaAPI
            },
            error:(msgErro)=>{
                return msgErro
            }
        })
    }

    alterarCorrida(corrida: Corrida){
        const urlAPI =`https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${corrida.id}`

        this.http.put<Corrida>(urlAPI, corrida)
        .subscribe({
            next:(repostaAPI)=>{
                return repostaAPI
            },
            error:(msgErro)=>{
                return msgErro
            }
        })
    }
}
