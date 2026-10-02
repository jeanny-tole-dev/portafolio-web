const projectsData = [
    // --- DESARROLLO & FRONTEND ---
    {
        title: "Jhaular Joyería",
        category: "frontend",
        description: "Desarrollo de plataforma e-commerce interactiva para joyería artesanal en esmeraldas. Incluye catálogo dinámico de productos, panel de administración con control por roles y un laboratorio interactivo en 3D desarrollado con Three.js para la personalización y armado de manillas tridimensionales en tiempo real por el cliente.",
        metrics: [
            "Laboratorio 3D Interactivo con Three.js (Personalizador de Manillas)",
            "Panel de Administración & Control por Rol",
            "Catálogo Dinámico & Plataforma E-Commerce"
        ],
        image: "img/JHAULARDESARROOLLO_1.png",
        images: [
            { url: "img/JHAULARDESARROOLLO_1.png", label: "Vista Principal Web & Catálogo" },
            { url: "img/JHAULARDESARROOLLO_2.png", label: "Catálogo & Productos" },
            { url: "img/JHAULARDESARROOLLO_3.png", label: "Laboratorio 3D & Detalle" }
        ],
        tags: ["Three.js", "JavaScript", "HTML5", "CSS3", "WebGL", "Role Admin", "E-commerce"],
        liveUrl: "https://www.linkedin.com/in/jeanny-paola-tole-oliveros-6a95a676",
        liveLabel: "Ver en LinkedIn &rarr;",
        repoUrl: "https://github.com/jeanny-tole-dev/jhaular-joyeria"
    },
    {
        title: "Adaptación de Juegos de Learning",
        category: "frontend",
        description: "Desarrollo y adaptación frontend de juegos interactivos y módulos educativos multimedia.",
        image: "img/learningAI01.png",
        images: [
            "img/learningAI01.png",
            "img/LEARNING01.png"
        ],
        tags: ["JavaScript", "HTML5 Canvas", "CSS3", "UI/UX"],
        liveUrl: "https://www.linkedin.com/in/jeanny-paola-tole-oliveros-6a95a676",
        liveLabel: "Ver en LinkedIn &rarr;",
        repoUrl: "https://github.com/jeanny-tole-dev/bradescard-training"
    },
    {
        title: "Heladería DOMENICO",
        category: "frontend",
        description: "Plataforma de comercio electrónico web interactiva construida con React y Vite, integrada en tiempo real con Supabase. Cuenta con arquitectura de autenticación y control de acceso por roles (Cliente, Empleado y Administrador) para la gestión completa de pedidos y catálogo.",
        metrics: [
            "Gestión por Roles (Cliente / Empleado / Admin)",
            "Base de Datos en Tiempo Real con Supabase",
            "E-commerce SPA con React & Vite"
        ],
        image: "img/logoheladeriadomenico.png",
        images: [
            { url: "img/logoheladeriadomenico.png", label: "Logo Domenico" },
            { url: "img/rolclienteheladeriadomenicodesarrollo.png", label: "Rol Cliente 1" },
            { url: "img/rolclienteheladeriadomenicodesarrollo_2.png", label: "Rol Cliente 2" },
            { url: "img/rolempleadoheladeriadomenicodesarrollo.png", label: "Rol Empleado 1" },
            { url: "img/rolempleadoheladeriadomenicodesarrollo_2.png", label: "Rol Empleado 2" },
            { url: "img/roladministradorheladeriadomenicodesarrollo.png", label: "Panel Admin 1" },
            { url: "img/roladministradorheladeriadomenicodesrrollo.png", label: "Panel Admin 2" }
        ],
        tags: ["React", "Vite", "Supabase", "JavaScript", "Role Auth", "UI/UX"],
        liveUrl: "https://www.linkedin.com/in/jeanny-paola-tole-oliveros-6a95a676",
        liveLabel: "Ver en LinkedIn &rarr;",
        repoUrl: "https://github.com/jeanny-tole-dev/heladeria-react-supabase"
    },
    {
        title: "Biblioteca Virtual Infantil",
        category: "frontend",
        description: "Sistema frontend interactivo diseñado para la navegación, filtrado dinámico y exploración de recursos educativos para niños. Incorpora una interfaz amigable potenciada con iconos interactivos y componentes dinámicos.",
        metrics: [
            "Navegación & Categorización Infantil",
            "Iconografía e Interacciones Dinámicas",
            "Maquetación Frontend Fluida"
        ],
        image: "img/BIBLIOTECA_1.png",
        images: [
            { url: "img/BIBLIOTECA_1.png", label: "Vista Biblioteca Virtual" },
            { url: "img/BIBLIOTECATIENEICOINOSINTERACTIVOS.png", label: "Iconos & Recursos Interactivos" }
        ],
        tags: ["JavaScript", "HTML5", "CSS3", "Iconos Interactivos", "UI/UX Infantil"],
        liveUrl: "https://www.linkedin.com/in/jeanny-paola-tole-oliveros-6a95a676",
        liveLabel: "Ver en LinkedIn &rarr;",
        repoUrl: "https://github.com/jeanny-tole-dev/biblioteca-virtual-infantil"
    },
    {
        title: "Reto Claro (CRUD Laravel - SENA)",
        category: "frontend",
        description: "Sistema web CRUD desarrollado en Laravel (PHP) durante el programa de Tecnóloga en Desarrollo Publicitario (SENA). Maquetación responsiva, estructuración de base de datos y gestión interactiva de registros.",
        metrics: [
            "Desarrollo CRUD en Laravel / PHP (SENA)",
            "Gestión & Administración de Base de Datos",
            "Maquetación Web Responsiva"
        ],
        image: "img/learningAI01.png",
        images: [
            { url: "img/learningAI01.png", label: "Vista Proyecto Laravel SENA" }
        ],
        tags: ["Laravel", "PHP", "MySQL", "SENA", "HTML5", "CSS3"],
        liveUrl: "https://www.linkedin.com/in/jeanny-paola-tole-oliveros-6a95a676",
        liveLabel: "Ver en LinkedIn &rarr;",
        repoUrl: "https://github.com/jeanny-tole-dev/reto-claro-laravel"
    },

    // --- DISEÑO & BRANDING ---
    {
        title: "Distriverano",
        category: "design",
        description: "Emprendimiento especializado en la distribución de condimentos y sazonadores. Se realizó una transformación estratégica de la marca en el mercado: la identidad original contaba con un logotipo que no transmitía personalidad. Rediseñamos la marca por completo, desarrollamos la nueva línea gráfica de etiquetas con alto impacto visual y creamos propuestas conceptuales para su catálogo.",
        metrics: [
            "Rediseño de Marca & Identidad Visual",
            "Nuevas Etiquetas (Evolución Antes / Después)",
            "Propuestas de Empaque & Catálogo"
        ],
        image: "img/DISENONUEVAETIQUETASDISTRIVERANO.png",
        images: [
            { url: "img/DISENONUEVAETIQUETASDISTRIVERANO.png", label: "Nuevas Etiquetas (Después)" },
            { url: "img/ETIQUETASANTESDISTRIVERANO.png", label: "Etiquetas Originales (Antes)" },
            { url: "img/20.png", label: "Nueva Propuesta de Marca" },
            { url: "img/18.png", label: "Catálogo & Empaques" },
            { url: "img/17.png", label: "Detalle de Rediseño" },
            { url: "img/Logotipo_circulo_belleza_iniciales_tipografico_negro.png", label: "Isotipo / Logotipo" }
        ],
        tags: ["Rediseño de Marca", "Empaques & Etiquetas", "Antes / Después", "Branding", "Illustrator", "Photoshop"],
        liveUrl: "https://www.linkedin.com/in/jeanny-paola-tole-oliveros-6a95a676",
        liveLabel: "Ver en LinkedIn &rarr;",
        repoUrl: ""
    },
    {
        title: "Jhaular Joyería (Diseño & AI)",
        category: "design",
        description: "Dirección de arte visual, maquetación de catálogo digital interactivo en Beacons.ai, producción de fotografía e-commerce asistida con Inteligencia Artificial (retoques de entorno visual sin modificar el producto real) y piezas publicitarias multimedia en video para redes sociales.",
        metrics: [
            "Catálogo Digital Interactivo en Beacons.ai",
            "Retoque Fotográfico con IA (Producto Real Intacto)",
            "Producción de Video Publicitario & Social Media"
        ],
        image: "img/disenodefotosapoyadasconAITIPOECOMERCEjhaular.png",
        images: [
            { url: "img/disenodefotosapoyadasconAITIPOECOMERCEjhaular.png", label: "Fotografía E-Commerce IA" },
            { url: "img/CREACIONDECATALOGOENBEACONS.AIJHAULAR.mp4", label: "Catálogo Beacons.ai & Retoque IA" },
            { url: "img/disenologojhaular.png", label: "Logo Jhaular" },
            { url: "img/videojHaularredessociales.mp4", label: "Video Redes" }
        ],
        tags: ["Beacons.ai", "Fotografía IA", "Photoshop", "Illustrator", "Social Media", "Video"],
        liveUrl: "https://www.linkedin.com/in/jeanny-paola-tole-oliveros-6a95a676",
        liveLabel: "Ver en LinkedIn &rarr;",
        repoUrl: ""
    },
    {
        title: "Delicias con Amor",
        category: "design",
        description: "Emprendimiento de comidas rápidas que registraba bajas ventas al iniciar. Tras transformar su identidad visual, rediseñar su logotipo y estructurar un canal estratégico de pedidos por WhatsApp y ventas por delivery, logró un destacado incremento del 30% en sus ventas totales.",
        metrics: [
            "+30% Incremento en Ventas",
            "Pedidos Directos por WhatsApp",
            "Canal de Ventas por Delivery"
        ],
        image: "img/deliciasconamordespues.png",
        images: [
            { url: "img/deliciasconamorantes.png", label: "Logo Antes" },
            { url: "img/deliciasconamordespues.png", label: "Logo Después" },
            { url: "img/DELICIARCONAMORMENUANTES.png", label: "Menú Antes" },
            { url: "img/DELICIASCONAMORMENUDESPUES.png", label: "Menú Después" },
            { url: "img/deliciasconamorredessociales.png", label: "Redes Sociales 1" },
            { url: "img/deliciasconamorredessociales01.png", label: "Redes Sociales 2" }
        ],
        tags: ["WhatsApp Business", "Delivery & Menú", "Figma", "Canva", "Photoshop", "Identidad Visual"],
        liveUrl: "https://www.linkedin.com/in/jeanny-paola-tole-oliveros-6a95a676",
        liveLabel: "Ver en LinkedIn &rarr;",
        repoUrl: ""
    },
    {
        title: "Aura Nativa",
        category: "design",
        description: "Creación de identidad visual integral y estrategia de branding para marca de velas ecológicas en soya. Diseño de empaques y etiquetas para productos, maquetación de catálogos digitales interactivos en Beacons.ai y catálogos PDF en Google Drive, y desarrollo de piezas publicitarias para redes sociales y UI/UX.",
        metrics: [
            "Velas Ecológicas en Soya & Branding",
            "Diseño de Etiquetas & Empaques",
            "Catálogos en Beacons.ai & Drive (PDF)"
        ],
        image: "img/IDENTIDADDEMARCA_AURANATIVA.png",
        images: [
            { url: "img/IDENTIDADDEMARCA_AURANATIVA.png", label: "Visual de Marca" },
            { url: "img/ETIQUETASVELASAURANATIVA_1.png", label: "Etiquetas Velas Soya 1" },
            { url: "img/ETIQUETASVELASAURANATIVA_2.png", label: "Etiquetas Velas Soya 2" },
            { url: "img/ETIQUETASVELASAURANATIVA_3.png", label: "Etiquetas Velas Soya 3" },
            { url: "img/ETIQUETASVELASAURANATIVA_4.png", label: "Etiquetas Velas Soya 4" },
            { url: "img/AURANATIVA_11.png", label: "Identidad & Logotipo" },
            { url: "img/AURANATIVA_2.png", label: "Guía Visual & Colores" },
            { url: "img/AURANATIVA_5.png", label: "Branding & Layout" }
        ],
        tags: ["Velas de Soya", "Branding", "Etiquetas & Empaques", "Beacons.ai", "Catálogo Drive PDF", "Illustrator"],
        liveUrl: "https://beacons.ai/auranativa",
        liveLabel: "Ver en Beacons.ai &rarr;",
        repoUrl: ""
    },
    {
        title: "Lanzamiento LearningAI (Positivo S+)",
        category: "design",
        description: "Diseño publicitario integral y desarrollo de piezas gráficas corporativas para el lanzamiento oficial de la plataforma educativa LearningAI en alianza con Positivo S+. Estrategia visual de alto impacto para campaña institucional.",
        metrics: [
            "Campaña de Lanzamiento Institucional",
            "Diseño Gráfico Corporativo Positivo S+",
            "Material de Difusión LearningAI"
        ],
        image: "img/PIEZASGRAFICASLAMZAMIENTOLEARNINGDISENO_5.png",
        images: [
            { url: "img/PIEZASGRAFICASLAMZAMIENTOLEARNINGDISENO_5.png", label: "Lanzamiento Principal" },
            { url: "img/PIEZASGRAFICASLAMZAMIENTOLEARNINGDISENO_1.png", label: "Campaña Gráfica 1" },
            { url: "img/PIEZASGRAFICASLAMZAMIENTOLEARNINGDISENO_2.png", label: "Campaña Gráfica 2" },
            { url: "img/PIEZASGRAFICASLAMZAMIENTOLEARNINGDISENO_3.png", label: "Campaña Gráfica 3" },
            { url: "img/PIEZASGRAFICASLAMZAMIENTOLEARNINGDISENO_4.png", label: "Campaña Gráfica 4" }
        ],
        tags: ["Diseño Gráfico", "Campaña Publicitaria", "Positivo S+", "Photoshop", "Illustrator"],
        liveUrl: "https://www.linkedin.com/in/jeanny-paola-tole-oliveros-6a95a676",
        liveLabel: "Ver en LinkedIn &rarr;",
        repoUrl: ""
    },
    {
        title: "Advisor Staff",
        category: "design",
        description: "Diseño publicitario integral, comunicación interna corporativa (bienvenida de empleados, carnets, firmas de correo institucionales, tarjetas y bonos de fin de año) y piezas promocionales para redes sociales. Creación de identidad de marca y logotipo para terceros como OperaFácil, rediseño de H&H y producción multimedia de videos promocionales.",
        metrics: [
            "Diseño Corporativo & Bienvenida Staff",
            "Carnetización & Firma Institucional",
            "Tarjetas / Bonos Fin de Año & Tarifarios",
            "Branding OperaFácil & Rediseño H&H",
            "Producción de Video & Redes Sociales"
        ],
        image: "img/bIENBENIDAADVISOR.png",
        images: [
            { url: "img/bIENBENIDAADVISOR.png", label: "Bienvenida Empleados" },
            { url: "img/DISENOTAJETABONOADVISOR.png", label: "Tarjeta Fin de Año / Bono" },
            { url: "img/DISENOCARNETADVISOR.png", label: "Carnet Corporativo" },
            { url: "img/disenodefirmacorreoelectronicoadvisor.png", label: "Firma de Correo" },
            { url: "img/TARIFARIOH&HADVISOR_1.pdf.png", label: "Tarifario H&H" },
            { url: "img/OperaFacilcreacionlogodisenoadvisor_1.png", label: "Logo OperaFácil" },
            { url: "img/OperaFacilcreaciondisenoadvisor_2.png", label: "Rediseño H&H" },
            { url: "img/comunicacioninternaadvisor.jpg", label: "Comunicación Interna" },
            { url: "img/videoadvisorredessociales.mp4", label: "Video Redes Social" },
            { url: "img/videofindeanoadvisor.mp4", label: "Video Fin de Año" }
        ],
        tags: ["Branding", "Comunicación Interna", "Social Media", "Video", "Illustrator", "Photoshop"],
        liveUrl: "https://www.linkedin.com/in/jeanny-paola-tole-oliveros-6a95a676",
        liveLabel: "Ver en LinkedIn &rarr;",
        repoUrl: ""
    }
];