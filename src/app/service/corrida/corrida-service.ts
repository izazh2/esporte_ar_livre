import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corrida } from '../../models/corrida';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorridaService {
  constructor(private http: HttpClient) { }

  //SALVAR A CORRIDA
  salvarCorrida(corrida: Corrida):Observable<Corrida> {
    //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`
    const urlApi = `http://127.0.0.1:8000/corrida/`

    return this.http.post<Corrida>(urlApi, corrida)
      
  }

  //LISTAR TODAS AS CORRIDAS
  listarCorridas(): Observable<Corrida[]> {
    //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`
    const urlApi = `http://127.0.0.1:8000/corrida/`

    return this.http.get<Corrida[]>(urlApi)

  }

  //LISTAR UMA CORRIDA
  listarCorrida(idCorrida: Number): Observable<Corrida> {
    //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`
  
    const urlApi = `http://127.0.0.1:8000/corrida/${idCorrida}`

    return this.http.get<Corrida>(urlApi)

  }

  //EXCLUIR UMA CORRIDA
  excluirCorrida(idCorrida: Number):Observable<Corrida> {
    //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`

    const urlApi = `http://127.0.0.1:8000/corrida/${idCorrida}`

    return this.http.delete<Corrida>(urlApi)

  }

  //ALTERAR CORRIDA
  alterarCorrida(corrida: Corrida): Observable<Corrida> {
    //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${corrida.id}`

    const urlApi = `http://127.0.0.1:8000/corrida/${corrida.id}`

    return this.http.put<Corrida>(urlApi, corrida)

      
  }

}