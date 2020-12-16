integer
real
serial
numeric

varchar(n)
char(n)
text

boolean

date
time
timestamp

CREATE TABLE aluno (
	id SERIAL,
	nome VARCHAR(255),
	cpf CHAR(11),
	observacao TEXT,
	idade INTEGER,
	dinheiro NUMERIC(10,2),
	altura REAL,
	ativo BOOLEAN,
	data_nascimento DATE,
	hora_aula TIME,
	matriculado_em TIMESTAMP
);

SELECT * FROM aluno;

INSERT INTO aluno (
	nome, 
	cpf,
	observacao,
	idade,
	dinheiro,
	altura,
	ativo,
	data_nascimento,
	hora_aula,
	matriculado_em
)
VALUES(
	'Bruno Di Palma Campos',
	'36899602822',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	32,
	12528.58,
	1.81,
	TRUE,
	'1988-06-06',
	'17:30:00',
	'2020-12-13 23:41:00'
)

SELECT *
	FROM aluno
	WHERE id = 1
	
UPDATE aluno
	SET observacao = 'Novo texto de observação'
	WHERE id = 1
	
SELECT *
	FROM aluno
	WHERE nome = 'Bruno Di Palma Campos'

DELETE
	FROM aluno
	WHERE nome = 'Bruno Di Palma Campos'
	

SELECT  nome AS "Nome do Aluno", 
		idade,
		cpf,
		matriculado_em AS quando_se_matriculou
	FROM aluno;
	
INSERT INTO aluno (nome) VALUES('Vinicius Dias');
INSERT INTO aluno (nome) VALUES('Joao Roberto');
INSERT INTO aluno (nome) VALUES('Diego');
INSERT INTO aluno (nome) VALUES('Nico');
INSERT INTO aluno (nome) VALUES('Diogo');

SELECT *
	FROM aluno
	WHERE nome = 'Bruno Di Palma Campos'
	;

SELECT *
	FROM aluno
	WHERE nome != 'Bruno Di Palma Campos'
	;

SELECT *
	FROM aluno
	WHERE nome LIKE '_iego'
	;

SELECT *
	FROM aluno
	WHERE nome LIKE 'Di_go'
	;

SELECT *
	FROM aluno
	WHERE nome NOT LIKE 'Di_go'
	;

SELECT *
	FROM aluno
	WHERE nome LIKE 'Bruno D_ Palma Campos'
	;

SELECT *
	FROM aluno
	WHERE nome LIKE '%Palma%'
	;

SELECT *
	FROM aluno
	WHERE nome ILIKE '%palma%'
	;

SELECT *
	FROM aluno
	WHERE nome ILIKE '%i%a%'
	;

SELECT *
	FROM aluno
	WHERE cpf IS NOT NULL
	;

SELECT *
	FROM aluno
	WHERE cpf IS NULL
	;
	
SELECT *
	FROM aluno
	WHERE idade = 32
	;

SELECT *
	FROM aluno
	WHERE idade != 32
	;

SELECT *
	FROM aluno
	WHERE idade >= 30
	;
	
SELECT *
	FROM aluno
	WHERE idade BETWEEN 10 AND 40
	;

SELECT *
	FROM aluno
	WHERE ativo = true
	;
	

SELECT *
	FROM aluno
	WHERE nome LIKE '%o%'
	AND cpf IS NOT NULL;
	
SELECT *
	FROM aluno
	WHERE nome LIKE '%ampos%'
	OR nome LIKE '%ego%'
	OR nome LIKE '%ico%';
	

	
