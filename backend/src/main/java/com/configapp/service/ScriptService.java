package com.configapp.service;

import org.springframework.stereotype.Service;
import java.nio.charset.StandardCharsets;

import com.configapp.model.SoftwareConfig;
import com.configapp.repository.SoftwareConfigRepository;

@Service
public class ScriptService {

    private final SoftwareConfigRepository repository;

    public ScriptService(SoftwareConfigRepository repository) {
        this.repository = repository;
    }

    public byte[] gerarScript(String linguagem, String versao, String so) {

        SoftwareConfig config = repository
                .findByLinguagemAndVersaoAndSistemaOperacional(
                        linguagem, versao, so
                )
                .orElseThrow(() -> new RuntimeException("Configuração não encontrada"));

        String installPath = "C:\\configapp\\" + linguagem + "\\" + versao;

        String script = montarScript(config, installPath);

        return script.getBytes(StandardCharsets.UTF_8);
    }

    private String montarScript(SoftwareConfig config, String installPath) {

        String homeVar = config.getHomeVar() != null ? config.getHomeVar() : "JAVA_HOME";
        String binRelative = config.getBinRelative() != null ? config.getBinRelative() : "bin";
        String validacao = config.getValidacaoCmd() != null ? config.getValidacaoCmd() : "java -version";

        return """
@echo off

echo ======================================
echo CONFIGAPP - Instalador Automatico
echo ======================================

set INSTALL_DIR=%s

echo.
echo Instalando em %%INSTALL_DIR%%
echo.

if exist "%%INSTALL_DIR%%" goto perguntar
goto continuar

:perguntar
echo Instalacao anterior detectada.
set /p sobrescrever=Deseja sobrescrever S ou N:
if /I NOT "%%sobrescrever%%"=="S" goto cancelar

:continuar
if not exist "%%INSTALL_DIR%%" mkdir "%%INSTALL_DIR%%"

echo.
echo Baixando arquivo...
powershell -Command "Invoke-WebRequest -Uri '%s' -OutFile '%%INSTALL_DIR%%\\arquivo.zip'"

if not exist "%%INSTALL_DIR%%\\arquivo.zip" goto erro

echo.
echo Extraindo...
powershell -Command "Expand-Archive -Force '%%INSTALL_DIR%%\\arquivo.zip' '%%INSTALL_DIR%%'"

echo.
echo Configurando variavel de ambiente...
setx %s "%%INSTALL_DIR%%"
setx PATH "%%PATH%%;%%INSTALL_DIR%%\\%s"

echo.
echo Validando instalacao...
%s

echo.
echo ======================================
echo Instalacao finalizada com sucesso!
echo Instalado em %%INSTALL_DIR%%
echo ======================================

pause
exit /b

:cancelar
echo Cancelado.
pause
exit /b

:erro
echo Erro no download.
pause
exit /b
""".formatted(
                installPath,
                config.getDownloadUrl(),
                homeVar,
                binRelative,
                validacao
        );
    }
}