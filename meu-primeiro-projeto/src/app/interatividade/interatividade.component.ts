import { Component } from '@angular/core';

@Component({
  selector: 'app-interatividade',
  templateUrl: './interatividade.component.html',
  styleUrls: ['./interatividade.component.css']
})
export class InteratividadeComponent {
  mensagem = 'Digite algo na caixa de texto:';
  textoDigitado = '';

  atualizarTexto(event: any) {
    this.textoDigitado = event.target.value;
  }
  limparTexto() {
    this.textoDigitado = '';
  }
}