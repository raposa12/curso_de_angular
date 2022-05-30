import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {


  //componente filho para mensagem de erro
  @Input() text = '';
  constructor() { }

  ngOnInit(): void {
  }

}
