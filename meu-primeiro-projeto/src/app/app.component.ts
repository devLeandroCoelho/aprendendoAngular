import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaudacaoComponent } from './saudacao/saudacao.component';
import { RodapeComponent } from './rodape/rodape.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [SaudacaoComponent, RodapeComponent, RouterOutlet],
})
export class AppComponent {
  title = 'meu-primeiro-projeto';
}
