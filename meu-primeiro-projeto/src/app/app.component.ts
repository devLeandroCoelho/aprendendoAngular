import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaudacaoComponent } from './saudacao/saudacao.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [SaudacaoComponent],
})
export class AppComponent {
  title = 'meu-primeiro-projeto';
}
