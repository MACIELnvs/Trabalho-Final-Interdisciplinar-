DROP DATABASE IF EXISTS banco_exodia;
CREATE DATABASE banco_exodia; 
USE banco_exodia;

CREATE TABLE Cartas (
    idCarta INT unsigned  NOT NULL,
    nome VARCHAR(150) NOT NULL,
    imagem VARCHAR(255) NULL, 
    descricao TEXT NULL,
		CONSTRAINT id_carta_pk primary key (idCarta)
    
)engine=InnoDB; 

-- criação da tabela monstros

CREATE TABLE Monstros (

idCarta INT unsigned NOT NULL,
defesa int null,
nivel int null,
raca varchar(50) null,
ataque int null, 

    CONSTRAINT chk_ataque
        CHECK (ataque >= 0),
        
    CONSTRAINT chk_defesa
        CHECK (defesa >= 0),
        
    CONSTRAINT chk_nivel
        CHECK (nivel >= 0),
        

	constraint id_monstro_pk primary key (idCarta),
	constraint id_monstro_fk foreign key (idCarta) 
		references Cartas (idCarta)

)engine=InnoDB; 

-- criação da tabela armadilhas

CREATE TABLE Armadilhas(
idCarta INT unsigned NOT NULL,
tipoArmadilha varchar(40) NULL,

	constraint id_armadilha_pk primary key (idCarta),
	constraint id_armadilha_fk foreign key (idCarta)
		references Cartas (idCarta)

)engine=InnoDB;

-- criação da tabela feitiços

CREATE TABLE Feiticos (
idCarta INT unsigned NOT NULL,
tipoFeitico VARCHAR(30) NULL,

	constraint id_feitico_pk primary key (idCarta), 
	constraint id_feitico_fk foreign key (idCarta)
		references Cartas (idCarta)

)engine=InnoDB;

CREATE TABLE Colecoes(
idColecao  varchar(30) NOT NULL,
nome VARCHAR(30) NOT NULL,
raridade varchar(30) NULL,
	constraint id_colecao_pk primary key (idcolecao)
)engine=InnoDB;

CREATE TABLE CartasColecoes(
idColecao varchar(30) NOT NULL,
idCarta INT unsigned  NOT NULL,

	constraint id_cartas_colecao_pk primary key (idColecao,idCarta),
    constraint id_cartas foreign key (idCarta)
		references Cartas (IdCarta),
	constraint id_Colecoes foreign key (idColecao)
		references Colecoes (idColecao)
)engine=InnoDB;


-- view


 
CREATE USER 'app_yugioh'
IDENTIFIED BY 'senha123';