import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = []; //inicializa o array de transferencia
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.customizarDados(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  listar() {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  private customizarDados(transferencia: Transferencia) {
    transferencia.data = new Date();
  }
}
