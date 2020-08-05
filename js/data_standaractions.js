data_action = [
	{
        title: "Activar un objeto",
        icon: "button-finger",
        subtitle: "Interactuar con un objeto",
        description: "Interactuar con un objeto",
        reference: "SFCR, pág. 244.",
        bullets: [
            "Muchos objetos tecnológicos y mágicos, como una mano cibernética, no necesitan activarse. Ciertos objetos, sin embargo, necesitan activarse para tener efecto. Si no se indica lo contrario, activar uno de dichos objetos requiere una acción estándar"
        ]
    },
	{
        title: "Anular un conjuro",
        icon: "magic-swirl",
        subtitle: "Finalizar un conjuro activo",
        description: "Finalizar un conjuro activo",
        reference: "SFCR, pág. 244.",
        bullets: [
            "Poner fin a un conjuro es una acción estándar (ver Duración para más información acerca de conjuros anulables)."
        ]
    },
    {
        title: "Atacar",
        icon: "saber-and-pistol",
        subtitle: "Ataque cuerpo a cuerpo o a distacia",
        description: "Llevar a cabo un único ataque es un acción estándar",
        reference: "SFCR, págs. 244-245.",
        bullets: [
            "<b>Ataques cuerpo a cuerpo:</b> Con un arma cuerpo a cuerpo, puedes atacar a cualquiera en una casilla adyacente a tu espacio. Tu modificador por Fuerza se suma a tus tiradas de ataque cuerpo a cuerpo y tiradas de daño cuerpo a cuerpo.",
            "<b>Ataques a distancia:</b> Con un arma a distancia, puedes disparar o atacar a un objetivo que está dentro del alcance máximo del arma y en tu línea de efecto. Tu modificacor por Destreza se suma a tus tiradas de ataque a distancia, pero no al daño.",
            "<b>Ataques a distancia con un arma arrojadiza:</b> Con un arma arroadiza o una granada, puedes llevar a cabo un ataque a distancia contra un objetivo que está dentro del alcance máximo del arma y en tu línea de efecto. Tu modificador por Fuerza se suma a tus tiradas de ataque a distancia con arma arrojadiza y tiradas de daño con armas con la propiedad especial arrojadiza. No sumas tu modificador por Fuerza a las tiradas de daño de granadas.",
            "<b>Apuntar a una intersección de casillas:</b> Al usar un arma arrojadiza que tiene área de efecto, como una granada, designas como objetivo una intersección de casillas específica del mapa de batalla táctico, en lugar de una criatura específica. Trata esto como un ataque a distancia contra CA 5."
        ]
    },
	    {
        title: "Concentrarse",
        icon: "third-eye",
        subtitle: "Mantener un conjuro",
        description: "Algunos conjuros requieren una concentración continuada para seguir funcionando",
        reference: "SFCR, pág. 246.",
        bullets: [
            "Concentrarse para mantener un conjuro es una acción estándar."
        ]
    },
	{
        title: "Defensa total",
        icon: "shield-echoes",
        subtitle: "Incrementa la defensa",
        description: "Te enfocas por completo en evitar ataques",
        reference: "SFCR, pág. 246.",
        bullets: [
            "Desde el inicio de esta acción obtienes un bonificador de +4 a tu CA hasta el inicio de tu siguiente turno.",
			"No puedes combinar la defensa total con otras acciones que aumenten tu CA.",
			"No puedes llevar a cabo ataques de oportunidad mientras te beneficias de la defensa total."
        ]
    },
	{
        title: "Fintar",
        icon: "two-shadows",
        subtitle: "Tratas de engañar al enemigo",
        description: "Intentas una finta con una prueba de Engañar",
        reference: "SFCR, pág. 246.",
        bullets: [
            "Usas tu acción estándar para intentar una finta con una prueba de Engañar, La CD es igual a 10 + el bonificador total de Averiguar intenciones del oponente o 15 + (1.5 x el VD del oponente), lo que sea mayor.",
			"No puedes fintar contra una criatura que no tiene puntuación de Inteligencia y no puedes tomar 10 ni 20 en una prueba de engañar para fintar.",
			"Cuando tienes éxito en una finta, tratas a tu oponente como desprevenido en tu siguiente ataque contra él antes del final de tu siguiente turno."
        ]
    },
	{
        title: "Fuego de cobertura",
        icon: "heavy-rain",
        subtitle: "Das cobertura a un aliado",
        description: "Llevas acabo un ataque a distancia que proporciona covertura a un aliado",
        reference: "SFCR, pág. 246.",
        bullets: [
            "Haz una tirada de ataque a distancia contra CA 15. Si impactas, no infliges ningún daño pero el aliado elegido obtiene un bonificador +2 por circunstancia a la CA contra el siguiente ataque de una criatura en tu línea de efecto, si dicho ataque tiene lugar antes de tu siguiente turno."
			]
    },
	{
        title: "Fuego hostigador",
        icon: "heavy-rain",
        subtitle: "Distraes a un enemigo",
        description: "Llevas acabo un ataque a distancia que distrae a un enemigo en tu línea de efecto",
        reference: "SFCR, pág. 246.",
        bullets: [
            "Haz una tirada de ataque a distancia contra CA 15. Si impactas, no infliges ningún daño, pero el siguiente aliado que ataque a ese oponente obtiene un bonificador +2 por circunstancia a su siguiente tirada de ataque, si sucede antes de tu siguiente turno."
			]
    },
	{
        title: "Lanzar un conjuro",
        icon: "magic-swirl",
        subtitle: "Lanzamiento de 1 acción estándar",
        description: "Lanza un conjuro con un tiempo de lanzamiento de 1 acción estándar",
        reference: "SFCR, pág. 246.",
        bullets: [
            "La gran mayoría de conjuros requiere por lo menos una acción estándar para lanzarse y a veces mas. Los conjuros que tardan más de un asalto en lanzarse requieren una acción completa por asalto hasta que están completos.",
			"Lanzar un cojuro requiere de una concentración considerable, lo que te obliga a bajar momentáneamente tus defensas.",
			"Si lanzas un conjuro provocas ataques de oportunidad por parte de los enemigos que te están amenazando, salvo que el conjuro específique que eso no sucede.",
			"Si el ataque de oportunidad te impacta y te inflige daño, no logras lanzar el conjuro y pierdes el espacio de conjuros."
        ]
    },
	{
        title: "Luchar a la defensiva",
        icon: "spartan",
        subtitle: "Aumentas tu defensa al atacar",
        description: "Puedes realizar un ataque con penalización a cambio de bonificación en tu defensa",
        reference: "SFCR, pág. 246.",
        bullets: [
            "Cuando atacas como parte de una acción estándar puedes decidir luchar a la defensiva.",
			"Si lo haces, sufres un penalizador de -4 a los ataques de dicho asalto, a cambio de un bonificador +2 a la CA hasta el inicio de tu siguiente turno."
        ]
		},
		{
        title: "Maniobra de combate",
        icon: "grab",
        subtitle: "Intentar una maniobra de combate",
        description: "Puedes intentar un de las maniobras de combate detalladas en la sección de Maniobras de Combate mas abajo en esta guía.",
        reference: "SFCR, págs, 246-247",
        bullets: [
            "Como acción estándar puedes intentar una maniobra de combate. Para resolverlas, elige un objetivo que tienes dentro de tu alcance cuerpo a cuerpo (lo que incluye armas con la propiedad especial de alcance) y lleva a cabo una tirada de ataque cuerpo a cuerpo contra su CA +8, los efectos de un éxito varían según la maniobra y se describen en la sección de Maniobras de Combate más adelante en la guía.",
			"Las maniobras de combate son: <b>Derribo, Desarme, Embestida, Presa, Reposicionamiento, Romper arma</b> y <b>Truco sucio</b>."
        ]
    },
	    {
        title: "Utilizar una aptitud especial",
        icon: "embrassed-energy",
        subtitle: "Utiliza una aptitud de raza o clase",
        description: "Hay tres tipos de aptitudes especiales: extraordinarias (Ex), sobrenaturales (Su) y sortílegas (Sp).",
        reference: "SFCR, pág, 247.",
        bullets: [
		"Usar una aptitud especial es normalmente una acción estándar, a menos que se trate de una aptitud continua o que la aptitud indique lo contrario.",
		"En casos raros, una aptitud puede requerir una acción completa o de movimiento para activarse.",
		"Usar una aptitud sortílega suele provocar ataques de oportunidad si no se indica lo contrario."
        ]
    },
]
