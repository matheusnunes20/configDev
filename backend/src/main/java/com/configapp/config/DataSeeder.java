package com.configapp.config;

import com.configapp.model.SoftwareConfig;
import com.configapp.repository.SoftwareConfigRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final SoftwareConfigRepository repository;

    public DataSeeder(SoftwareConfigRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        if (repository.count() > 0) {
            return;
        }

        repository.save(config(
                "java", "17", "Windows",
                "https://api.adoptium.net/v3/binary/latest/17/ga/windows/x64/jdk/hotspot/normal/eclipse",
                "java -version", "JAVA_HOME", "bin"
        ));

        repository.save(config(
                "nodejs", "20", "Windows",
                "https://nodejs.org/dist/v20.18.0/node-v20.18.0-win-x64.zip",
                "node -v", "NODE_HOME", ""
        ));

        repository.save(config(
                "python", "3.11", "Windows",
                "https://www.python.org/ftp/python/3.11.9/python-3.11.9-embed-amd64.zip",
                "python --version", "PYTHON_HOME", ""
        ));
    }

    private SoftwareConfig config(
            String linguagem,
            String versao,
            String so,
            String downloadUrl,
            String comandoValidacao,
            String homeVar,
            String binRelative
    ) {
        SoftwareConfig config = new SoftwareConfig();
        config.setLinguagem(linguagem);
        config.setVersao(versao);
        config.setSistemaOperacional(so);
        config.setDownloadUrl(downloadUrl);
        config.setComandoValidacao(comandoValidacao);
        config.setHomeVar(homeVar);
        config.setBinRelative(binRelative);
        config.setValidacaoCmd(comandoValidacao);
        return config;
    }
}
