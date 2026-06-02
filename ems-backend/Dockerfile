FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

# copy ONLY backend folder into container
COPY ems-backend ./ems-backend

WORKDIR /app/ems-backend

RUN mvn clean package -DskipTests

FROM eclipse-temurin:17

WORKDIR /app

COPY --from=build /app/ems-backend/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]