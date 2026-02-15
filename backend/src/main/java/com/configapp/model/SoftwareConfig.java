package com.configapp.model;

import jakarta.persistence.*;

@Entity
@Table(
        name = "software_config",
        uniqueConstraints = {
                @UniqueConstraint(
                        columnNames = {
                                "linguagem",
                                "versao",
                                "sistema_operacional"
                        }
                )
        }
)
public class SoftwareConfig {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String linguagem;
    private String versao;
    private String sistemaOperacional;
    private String downloadUrl;
    private String comandoValidacao;

    // getters e setters
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getLinguagem() { return linguagem; }

    public void setLinguagem(String linguagem) { this.linguagem = linguagem; }

    public String getVersao() { return versao; }

    public void setVersao(String versao) { this.versao = versao; }

    public String getSistemaOperacional() { return sistemaOperacional; }

    public void setSistemaOperacional(String sistemaOperacional) { this.sistemaOperacional = sistemaOperacional; }

    public String getDownloadUrl() { return downloadUrl; }

    public void setDownloadUrl(String downloadUrl) { this.downloadUrl = downloadUrl; }

    public String getComandoValidacao() { return comandoValidacao; }

    public void setComandoValidacao(String comandoValidacao) { this.comandoValidacao = comandoValidacao; }
}
