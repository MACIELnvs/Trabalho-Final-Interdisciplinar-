-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS products_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE products_db;

-- Criar tabela de produtos
CREATE TABLE IF NOT EXISTS products (
  id         INT UNSIGNED    NOT NULL AUTO_INCREMENT,
  name       VARCHAR(150)    NOT NULL,
  description TEXT,
  price      DECIMAL(10, 2)  NOT NULL,
  stock      INT UNSIGNED    NOT NULL DEFAULT 0,
  created_at DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT pk_products PRIMARY KEY (id),
  CONSTRAINT ck_products_price CHECK (price >= 0),
  CONSTRAINT ck_products_stock CHECK (stock >= 0)
);
