CREATE DATABASE IF NOT EXISTS loja_videogames;
USE loja_videogames;

CREATE TABLE IF NOT EXISTS itens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    plataforma VARCHAR(50) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    estoque INT NOT NULL DEFAULT 0
);

INSERT INTO itens (titulo, plataforma, genero, preco, estoque) VALUES
('Elden Ring', 'PlayStation 5', 'RPG de Ação', 249.90, 15),
('The Legend of Zelda: Tears of the Kingdom', 'Nintendo Switch', 'Aventura', 349.00, 8),
('Forza Horizon 6', 'Xbox Series X', 'Corrida', 199.50, 12);
