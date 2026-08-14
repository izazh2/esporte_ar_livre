import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuComponent } from './component/menu-component/menu-component';
import { AtletaComponent } from './component/atleta-component/atleta-component';
import { HomeComponent } from './component/home-component/home-component';
import { CorridaComponent } from './component/corrida-component/corrida-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, AtletaComponent, HomeComponent, CorridaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('esporte-ar-livre');
}
