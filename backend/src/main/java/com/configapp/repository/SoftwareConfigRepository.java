package com.configapp.repository;

import com.configapp.model.SoftwareConfig;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SoftwareConfigRepository extends JpaRepository<SoftwareConfig, Long> {

    Optional<SoftwareConfig> findByLinguagemAndVersaoAndSistemaOperacional(
            String linguagem,
            String versao,
            String sistemaOperacional
    );
}
