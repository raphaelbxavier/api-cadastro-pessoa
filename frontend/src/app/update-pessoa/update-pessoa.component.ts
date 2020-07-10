import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-update-pessoa',
  templateUrl: './update-pessoa.component.html',
  styleUrls: ['./update-pessoa.component.css']
})
export class UpdatePessoaComponent implements OnInit {

  id: number;
  pessoa: Pessoa;

  constructor(private route: ActivatedRoute,private router: Router,
    private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.id = this.route.snapshot.params['id'];
  }
  
  updatePessoa() {
    this.pessoaService.updatePessoa(this.id, this.pessoa)
      .subscribe(data => console.log(data), error => console.log(error));
    this.pessoa = new Pessoa();
    this.gotoList();
  }

  onSubmit() {
    this.updatePessoa();    
  }

  gotoList() {
    this.router.navigate(['/listarPessoas']);
  }
}
