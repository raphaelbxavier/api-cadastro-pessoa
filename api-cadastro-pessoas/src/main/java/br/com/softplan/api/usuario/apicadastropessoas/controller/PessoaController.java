package br.com.softplan.api.usuario.apicadastropessoas.controller;

import br.com.softplan.api.usuario.apicadastropessoas.entity.Pessoa;
import br.com.softplan.api.usuario.apicadastropessoas.repository.PessoaRepository;
import br.com.softplan.api.usuario.apicadastropessoas.util.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PessoaController {

    @Autowired
    private PessoaRepository pessoaRepository;

    @RequestMapping(value = "/listarPessoas", method = RequestMethod.GET)
    public List<Pessoa> listarPessoas(){
        return pessoaRepository.findAll();
    }

    @RequestMapping(value = "/salvarPessoa", method = RequestMethod.POST)
    public Pessoa salvarPessoa (@Valid @RequestBody Pessoa pessoa) throws Exception {
        if (!Util.validarEmail(pessoa.getEmail())) {
            throw new Exception("E-mail Inválido");
        }
        if (!Util.validarData(pessoa.getDtNascimento())) {
            throw new Exception("Formato de data Inválido. dd/MM/yyyy");
        }

        if(!Util.validarCPF(pessoa.getCpf())) {
            throw new Exception("CPF Inválido");
        }

        return pessoaRepository.save(pessoa);
    }

    @RequestMapping(value = "/atualizarPessoa/{id}", method =  RequestMethod.PUT)
    public ResponseEntity<Pessoa> atualizarPessoa(@PathVariable(value = "id") Long id, @Valid @RequestBody Pessoa novaPessoa) throws Exception {
        Optional<Pessoa> pessoaExistente = pessoaRepository.findById(id);

        if (pessoaExistente.isPresent()){
            Pessoa pessoa = pessoaExistente.get();
            pessoa.setNome(novaPessoa.getNome());
            pessoa.setEmail(novaPessoa.getEmail());
            pessoa.setDtNascimento(novaPessoa.getDtNascimento());
            pessoa.setCpf(novaPessoa.getCpf());
            pessoa.setSexo(novaPessoa.getSexo());
            pessoa.setNacionalidade(novaPessoa.getNacionalidade());
            pessoa.setNaturalidade(novaPessoa.getNaturalidade());
            salvarPessoa(pessoa);

            return new ResponseEntity<Pessoa>(pessoa, HttpStatus.OK);
        } else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value = "/removerPessoa/{id}", method =  RequestMethod.DELETE)
    public ResponseEntity<Pessoa> removerPessoa(@PathVariable(value = "id") Long id) {
        Optional<Pessoa> pessoa = pessoaRepository.findById(id);

        if (pessoa.isPresent()){
            pessoaRepository.delete(pessoa.get());
            return new ResponseEntity<>(HttpStatus.OK);
        } else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

