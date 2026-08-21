import { Routes } from '@angular/router';

import { HomeComponent } from './component/home-component/home-component';
import { AtletaComponent } from './component/atleta-component/atleta-component';
import { CorridaComponent } from './component/corrida-component/corrida-component';
import { AtletaListaComponent } from './component/listar-atleta-component/listar-atleta-component';
import { CorridaListaComponent } from './component/listar-corrida-component/listar-corrida-component';


export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component:HomeComponent
    },

    {
        path:'cadastroatleta',
        component:AtletaComponent
    },
    {
        path:"cadastroatleta/:id",
        component:AtletaComponent
    },
    {
        path:'cadastrocorrida',
        component: CorridaComponent
    },
    {
        path:'alteracorrida/:id',
        component: CorridaComponent
    },
    {
        path: 'listaatleta',
        component: AtletaListaComponent
    },
    {
        path: 'listarcorrida',
        component: CorridaListaComponent
    }
];
