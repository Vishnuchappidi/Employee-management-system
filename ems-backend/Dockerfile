# Step 1: Build the project using Maven
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

# copy everything into container
COPY . .

# build the Spring Boot project
RUN mvn clean package -DskipTests


# Step 2: Run the application
FROM eclipse-temurin:17

WORKDIR /app

# copy jar file from build stage
COPY --from=build /app/target/*.jar app.jar

# expose backend port
EXPOSE 8080

# run the application
ENTRYPOINT ["java","-jar","app.jar"]