import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importando o CommonModule

@Component({
  selector: 'app-root',
  standalone: true, // Isso indica que o componente é standalone
  imports: [CommonModule], // Aqui importamos explicitamente o CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarTexto = false; // Variável para controlar a exibição do texto
  corTexto = 'blue';

  trocarCor() {
    this.corTexto = this.corTexto === 'blue' ? 'green' : 'blue';
  }
}