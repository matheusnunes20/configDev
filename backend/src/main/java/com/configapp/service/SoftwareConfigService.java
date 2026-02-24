package com.configapp.service;

import com.configapp.dto.SoftwareConfigDTO;
import com.configapp.model.SoftwareConfig;
import com.configapp.repository.SoftwareConfigRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SoftwareConfigService {

    private final SoftwareConfigRepository repository;

    public SoftwareConfigService(SoftwareConfigRepository repository) {
        this.repository = repository;
    }

    public Optional<SoftwareConfigDTO> buscarConfiguracao(
            String linguagem,
            String versao,
            String so
    ) {

        Optional<SoftwareConfig> config =
                repository.findByLinguagemAndVersaoAndSistemaOperacional(
                        linguagem, versao, so
                );

        return config.map(this::converterParaDTO);
    }

    public SoftwareConfig salvar(SoftwareConfig config) {
        return repository.save(config);
    }

    private SoftwareConfigDTO converterParaDTO(SoftwareConfig entity) {

        SoftwareConfigDTO dto = new SoftwareConfigDTO();

        dto.setLinguagem(entity.getLinguagem());
        dto.setVersao(entity.getVersao());
        dto.setSistemaOperacional(entity.getSistemaOperacional());
        dto.setDownloadUrl(entity.getDownloadUrl());
        dto.setComandoValidacao(entity.getComandoValidacao());

        // 🔥 novos campos para script dinâmico
        dto.setHomeVar(entity.getHomeVar());
        dto.setBinRelative(entity.getBinRelative());
        dto.setInstallDir(entity.getInstallDir());
        dto.setTipoArquivo(entity.getTipoArquivo());
        dto.setValidacaoCmd(entity.getValidacaoCmd());

        return dto;
    }
}
