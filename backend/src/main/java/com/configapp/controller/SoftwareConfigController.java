package com.configapp.controller;

import com.configapp.model.SoftwareConfig;
import com.configapp.service.SoftwareConfigService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/api/config")
@CrossOrigin(origins = "http://localhost:5173")
public class SoftwareConfigController {

    private final SoftwareConfigService service;

    public SoftwareConfigController(SoftwareConfigService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<?> buscarConfiguracao(
            @RequestParam String linguagem,
            @RequestParam String versao,
            @RequestParam String so
    ) {

        return service.buscarConfiguracao(linguagem, versao, so)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<SoftwareConfig> salvarConfiguracao(
            @RequestBody SoftwareConfig config
    ) {
        SoftwareConfig saved = service.salvar(config);
        return ResponseEntity.ok(saved);
    }
}
