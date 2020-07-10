package br.com.softplan.api.usuario.apicadastropessoas.config;


import lombok.Getter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Getter
@ConfigurationProperties("pessoa")
public class PessoaProperty {

    private String originPermitida = "http://localhost:4200";

    public String getOriginPermitida() {
        return originPermitida;
    }
}
