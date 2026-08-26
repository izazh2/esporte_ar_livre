import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corrida } from '../../models/corrida';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { provideHttpClient } from '@angular/common/http';
import { CorridaService } from '../../service/corrida/corrida-service';
import { AtletaService } from '../../service/atleta-service';

describe('ListarCorridaComponent', () => {

  let service : CorridaService
  let httpMock : HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        AtletaService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    service = TestBed.inject(CorridaService)

    httpMock = TestBed.inject(HttpTestingController)

  });

  it('Resultado esperado a lista corrida', ()=>{
    const corridas : Corrida[] = [{
      "descricao_corrida":"CORRIDA DOS CARAS ",
      "data_corrida":"2067-07-06",
      "distancia5km":true,
      "distancia10km":true,
      "distancia25km":false,
      "id":12
    }]

    service.listarCorridas().subscribe(result=>{
      expect(result).toEqual(corridas)
    })

    const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida')

    expect(requisicao.request.method).toBe('GET')

    requisicao.flush(corridas)
  })

 

});
