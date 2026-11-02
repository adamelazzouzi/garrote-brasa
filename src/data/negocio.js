// ============================================
// DATOS DEL NEGOCIO
// Garrote & Brasa · Asador urbano
// ============================================

export const negocio = {
    negocio: {
        nombre: "Garrote & Brasa",
        tipo: "Asador urbano de carnes a la parrilla y ahumados",
        eslogan: "Fuego lento, golpe directo.",
        descripcionCorta: "Asador de barrio con parrilla de carbón, ahumados artesanales y una carta corta pero brutal.",
        descripcionLarga: "Garrote & Brasa nació en 2018 en el antiguo garaje de una casa de labor, reconvertido en un espacio de hormigón, acero y madera quemada. Trabajamos con carnes de proximidad, cortes madurados en casa y una parrilla de encina que no se apaga nunca. Nada de adornos innecesarios: producto honesto, fuego real y una selección de vinos naturales y cervezas artesanas para acompañar. Somos un sitio pequeño, de mantel de papel y cuchillo afilado, donde cada plato sale cuando está listo. Si buscas un asador de domingo con mantelería y trompeta, este no es tu sitio. Si buscas carne con carácter, humo y un equipo que se lo toma en serio sin ponerse trascendental, pasa y siéntate.",
        añoFundacion: 2018,
        ciudad: "Torrejón del Berrocal",
        provincia: "Cáceres"
    },
    contacto: {
        direccion: "Calle del Horno Viejo, 7, 10340 Torrejón del Berrocal, Cáceres",
        telefono: "+34 927 43 18 62",
        email: "hola@garroteybrasa.es",
        redesSociales: {
            instagram: "@garroteybrasa",
            facebook: "Garrote & Brasa Asador",
            tiktok: "@garroteybrasa"
        },
        horario: {
            lunes: "Cerrado",
            martes: "Cerrado",
            miercoles: "13:30–16:00 / 20:00–23:30",
            jueves: "13:30–16:00 / 20:00–23:30",
            viernes: "13:30–16:00 / 20:00–00:30",
            sabado: "13:00–16:30 / 20:00–00:30",
            domingo: "13:00–16:30"
        },
        googleMaps: {
            latitud: 39.8746,
            longitud: -6.1953,
            enlace: "https://maps.google.com/?q=Garrote+y+Brasa+Torrejon+del+Berrocal"
        }
    },
    diseno: {
        colores: {
            primario: "#C1440E",
            secundario: "#1A1A1A",
            fondo: "#0E0E0E",
            texto: "#F2EDE4"
        },
        tipografia: {
            titulos: "Bebas Neue",
            cuerpo: "Inter"
        },
        estiloVisual: "Dark, agresivo y moderno: fondo casi negro, acentos en naranja fuego, tipografía condensada en mayúsculas para titulares, mucho contraste, texturas de humo y madera quemada, fotografía de carne cruda y brasas con luz dura y sombras marcadas, líneas finas y bloques rectangulares sin bordes redondeados.",
        referencias: [
            "Estética de asadores neoyorquinos tipo 'steakhouse rudo' con tipografía de cartel de boxeo",
            "Webs de restaurantes de fuego con fondo oscuro y acento rojo anaranjado",
            "Diseño editorial tipo revista de carne y cuchillos, con fotos a sangre y titulares gigantes"
        ]
    },
    contenido: {
        hero: {
            titulo: "CARNE. HUMO. NADA MÁS.",
            subtitulo: "Asador de carbón de encina en Torrejón del Berrocal. Cortes madurados, ahumados caseros y vinos naturales. Sin postal, sin trampa.",
            textoBoton: "RESERVA MESA",
            imagenDescripcion: "Primer plano de un chuletón grueso sobre la parrilla de carbón, con llamas naranjas y humo denso saliendo entre las brasas, luz dura lateral, fondo negro, gotas de grasa brillando, estilo fotografía editorial oscura y contrastada."
        },
        sobreNosotros: {
            titulo: "UN GARAJE. UNA PARRILLA. UNA OBSESIÓN.",
            texto: "Abrimos en 2018 en el garaje de una casa de labor, con una parrilla de encina y una idea simple: tratar la carne como se merece y no distraer con nada más. Trabajamos con ganaderías de la comarca, maduramos nuestras piezas en cámara propia y ahumamos aquí mismo. La carta cambia según lo que llegue, no según lo que quepa en un catálogo. Somos pocos y no queremos ser más: un equipo de seis personas, una parrilla y un compromiso con el producto que se nota en el primer bocado.",
            imagenDescripcion: "Interior del asador: paredes de hormigón visto y ladrillo oscuro, una gran parrilla de carbón al fondo con llamas, barras de acero, taburetes de madera quemada, luz cálida colgando de cables, ambiente oscuro y rudo, sin decoración superflua."
        },
        productos: [
            {
                nombre: "Chuletón madurado 45 días",
                descripcion: "Vaca rubia gallega, pieza de 1 kg, madurada en cámara propia y marcada a la parrilla de encina. Se sirve con sal en escamas y pimienta negra.",
                precio: "68,00 €/kg",
                imagenDescripcion: "Chuletón crudo y madurado sobre tabla de madera oscura, veta visible, sal en escamas, cuchillo de carnicero al lado, fondo negro, luz lateral dura."
            },
            {
                nombre: "Costilla ahumada 12 horas",
                descripcion: "Costilla de cerdo ibérico ahumada lentamente con madera de encina, glaseada con miel de brezo y pimentón ahumado. Se deshace.",
                precio: "16,50 €",
                imagenDescripcion: "Costillas ahumadas apiladas, brillantes por el glaseado, con marcas de humo, sobre papel de estraza, fondo oscuro, humo tenue flotando, primer plano."
            },
            {
                nombre: "Presa ibérica a la brasa",
                descripcion: "Presa de cerdo ibérico de bellota, cocinada al punto, con sal gruesa y un toque de romero quemado.",
                precio: "22,00 €",
                imagenDescripcion: "Presa ibérica en rodajas, interior rosado, marcas de parrilla, sobre plato de cerámica negra, fondo negro, luz dura, guarnición de romero quemado."
            },
            {
                nombre: "Ahumado de trucha del Jerte",
                descripcion: "Trucha de piscifactoría local, ahumada en casa con virutas de cerezo, servida con pan de masa madre y mantequilla ahumada.",
                precio: "12,00 €",
                imagenDescripcion: "Lonchas de trucha ahumada sobre tabla de madera clara, brillo anaranjado, pan de masa madre y mantequilla, fondo oscuro, contraste cálido."
            },
            {
                nombre: "Pimiento asado con sal de brasa",
                descripcion: "Pimiento rojo asado directamente sobre las brasas, pelado a mano, con aceite de oliva virgen extra y sal de brasa.",
                precio: "7,50 €",
                imagenDescripcion: "Pimientos rojos asados y pelados en tiras, brillantes de aceite, sobre plato negro, con sal visible, fondo oscuro, luz lateral."
            },
            {
                nombre: "Tarta de queso ahumada",
                descripcion: "Tarta de queso cremosa con un toque de ahumado suave, base de galleta de mantequilla y mermelada de higo negro.",
                precio: "6,00 €",
                imagenDescripcion: "Porción de tarta de queso con superficie tostada, base oscura, mermelada de higo negro al lado, plato negro, fondo oscuro, luz cálida."
            }
        ],
        servicios: [
            {
                nombre: "Reserva de mesa",
                descripcion: "Reserva online o por teléfono para grupos de hasta 8 personas. Para grupos mayores, consultar por email.",
                precio: "Gratis"
            },
            {
                nombre: "Menú degustación 'Garrote'",
                descripcion: "Cinco pases de temporada con los cortes y ahumados del día, pan de masa madre y postre. Disponible jueves y viernes a mediodía.",
                precio: "38,00 €/persona"
            },
            {
                nombre: "Eventos privados",
                descripcion: "Cierre del local para grupos de 15 a 25 personas, con menú cerrado y parrilla en directo. Consultar disponibilidad.",
                precio: "Desde 45,00 €/persona"
            },
            {
                nombre: "Cursos de parrilla",
                descripcion: "Taller de tres horas con nuestro jefe de parrilla: cortes, punto, humo y brasas. Incluye comida y delantal.",
                precio: "75,00 €/persona"
            }
        ],
        galeria: [
            { descripcion: "Parrilla de carbón de encina con llamas altas y carne marcándose, humo denso, fondo oscuro, luz naranja intensa." },
            { descripcion: "Cuchillo de carnicero cortando un chuletón madurado sobre tabla, primer plano, fondo negro, luz dura." },
            { descripcion: "Interior del local lleno, mesas de madera oscura, clientes comiendo, luz cálida colgante, ambiente ruidoso y cálido." },
            { descripcion: "Detalle de costillas ahumadas con glaseado brillante y marcas de humo, papel de estraza, fondo oscuro." },
            { descripcion: "Copa de vino natural tinto servida junto a un plato de presa ibérica, mesa de madera, fondo negro, luz lateral." },
            { descripcion: "Equipo del asador posando delante de la parrilla, delantales negros, expresión seria, luz dura, fondo de hormigón." }
        ],
        testimonios: [
            {
                nombre: "Marta G.",
                texto: "Vengo desde Cáceres solo por la costilla ahumada. El sitio es rudo, la carne es brutal y el trato es cercano sin ser empalagoso. Ojo: hay que reservar.",
                valoracion: 5
            },
            {
                nombre: "Javier R.",
                texto: "El chuletón estaba en su punto exacto y el vino que nos recomendaron era una locura. El local es pequeño y ruidoso, pero eso forma parte del encanto.",
                valoracion: 5
            },
            {
                nombre: "Lucía M.",
                texto: "Hicimos el curso de parrilla y salimos sabiendo más que entrando. El jefe de parrilla explica todo sin postureo. Repetiremos seguro.",
                valoracion: 5
            },
            {
                nombre: "Andrés P.",
                texto: "La trucha ahumada es una sorpresa increíble en un asador. Se nota que cuidan el producto. El pan de masa madre, espectacular.",
                valoracion: 4
            }
        ],
        preguntasFrecuentes: [
            {
                pregunta: "¿Hace falta reservar?",
                respuesta: "Sí, especialmente viernes y sábado. Somos un local pequeño y trabajamos con reserva previa. Puedes reservar online o llamarnos al +34 927 43 18 62."
            },
            {
                pregunta: "¿Tenéis opciones vegetarianas o veganas?",
                respuesta: "Tenemos el pimiento asado con sal de brasa, una ensalada de temporada y algunas guarniciones que cambian según el mercado. No somos un restaurante vegetariano, pero siempre hay algo que no es carne."
            },
            {
                pregunta: "¿Se puede ir con niños?",
                respuesta: "Sí, pero el local es pequeño y ruidoso. No tenemos menú infantil ni zona de juegos. Si vienes con niños, mejor a mediodía."
            },
            {
                pregunta: "¿Hay aparcamiento cerca?",
                respuesta: "Sí, hay aparcamiento público a menos de 100 metros, en la Plaza del Horno. Es gratuito."
            },
            {
                pregunta: "¿Hacéis envíos o comida para llevar?",
                respuesta: "No hacemos envíos. Para llevar, puedes pedir la costilla ahumada y el ahumado de trucha con 24 horas de antelación."
            }
        ]
    },
    equipo: [
        {
            nombre: "Ramiro Castaño",
            rol: "Fundador y jefe de parrilla",
            descripcion: "Carnicero de tercera generación, obsesionado con el punto exacto y el humo limpio. Abrió Garrote & Brasa en 2018 tras años trabajando en asadores de Madrid y Extremadura.",
            imagenDescripcion: "Hombre de unos 45 años, delantal negro, brazos tatuados, mirada seria, delante de la parrilla con llamas, luz dura lateral, fondo oscuro."
        },
        {
            nombre: "Alba Ferrer",
            rol: "Sumiller y sala",
            descripcion: "Responsable de la selección de vinos naturales y cervezas artesanas. Cree que una buena copa no tiene que ser complicada.",
            imagenDescripcion: "Mujer de unos 35 años, pelo recogido, camisa negra, copa de vino en la mano, detrás de la barra de acero, luz cálida, fondo oscuro."
        },
        {
            nombre: "Tomás 'Tomi' Braojos",
            rol: "Segundo de parrilla",
            descripcion: "Aprendió el oficio en el asador de su familia en la sierra de Gata. Es el que mantiene la brasa viva y el que mejor corta una costilla.",
            imagenDescripcion: "Hombre joven de unos 30 años, gorra negra, delantal, manipulando carbón con pinzas, humo alrededor, luz naranja de brasas, fondo oscuro."
        }
    ],
    legal: {
        avisoLegal: "Titular: Garrote & Brasa S.L. — CIF: B-10487632 — Domicilio: Calle del Horno Viejo, 7, 10340 Torrejón del Berrocal, Cáceres — Teléfono: +34 927 43 18 62 — Email: hola@garroteybrasa.es — Registro Mercantil de Cáceres, Tomo 872, Folio 114, Hoja CC-15342. El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las presentes condiciones. Los contenidos son propiedad de Garrote & Brasa S.L. o de terceros con licencia. Queda prohibida su reproducción sin autorización expresa. Las reservas realizadas a través de la web están sujetas a confirmación por parte del establecimiento.",
        politicaPrivacidad: "Responsable del tratamiento: Garrote & Brasa S.L. — Finalidad: gestión de reservas, consultas y envío de comunicaciones comerciales si se autoriza — Base jurídica: consentimiento del interesado y ejecución de la reserva — Destinatarios: no se ceden datos a terceros salvo obligación legal — Derechos: acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a hola@garroteybrasa.es — Conservación: los datos de reservas se conservan durante 12 meses; los de comunicaciones hasta su baja. Puede presentar reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
        politicaCookies: "Este sitio utiliza cookies técnicas necesarias para el funcionamiento de la web y cookies analíticas anónimas para medir el tráfico. No se utilizan cookies de publicidad ni de perfilado. Puede configurar o rechazar las cookies analíticas en el banner de configuración o desde su navegador. El uso continuado del sitio implica la aceptación de las cookies técnicas. Para más información, escriba a hola@garroteybrasa.es."
    },
    extras: {
        logoDescripcion: "Logotipo tipográfico en mayúsculas condensadas, 'GARROTE & BRASA' en blanco roto sobre fondo negro, con un pequeño detalle de llama o brasa en naranja fuego entre las palabras. Sin iconos ni adornos, estilo cartel de boxeo o carnicería ruda.",
        faviconDescripcion: "Cuadrado negro con una 'G' en naranja fuego, tipografía condensada, sin más detalles, legible a tamaño pequeño.",
        imagenesNecesarias: [
            "Hero: chuletón grueso sobre parrilla de carbón con llamas y humo, luz dura, fondo negro",
            "Sobre nosotros: interior del asador con parrilla al fondo, hormigón y madera quemada, luz cálida",
            "Producto: chuletón crudo madurado sobre tabla, sal en escamas, cuchillo, fondo negro",
            "Producto: costillas ahumadas apiladas con glaseado brillante, papel de estraza, humo tenue",
            "Producto: presa ibérica en rodajas, interior rosado, plato negro, romero quemado",
            "Producto: lonchas de trucha ahumada sobre tabla clara, pan de masa madre",
            "Producto: pimientos rojos asados en tiras, aceite y sal, plato negro",
            "Producto: porción de tarta de queso ahumada con mermelada de higo negro",
            "Galería: parrilla con llamas altas y carne marcándose",
            "Galería: cuchillo cortando chuletón sobre tabla, primer plano",
            "Galería: interior lleno, mesas de madera, clientes, luz cálida",
            "Galería: detalle de costillas ahumadas con marcas de humo",
            "Galería: copa de vino natural junto a presa ibérica",
            "Galería: equipo del asador delante de la parrilla, delantales negros",
            "Equipo: retrato de Ramiro Castaño delante de la parrilla",
            "Equipo: retrato de Alba Ferrer detrás de la barra con copa de vino",
            "Equipo: retrato de Tomás Braojos manipulando carbón con pinzas",
            "Logo: tipográfico 'GARROTE & BRASA' en blanco roto sobre negro con detalle naranja",
            "Favicon: cuadrado negro con 'G' naranja"
        ]
    }
};