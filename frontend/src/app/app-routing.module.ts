import { CreatePessoaComponent } from './create-pessoa/create-pessoa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { UpdatePessoaComponent } from './update-pessoa/update-pessoa.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoa', pathMatch: 'full' },
  { path: 'listarPessoas', component: PessoaListComponent },
  { path: 'salvarPessoa', component: CreatePessoaComponent },
  { path: 'atualizarPessoa/:id', component: UpdatePessoaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
