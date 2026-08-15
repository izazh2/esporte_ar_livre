import { Injectable } from '@angular/core';
import { Corrida } from '../models/corrida';

@Injectable({
    providedIn: 'root',
})
export class CorridaService {
    private corrida: Corrida[] = []

    adicionar(corrida : Corrida){
        corrida.id =  this.corrida.length + 1

        this.corrida.push(corrida)
    }

    listar(){
        console.table(this.corrida)
        return this.corrida
    }
}
