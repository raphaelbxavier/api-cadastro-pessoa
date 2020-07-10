import { Observable } from "rxjs";
import { PessoaService } from "../pessoa.service";
import { Pessoa } from "./../pessoa";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-pessoa-list",
  templateUrl: "./pessoa-list.component.html",
  styleUrls: ["./pessoa-list.component.css"]
})
export class PessoaListComponent implements OnInit {
  pessoas: Observable<Pessoa[]>;

  constructor(private pessoaService: PessoaService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.pessoas = this.pessoaService.getPessoasList();
  }

  deletePessoa(id: number) {
    this.pessoaService.deletePessoa(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updatePessoa(id: number){
    this.router.navigate(['update', id]);
  }
}
