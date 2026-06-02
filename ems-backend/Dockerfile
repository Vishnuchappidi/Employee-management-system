FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

# copy only backend project into container
COPY ems-backend/pom.xml ems-backend/
COPY ems-backend/src ems-backend/src

WORKDIR /app/ems-backend

RUN mvn clean package -DskipTests

FROM eclipse-temurin:17

WORKDIR /app

COPY --from=build /app/ems-backend/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]