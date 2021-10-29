import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();
  valor: number;
  destino: number;

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router
    ) { }

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = {
      valor: this.valor,
      destino: this.destino,
    };
    this.transferenciaService.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        //navegar entre paginas
        this.router.navigateByUrl('extrato')

      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}