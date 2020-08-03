data_action = [
{
        title: "Activar un objeto",
        icon: "snatch",
        subtitle: "Interactuar con un objeto",
        description: "Interactuar con objeto",
        reference: "SFCR, pg. 244.",
        bullets: [
            "Muchos objetos tecnológicos y mágicos, como una mano cibernética, no necesitan activarse. Ciertos objetos, sin embargo, necesitan activarse para tener efecto. Si no se indica lo contrario, activar uno de dichos objetos requiere una acción estándar"
        ]
    },
	{
        title: "Anular un conjuro",
        icon: "snatch",
        subtitle: "Finalizar un conjuro activo",
        description: "Finalizar un conjuro activo",
        reference: "SFCR, pg. 244.",
        bullets: [
            "Poner fin a un conjuro es una acción estándar (rer Duración para más información acrca de conjuros anulables)"
        ]
    },

    {
        title: "Atacar",
        icon: "crossed-swords",
        subtitle: "Ataque cuerpo a cuerpo o a distacia",
        description: "Llevar a cabo un único ataque es un acción estándar",
        reference: "SFCR, pgs. 244-245.",
        bullets: [
            "<b>Ataques cuerpo a cuerpo:</b> Con un arma cuerpo a cuerpo, puedes atacar a cualquiera en una casilla adyacente a ti espacio. Tu modificador por Fuerza se suma a tus tiradas de ataque cuarpo a cuerpo y tiradas de daño cuarpo a cuerpo.",
            "<b>Ataques a distancia:</b> Con un arma a distancia, puedes disparar o atacar a un objetivo que está dentro del alcance máximo del arma y en tu línea de efecto. Tu modificacor por Destreza se suma a tus tiradas de ataque a distancia, pero no al daño.",
            "<b>Ataques a distancia con un arma arrojadiza:</b> Con un arma arroadiza o una granada, puedes llevar a cabo un ataque a distancia contra un objetivo que está dentro del alcance máximo del arma y en tu linea de efecto. Tu modificador por Fuerza se suma a tus tiradas de ataque a distancia con arma arrojadiza y tiradas de daño con armas con la propiedad especial arrojadiza. No sumas tu modificador por Fuerza a las tiradas de daño de granadas.",
            "<b>Apuntar a una intersección de casillas:</b> Al usar un arma arrojadiza que tiene área de efecto, como una granada, designas como objetivo una intersección de casillas específica del mapa de batalla táctico, en lugar de una criatura específica. Trata esto como un ataque a distancia contra CA 5."
        ]
    },
	    {
        title: "Concentrarse",
        icon: "crossed-swords",
        subtitle: "Concentrarse para mantener un conjuro",
        description: "Algunos conjuros requieren una concentración continuada para seguir funcionando",
        reference: "SFCR, pgs. 246.",
        bullets: [
            "Concentrarse para mantener un conjuro es una acción estándar."
        ]
    },
	{
        title: "Defensa total",
        icon: "aura",
        subtitle: "Incrementa la defensa",
        description: "Te enfocas por completo en evitar ataques",
        reference: "SFCR, pg. 246.",
        bullets: [
            "Desde el inicio de esta acción obtienes un bonificador de +4 a tu CA hasta el inicio de tu siguiente turno.",
			"No puedes combinar la defensa total con otras acciones que aumenten tu CA.",
			"No puedes llevar a cabo ataques de oportunidad mientras te beneficias de la defensa total."
        ]
    },
	{
        title: "Fintar",
        icon: "aura",
        subtitle: "Tratas de engañar al enemigo",
        description: "Intentas una finta con una prueba de Engañar",
        reference: "SFCR, pg. 246.",
        bullets: [
            "Usas tu acción estándar para intentar una finta con una prueba de Engañar, La CD es igual a 10 + el bonificador total de Averiguar intenciones del oponente o 15 + (1.5 x el VD del oponente), lo que sea mayor.",
			"No puedes fintar contra una criatura que no tiene puntuación de Inteligencia y no puedes tomar 10 ni 20 en una prueba de engañar para fintar.",
			"Cuando tienes éxito en una finta, tratas a tu oponente como desprevanido en tu siguiente ataque contra él antes del final de tu siguiente turno."
        ]
    },
	{
        title: "Fuego de covertura",
        icon: "aura",
        subtitle: "Proporcionas covertura a un aliado",
        description: "Intentas una finta con una prueba de Engañar",
        reference: "SFCR, pg. 246.",
        bullets: [
            "Usas tu acción estándar para intentar una finta con una prueba de Engañar, La CD es igual a 10 + el bonificador total de Averiguar intenciones del oponente o 15 + (1.5 x el VD del oponente), lo que sea mayor.",
			"No puedes fintar contra una criatura que no tiene puntuación de Inteligencia y no puedes tomar 10 ni 20 en una prueba de engañar para fintar.",
			"Cuando tienes éxito en una finta, tratas a tu oponente como desprevanido en tu siguiente ataque contra él antes del final de tu siguiente turno."
        ]
    },
	    {
        title: "Agarrar (Grapple)",
        icon: "grab",
        subtitle: "Ataque especial cuerpo a cuerpo",
        description: "Intentas agarrar a una criatura o luchar con ella",
        reference: "PHB, pg. 195.",
        bullets: [
            "Puedes usar la acción <i> Atacar </i> para realizar un ataque cuerpo a cuerpo especial, un agarre. Si eres capaz de realizar múltiples ataques con la acción <i>Atacar</i>, este ataque reemplaza a uno de ellos.",
            "El objetivo de tu agarre debe estar dentro de tu alcance y tener un tamaño que esté, como mucho, una categoría por encima de la tuya.",
            "Utilizando al menos una mano libre, intentas sujetar al objetivo mediante una prueba de agarrar en lugar de una tirada de ataque: haz una prueba de Fuerza (Atletismo) enfrentada a una prueba de Fuerza (Atletismo) o Destreza (Acrobacia) del objetivo, según elija este último.",
            "Si tienes éxito, sometes al objetivo al estado Agarrado."
        ]
    },
    {
        title: "Empujar (Shove)",
        icon: "hand",
        subtitle: "Ataque especial cuerpo a cuerpo",
        description: "Empuja a una criatura, ya sea para derribarla o para alejarla de ti",
        reference: "PHB, pg. 195.",
        bullets: [
            "Utilizando la acción de <i>Atacar</i>, puedes realizar un ataque cuerpo a cuerpo especial para empujar a un criatura. Si eres capaz de realizar múltiples ataques con la acción Atacar, este ataque reemplaza a uno de ellos.",
            "El objetivo de tu empuje no debe ser más de un tamaño más grande que tú, y debe estar a tu alcance.",
            "Realiza una prueba de Fuerza (Atletismo) enfrentada por la Fuerza (Atletismo) o Destreza (Acrobacia) del objetivo (el objetivo elige la habilidad a usar).",
            "Si tienes éxito, ya sea que derribles al objetivo o lo empujes 5 pies lejos de ti."
        ]
    },
    {
        title: "Lanzar un conjuro",
        icon: "magic-swirl",
        subtitle: "Tiempo de lanzamiento de 1 acción",
        description: "Lanza un conjuro con un tiempo de lanzamiento de 1 acción",
        reference: "PHB, pg. 192.",
        bullets: [
            "No puedes lanzar un conjuro con tu acción y un conjuro diferente con tu acción adicional en el mismo turno, excepto si la acción se usa para lanzar un truco.",
            "El objetivo de un conjuro debe estar dentro del rango del conjuro. Para apuntar a algo, debes tener un camino claro hacia él, de modo que no pueda estar detrás de la cobertura total.",
            "Los conjuros con componentes materiales no consumen el material a menos que se indique explícitamente. A menos que se indique el costo de un material, puedes suponer que el costo es insignificante y que el material simplemente está disponible en una bolsa de componentes.",
            "Algunos conjuros requieren que mantengas la concentración para mantener su magia activa. Si pierdes la concentración, tal conjuro termina. Pierdes la concentración en un conjuro si lanzas otro conjuro que requiere concentración o cuando estás incapacitado. Cada vez que tomas daño, debes hacer una tirada de salvación de Constitución para mantener tu concentración. La CD es igual a 10 o la mitad del daño que recibes, el que sea mayor.",
        ]
    },
    {
        title: "Correr (Dash)",
        icon: "sprint",
        subtitle: "Velocidad de movimiento doble",
        description: "Obtienes movimiento adicional para el turno en curso",
        reference: "PHB, pg. 192.",
        bullets: [
            "El incremento es igual a tu velocidad, después de aplicarle cualquier modificador."
        ]
    },
    {
        title: "Destrabarse (Disengage)",
        icon: "journey",
        subtitle: "Previene ataques de oportunidad",
        description: "Tu movimiento no provoca ataques de oportunidad durante el resto del turno",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    
    {
        title: "Escapar de un agarre (Escape)",
        icon: "manacles",
        subtitle: "Liberarte de un agarre",
        description: "Escapas de un agarre",
        reference: "PHB, pg. 195.",
        bullets: [
            "Para escapar de un agarre, debes tener éxito en una prueba de Fuerza (Atletismo) o Destreza (Acrobacia) enfrentado por la Fuerza (Atletismo) de quien te sujeta.",
            "Escapar de otras condiciones que te limitan (como esposas) puede requerir una prueba de Destreza o Fuerza, según lo especifique la condición."
        ]
    },
    {
        title: "Ayudar (Help)",
        icon: "telepathy",
        subtitle: "Le proporcionas ventaja a un aliado",
        description: "Propoprcionas a un aliado ventaja en una prueba de habilidad o de ataque",
        reference: "PHB, pg. 192.",
        bullets: [
            "El objetivo obtiene ventaja en la siguiente prueba de habilidad para realizar la tarea con la que lo estás ayudando.",
            "Alternativamente, el objetivo gana ventaja en la siguiente tirada de ataque contra una criatura a menos de 5 pies de ti.",
            "La ventaja dura hasta el comienzo de tu próximo turno."
        ]
    },
    
    {
        title: "Usar un escudo",
        icon: "round-shield",
        subtitle: "Equipar o desequipar un escudo",
        description: "Equipar o desequipar un escudo",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "Un escudo siempre toma una acción para equipar o desequipar",
            "La armadura tarda varios minutos en equiparse o desequiparse."
        ]
    },
    {
        title: "Esconderse",
        icon: "hood",
        subtitle: "",
        description: "Intentar ocultarse",
        reference: "PHB, pg. 192.",
        bullets: [
            "No puedes esconderte de una criatura que puede verte. Debes tener una cobertura total, estar en un área muy obscura, ser invisible o bloquear la visión del enemigo.",
            "Si haces ruido (como gritar una advertencia o derribar un jarrón), te descubrirás.",
            "Cuando intentes esconderte, haz una prueba de Destreza (Sigilo) y anota el resultado. Hasta que te descubran o dejes de esconderte, el total de esa tirada será enfrentado por una prueba de Sabiduría (Percepción) de cualquier criatura que busque activamente las señales de tu presencia.",
            "Una criatura te advierte incluso si no está buscando, a menos que tu pruebda de Sigilo sea más alta que su Percepción Pasiva.",
            "Fuera de combate, también puedes realizar una prueba de Destreza (Sigilo) para ocultarte de los enemigos, escabullirte de los guardias, escabullirte sin ser notado, o acechar a alguien sin ser visto o escuchado."
        ]
    },
    {
        title: "Buscar",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Dedicas tu atención a encontrar algo",
        reference: "PHB, pg. 193.",
        bullets: [
            "Dependiendo de la naturaleza de tu búsqueda, el DM puede pedirte que realices una prueba de Sabiduría (Percepción) o una prueba de Inteligencia (Investigación)."
        ]
    },
    {
        title: "Preparar una acción (Ready)",
        icon: "stopwatch",
        subtitle: "Elige una circunstancia y una acción",
        description: "Elige una circunstancia y una acción de respuesta",
        reference: "PHB, pg. 193.",
        bullets: [
            "Primero, decide qué circunstancia (que puedas percibir) activará tu reacción.",
            "Luego, elige la acción que realizarás en respuesta a dicha activación. Como alternativa, en vez de una acción puedes decidir moverte hasta tu velocidad.",
            "Cuando ocurra la circunstancia de activación, podrás elegir entre usar tu reacción al terminar esta o ignorarla.",
            "Cuando te preparas para lanzar un conjuro, lo lanzas con normalidad pero retienes su energía, que liberarás usando tu reacción cuando se produzca la circunstancia activadora. Sólo los conjuros cuyo tiempo de lanzamiento sea de 1 acción pueden formar parte de una acción preparada. Además, el esfuerzo que implica contener las energías mágicas hasta el momento de liberarlas exige concentración."
        ]
    },
    {
        title: "Usar un rasgo de clase",
        icon: "embrassed-energy",
        subtitle: "Algunos rasgos utilizan acciones",
        description: "Utiliza un rasgo racial o de clase que use una acción",
        reference: "Revisa la página de tu clase para más información.",
        bullets: [

        ]
    },
    {
        title: "Estabilizar a una criatura",
        icon: "first-aid",
        subtitle: "Primeros auxilios a criatura moribunda",
        description: "Evita que una criatura moribunda tenga que realizar tiradas de salvacion contra muerte",
        reference: "PHB, pg. 197.",
        bullets: [
            "Realiza un prueba de Sabiduría (Medicina) CD 10.",
            "Con éxito, la criatura está estable y ya no necesita realizar tiradas de salvación contra muerte.",
            "Una criatura estable recupera 1 punto de vida después de 1d4 horas."
        ]
    },
    {
        title: "Improvisar",
        icon: "juggler",
        subtitle: "Cualquier acción no en esta lista",
        description: "Realiza cualquier acción que puedas imaginar",
        reference: "PHB, pg. 193.",
        bullets: [
            "Cuando describes una acción no detallada en las reglas, el DM te dirá si la acción es posible y que prueba requieres hacer, si la hay, para determinar el éxito o el fallo."
        ]
    }
]
