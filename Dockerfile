FROM openjdk:17

COPY /target/todo-app.jar /usr/app/

WORKDIR /usr/app/

EXPOSE 8080

ENTRYPOINT ["java","-jar","todo-app.jar"]