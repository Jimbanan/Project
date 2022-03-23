Create database Project;
USE Project;

CREATE TABLE Student(
                        Id_student bigint NOT NULL ,
                        Surname Varchar(255) NOT NULL,
                        Name Varchar(255) NOT NULL,
                        Middle_name Varchar(255),
                        e_mail Varchar(255) NOT NULL,
                        Login Varchar(255) NOT NULL,
                        Password Varchar(255) NOT NULL
);


ALTER TABLE Student ADD CONSTRAINT Unique_PK_Student PRIMARY KEY AUTO_INCREMENT (Id_student);

INSERT into Student(Surname, Name, Middle_name, e_mail, Login, Password) VALUES ('Иванов', 'Иван', 'Иванович', 'ivanov.ivan@mail.ru', 'ivanov2001', '1q2w3e4r5t6y');
INSERT into Student(Surname, Name, Middle_name, e_mail, Login, Password) VALUES ('Петров', 'Петр', 'Петрович', '@mail.ru', 'petrov2001', 'qwerty2001');
INSERT into Student(Surname, Name, Middle_name, e_mail, Login, Password) VALUES ('Зимченко', 'Александр', 'Александрович', 'zimchenko@mail.ru', 'zimchenko2001', 'q1w2e3r4t5');
INSERT into Student(Surname, Name, Middle_name, e_mail, Login, Password) VALUES ('Краснова', 'Лидия', 'Олеговна', 'krasnova@mail.ru', 'krasnova2001', '1a2s3d4f5g');
INSERT into Student(Surname, Name, Middle_name, e_mail, Login, Password) VALUES ('Медведев', 'Фёдор', 'Алексеевич', 'medvedev@mail.ru', 'medvedev2001', 'a1s2d3f4g5');
INSERT into Student(Surname, Name, Middle_name, e_mail, Login, Password) VALUES ('Андреева', 'Анастасия', 'Валерьевна', 'andreeva@mail.ru', 'andreeva2001', '1z2x3c4v5b');
INSERT into Student(Surname, Name, Middle_name, e_mail, Login, Password) VALUES ('Зеленин', 'Николай', 'Николаевич', 'zelenin@mail.ru', 'zelenin2001', 'z1x2c3v4b5');
INSERT into Student(Surname, Name, Middle_name, e_mail, Login, Password) VALUES ('Савицкий', 'Евгений', 'Григорьевич', 'savizkiy@mail.ru', 'savizkiy2001', '2001qwerty');
INSERT into Student(Surname, Name, Middle_name, e_mail, Login, Password) VALUES ('Соловьёва', 'Валентина', 'Александровна', 'solovieva@mail.ru', 'solovieva2001', 'ytrewq1111');
