FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn -B dependency:go-offline
COPY src ./src
RUN mvn -B clean package -DskipTests

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/target/configapp-backend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080

# Flags de memória pensadas pra caber na instância free do Koyeb (512MB total):
# limita o heap a 70% da memória do container e usa SerialGC (menor overhead
# que o G1 padrão em heaps pequenos), evitando que o processo seja OOM-killed.
ENTRYPOINT ["java", "-XX:MaxRAMPercentage=70.0", "-XX:+UseSerialGC", "-jar", "app.jar"]
