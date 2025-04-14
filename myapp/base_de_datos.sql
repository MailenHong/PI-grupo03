create schema if not exists prog2;
use prog2;

create table usuarios (
    id int unsigned auto_increment primary key,
    email varchar(255) not null unique,
    usuario varchar(255) not null,
    contraseña varchar(255) not null,
    fecha date not null,
    dni int unsigned not null unique,
    fotodeperfil varchar(255),
    createdat timestamp default current_timestamp,
    updatedat timestamp default current_timestamp on update current_timestamp,
    deletedat timestamp null on update current_timestamp
);

create table productos (
    id int unsigned auto_increment primary key,
    usuario_id int unsigned not null,
    imagen varchar(255),
    nombre varchar(255),
    descripcion text,
    createdat timestamp default current_timestamp,
    updatedat timestamp default current_timestamp on update current_timestamp,
    deletedat timestamp null on update current_timestamp,
    foreign key (usuario_id) references usuarios(id)
);

create table comentarios (
    id int unsigned auto_increment primary key,
    producto_id int unsigned not null,
    usuario_id int unsigned not null,
    texto text,
    createdat timestamp default current_timestamp,
    updatedat timestamp default current_timestamp on update current_timestamp,
    deletedat timestamp null on update current_timestamp,
    foreign key (producto_id) references productos(id),
    foreign key (usuario_id) references usuarios(id)
);

insert into usuarios (email, usuario, contraseña, fecha, dni, fotodeperfil) values
('mailen@email.com', 'mailen', 'maaai', '2006-06-14', 12345678, 'mailen.jpg'),
('paloma@email.com', 'paloma', 'paloo', '2004-12-31', 87654321, 'paloma.jpg'),
('clara@email.com', 'clara', 'claaaa', '2006-03-15', 23456789, 'clara.jpg'),
('luna@email.com', 'luna', 'luuunaaaa', '1998-07-07', 34567890, 'luna.jpg'),
('sol@email.com', 'sol', 'soool', '2002-02-02', 45678901, 'sol.jpg');

insert into productos (usuario_id, imagen, nombre, descripcion) values
(1, 'img1.jpg', 'azara', 'diseño clásico con un toque moderno.'),
(2, 'img2.jpg', 'maika', 'pequeña, práctica y con mucha onda.'),
(3, 'img3.jpg', 'kaïra', 'diseño elegante y minimalista por fuera.'),
(4, 'img4.jpg', 'indra', 'cartera liviana con muchos bolsillos.'),
(5, 'img5.jpg', 'ishani', 'mini cartera bordó con textura de serpiente y cadena metálica.'),
(1, 'img6.jpg', 'noora', 'sobre animal print con solapa.'),
(2, 'img7.jpg', 'nahla', 'bolso tote negro, amplio y práctico.'),
(3, 'img8.jpg', 'rashida', 'cartera marrón tipo cocodrilo, compacta.'),
(4, 'img9.jpg', 'leika', 'baguette crema con hebilla grande.'),
(5, 'img10.jpg','ishani', 'mini charol negro');

insert into comentarios (producto_id, usuario_id, texto) values
(1, 2, 'la cartera es hermosa y de buena calidad.'),
(1, 3, 'me encantó el diseño, combina con todo.'),
(1, 4, 'muy linda, la uso todos los días.'),

(2, 1, 'el color es tal cual la foto.'),
(2, 3, 'buena calidad, aunque esperaba que fuera un poco más grande.'),
(2, 5, 'llegó en tiempo y forma. muy recomendada.'),

(3, 1, 'perfecta para salir, entra lo justo y necesario.'),
(3, 2, 'el cierre es muy bueno y resistente.'),
(3, 5, 'muy cómoda, me sorprendió la capacidad.'),

(4, 1, 'me encantó, la calidad del material es excelente.'),
(4, 3, 'ya tengo dos del mismo estilo. son geniales.'),
(4, 5, 'ideal para regalar. mi hermana la amó.'),

(5, 2, 'súper práctica, no pesa nada y tiene buenos bolsillos.'),
(5, 3, 'el diseño es moderno, la uso para ir a la facu.'),
(5, 4, 'me gusta porque no es ni muy grande ni muy chica.'),

(6, 2, 'muy buen producto, llegó impecable.'),
(6, 3, 'la tela es suave pero resistente.'),
(6, 4, 'hermosa cartera, tal cual la descripción.'),

(7, 1, 'la correa se puede ajustar y eso me encantó.'),
(7, 3, 'tiene el tamaño ideal para el día a día.'),
(7, 5, 'la uso desde que llegó, ¡me encanta!'),

(8, 2, 'el compartimento interno es muy útil.'),
(8, 3, 'muy buen precio para la calidad que tiene.'),
(8, 4, 'el color es precioso, queda bien con todo.'),

(9, 1, 'me llegó con buen embalaje. todo perfecto.'),
(9, 3, 'compré una para mí y otra para regalar.'),
(9, 5, 'muy cómoda, no lastima el hombro.'),

(10, 2, 'el broche es fuerte y seguro, buen detalle.'),
(10, 3, 'la forma es original, me encanta.'),
(10, 4, 'no pensé que me iba a gustar tanto, pero me encanto.');
