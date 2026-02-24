package com.configapp.controller;

import com.configapp.service.ScriptService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/script")
public class ScriptController {

    private final ScriptService scriptService;

    public ScriptController(ScriptService scriptService) {
        this.scriptService = scriptService;
    }

    @GetMapping
    public ResponseEntity<byte[]> baixarScript(
            @RequestParam String linguagem,
            @RequestParam String versao,
            @RequestParam String so
    ) {

        byte[] script = scriptService.gerarScript(linguagem, versao, so);

        return ResponseEntity.ok()
                .header("Content-Disposition", "attachment; filename=configapp-installer.bat")
                .header("Content-Type", "application/octet-stream")
                .body(script);
    }
}
