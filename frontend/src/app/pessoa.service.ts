import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  createPessoa(pessoa: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}salvarPessoa/`, pessoa);
  }

  updatePessoa(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}atualizarPessoa/${id}`, value);
  }

  deletePessoa(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}removerPessoa/${id}`, { responseType: 'text' });
  }

  getPessoasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}listarPessoas/`);
  }
}
