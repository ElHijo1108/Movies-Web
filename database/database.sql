create database films_db;
use films_db;



create table film(
	id int(11) not null auto_increment primary key,
    title varchar(180),
    description varchar(255),
    image varchar(200),
    score float(11)
);
create table user(
	id int(11) not null auto_increment primary key,
    name varchar(180),
    email varchar(180),
    password varchar(180),
    birthdate date,
    activation boolean,
    type int
);

create table uservotesmovie(
	iduser int(11) not null,
    idfilm int(11) not null,
    score float(11),
    commentary varchar(255),
    foreign key (iduser) references user(id),
    foreign key (idfilm) references film(id)
);

DELIMITER |


create trigger Score_User after insert on uservotesmovie
for each row

begin
	declare promedio float;
    select avg(score) into promedio from uservotesmovie where idfilm=NEW.idfilm;
	update film set score=promedio where id=NEW.idfilm;

end
|
DELIMITER ;
