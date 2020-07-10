package br.com.softplan.api.usuario.apicadastropessoas.repository;

import br.com.softplan.api.usuario.apicadastropessoas.entity.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> { }
