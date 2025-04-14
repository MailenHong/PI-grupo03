const datos = {
    usuario: {
        email: 'mstoessel@gmail.com',
        usuario: 'triple t',
        contraseña: 'TTT',
        nacimiento: "21/03/1997",
        documento: 41123456,
        perfil: 'Tini-Stoessel.jpg',
    },
    productos: [
        {

            imagen: 'img1.jpg',
            nombre: "Azara",
            descripcion: "Diseño clásico con un toque moderno. Compacta, con espacio para todo lo esencial. Ideal para el día a día.",
            comentarios: [
                {
                    usuario: "PatriGonzalez",
                    texto: "Excelente producto, lo recomiendo!",
                    imagenPerfil: "becky-g.avif",
                }
            ]
        },
        {

            imagen: 'img2.jpg',
            nombre: "Maika",
            descripcion: "Pequeña, práctica y con mucha onda. Ideal para salidas, conciertos o paseos con amigas.",
            comentarios: [
                {
                    usuario: "maria_1990",
                    texto: "Me encanta, entra todo lo que necesito para ir al trabajo.",
                    imagenPerfil: "camila cabello.avif",
                }
            ]
        },
        {

            imagen: 'img3.jpg',
            nombre: "Kaïra",
            descripcion: "Diseño versátil y elegante para acompañarte en todo momento. Espaciosa por dentro, minimalista por fuera.",
            comentarios: [
                {
                    usuario: "Camii_20",
                    texto: "Hermosa y combina con todo. Ideal para salidas.",
                    imagenPerfil: "dua-lipa.jpg",
                }
            ]
        },
        {

            imagen: 'img4.jpg',
            nombre: "Indra",
            descripcion: "Tu nueva favorita para el día a día. Diseño liviano con múltiples compartimentos.",
            comentarios: [
                {
                    usuario: "valenGago",
                    texto: "La uso todos los días, super cómoda.",
                    imagenPerfil: "emilia-mernesjpg.webp",
                }
            ]
        },
        {
            id: 5,
            imagen: 'img5.jpg',
            nombre: "Ishani",
            descripcion: "Mini cartera bordó con textura de serpiente y cadena metálica.",
            comentarios: [
                {
                    usuario: "NoeliaBags",
                    texto: "Buena relación precio-calidad.",
                    imagenPerfil: "karol g.avif",
                }
            ]
        },
        {

            imagen: 'img6.jpg',
            nombre: "Noora",
            descripcion: "Sobre animal print con solapa.",
            comentarios: [
                {
                    usuario: "tatiart",
                    texto: "La ame!! Rüma nunca falla :) ",
                    imagenPerfil: "lali esposito.webp",
                }
            ]
        },
        {

            imagen: 'img7.jpg',
            nombre: "Nahla",
            descripcion: "Bolso tote negro, amplio y práctico.",
            comentarios: [
                {
                    usuario: "Norma20__",
                    texto: "Hermoso diseño.",
                    imagenPerfil: "maria becerra.jpeg",
                }
            ]
        },
        {

            imagen: 'img8.jpg',
            nombre: "Rashida",
            descripcion: "Cartera marrón tipo cocodrilo, compacta.",
            comentarios: [
                {
                    usuario: "sofi_vintage",
                    texto: "¡Me la halagan siempre! Es muy distinta a lo que se ve en todos lados.",
                    imagenPerfil: "nickinicole.avif",
                }
            ]
        },
        {

            imagen: 'img9.jpg',
            nombre: "Leika",
            descripcion: "Baguette crema con hebilla grande.",
            comentarios: [
                {
                    usuario: "mariafit",
                    texto: "El color es más lindo aún que en la foto, súper combinable",
                    imagenPerfil: "ROSALIA_028.jpg",
                }
            ]
        },
        {

            imagen: 'img10.jpg',
            nombre: "Ishani",
            descripcion: "Mini sobre charol negro con broche.",
            comentarios: [
                {
                    usuario: "clau_mOda",
                    texto: "Buena calidad y vino rapidísimo. La recomiendo.",
                    imagenPerfil: "shakira.avif",
                }
            ]
        }
    ],

}

module.exports = datos

