package com.configapp.model;

import jakarta.persistence.*;

@Entity
@Table(name = "software_config")
public class SoftwareConfig {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String linguagem;
    private String versao;
    private String sistemaOperacional;
    private String downloadUrl;
    private String comandoValidacao;

    // 🔥 novos campos
    private String homeVar;
    private String binRelative;
    private String installDir;
    private String tipoArquivo;
    private String validacaoCmd;

    // ================= GETTERS & SETTERS =================

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

    public String getHomeVar() { return homeVar; }
    public void setHomeVar(String homeVar) { this.homeVar = homeVar; }

    public String getBinRelative() { return binRelative; }
    public void setBinRelative(String binRelative) { this.binRelative = binRelative; }

    public String getInstallDir() { return installDir; }
    public void setInstallDir(String installDir) { this.installDir = installDir; }

    public String getTipoArquivo() { return tipoArquivo; }
    public void setTipoArquivo(String tipoArquivo) { this.tipoArquivo = tipoArquivo; }

    public String getValidacaoCmd() { return validacaoCmd; }
    public void setValidacaoCmd(String validacaoCmd) { this.validacaoCmd = validacaoCmd; }
}
