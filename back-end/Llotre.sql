DROP DATABASE IF EXISTS Llotre;

CREATE DATABASE Llotre;

CREATE TABLE Llotre.Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    lastname VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL,
    admin INT NOT NULL);

CREATE TABLE Llotre.Tasks (
    id INT PRIMARY KEY auto_increment,
    user_id INT NOT NULL,    
    title VARCHAR(255) NOT NULL,
    task VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    task_status VARCHAR(45) DEFAULT 'Pendente',
  	FOREIGN KEY (user_id) REFERENCES Llotre.Users (id));

INSERT INTO Llotre.Users(name, lastname, email, password, admin) VALUES
('Thiago', 'Meirelles', 'thiagomeirelles@llotre.com', '123456', 1),
('Yang', 'Wom', 'yangwom@llotre.com', '123456', 0),
('Matheus', 'Ferreira', 'matheusferreira@llotre.com', '123456', 0),
('Ruy', "Rey'Dellas", 'ruyreydellas@llotre.com', '123456', 0);

INSERT INTO Llotre.Tasks(user_id, title, task, createdAt, task_status) VALUES
(2, 'Criar Slides', 'Criar slides para a apresentação de segunda-feira', NOW(), 'Pendente'),
(3, 'Criar dinâmica', 'Elaborar uma dinâmica para a aula de terça-feira', NOW(), 'Em Progresso'),
(4, 'Fazer café', 'Fazer um cafezão bolado pra turma do trabalho', NOW(), 'Finalizada');