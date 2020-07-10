package br.com.softplan.api.usuario.apicadastropessoas.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String dtNascimento;

    private String sexo;
    private String email;
    private String naturalidade;
    private String nacionalidade;
    private String cpf;

}
