data_condition = [
    {
        title: "Apresado (Grappled)",
        icon: "grab",
        subtitle: "Te han agarrado",
        description: "Estás inmovilizado por una criatura, trampa o efecto",
        reference: "SFCR, pág. 273.",
        bullets: [
            "No puedes moverte y sufres un penalizador -2 a la CA, tiradas de ataque, salvaciones de Reflejos, pruebas de iniciativa y pruebas de característica o de habilidad basadas en Destreza, excepto las llevadas a cabo para apresar también a tu oponente o escapar de una presa.",
			"No puedes llevar a cabo acción alguna que requiere dos manos ( o extremidades equivalentes), ni puedes llevar a cabo ataques de oportundad.",
			"No puedes usar el Sigilo para esonderte de la criatra que te está apresando, ni siquiera si una aptitud especial te permite esconderte cuando normalmente no podrías. Si te vuelves invisible mediante un conjuro u otra aptitud obtienes un bonificador +2 por circunstancia a tu prueba para escapar de la presa, pero no obtienes ningún otro beneficio."
        ]
    },
		{
        title: "Asustado (Frightened)",
        icon: "sharp-smile",
        subtitle: "Estás asustado",
        description: "Huyes lo mejor que puedes del origen de tu miedo",
        reference: "SFCR, pág. 273.",
        bullets: [
            "Sufres un penalizador -2 a las tiradas de ataque,de salvación, pruebas de habilidad y de característica.",
			"Puedes usar aptitudes especiales, incluidos conujuros, para huir; de hecho, debes emplear tales medios si suponen la única forma de escapar.",
			"Si ya estás asustado y sufres un efecto que te dejara asustado, la duración de este segundo estado se suma a la del estado asustado que ya sufres."
        ]
    },
	{
        title: "Aterrado (Cowering)",
        icon: "sharp-smile",
        subtitle: "El miedo te paraliza",
        description: "El miedo te paraliza",
        reference: "SFCR, pág. 273.",
        bullets: [
            "Estás desprevenido y no puedes llevar a cabo acción alguna."
        ]
    },
	{
        title: "Atontado (Dazed)",
        icon: "internal-injury",
        subtitle: "No puedes actuar",
        description: "Eres incapaz de actuar con normalidad.",
        reference: "SFCR, pág. 273.",
        bullets: [
            "No puedes llevar a cabo acción alguna, pero no sufres penalizadores a la CA.",
			"Lo habitual es que el estado atontado dure 1 asalto."
        ]
    },
	{
        title: "Aturdido (Stunned)",
        icon: "internal-injury",
        subtitle: "Estás aturdido",
        description: "Estás aturdido",
        reference: "SFCR, pág. 273.",
        bullets: [
            "Dejas caer todo lo que llevas en las manos.",
			"Eres incapaz de emprender acciones y estás desprevenido."
        ]
    },
	{
        title: "Cegado (Blinded)",
        icon: "one-eyed",
        subtitle: "No puedes ver",
        description: "No puedes ver",
        reference: "SFCR, pág. 273.",
        bullets: [
            "Estás despreveido y sufres un penalizador -4 a la mayoría de pruebas de habilidad basadas Fuerza y Destreza, así como a las pruebas enfrentadas de Percepción.",
			"Todas las pruebas y acciones que dependan de la vista fallan automáticamente.",
			"No puedes observar a otras criaturas, lo que significa que para ti todos los enemigos se consideran que tienen ocutacion total.",
			"Debes superar una prueba de Acrobacias CD 10 para moverta más deprisa que a medi velocidad. Si fallas dicha prueba, caes tumbado.",
			"Los personajes que permanecen cegados mucho tiempo acaban por acostumbrarse a estos inconvenientes y pueden superar algunos de ellos. Las criaturas que resultan cegadas pero que tienen un sentido preciso además de la vista siguen fallando todas las pruebas y actividades que dependen de la vista, pero no sufren ninguno de los demas efectos."
        ]
    },
	{
        title: "Confuso (Confused)",
        icon: "one-eyed",
        subtitle: "Estás mentalmente confundido",
        description: "Estás mentalmente confundido y no puedes actuar con normalidad.",
        reference: "SFCR, pág. 273.",
        bullets: [
            "No puedes distinguir entre amigos y enemigos y tratas a todas las criaturas como enemigos, incluyendo a tus amigos y familia si es el caso.",
			"Un aliado que quiera lanzar sobre ti un conjuro beneficioso con alcance de toque tendrá que llevar a cabo una tirada de ataque contra tu CAE ya que no se te puede considerar un objetivo voluntario.",
			"Si eres atacado estando confuso, siempre atacas a la criatura que te atacó hasta que ha muerto o no está ya a la vista, si no te resulta imposibe atacarla en ese asalto.",
			"Mientras estás confuso, no puedes llevar a cabo ataques de oportunidad contra ninguna criatura o cosa a la que no estás ya atacando.",
			"Si no estás entregado a atacar a un objetivo, tira en la siguiente tabla al inicio de cada turno para ver lo que haces en ese asalto.",
			"<table><tr><th>===D%===</th><th></th><th></th><th style='text-align:left'>COMPORTAMIENTO</th></tr><tr><td>01-25</td><td></td><td></td><td>Actúas con normalidad.</td></tr><tr><td>26-50</td><td></td><td></td><td>No haces nada, salvo balbucear de forma incoherente.</td></tr><tr><td>51-75</td><td></td><td></td><td>Te inflinges a ti mismo 1d8 puntos de daño + modificador por FUE con un objeto que tengas a mano.</td></tr><tr><td>76-100</td><td></td><td></td><td>Atacas a la criatura más próxima.</td></tr></table>",
			"Si no puedes llevar a cabo la acción indicada, no haces otra cosa que balbucear de forma incoherente.",
			"Los atacantes no disfrutan de ninguna ventaja especial al atacar a un personajes confuso."
        ]
    },
	{
        title: "Descentrado (Off-kilter)",
        icon: "one-eyed",
        subtitle: "Desorientado y flotando",
        description: "Estás desorientado y flotando en gravedad cero.",
        reference: "SFCR, pág. 273.",
        bullets: [
            "No puedes llevar a cabo acciones de movimiento para mover tu velocidad, gatear o dar un paso protegido.",
			"Estás desprevenido y sufres un penalizador -2 a las tiradas de ataque.",
			"Debes usar un método de propulción para enderezarte o agarrarte a un objeto estabilizante como una pared o una escalera (normamente como una acción de movimiento) para poner fin a este estado."
        ]
    },
		{
        title: "Desestabilizado (Off-target)",
        icon: "one-eyed",
        subtitle: "Perdiste concentración",
        description: "Has perdido tu concentración en la batalla.",
        reference: "SFCR, pág. 273.",
        bullets: [
		"Sufres un penalizador -2 a las tiradas de ataque mientras estás desestabilizado."
            
        ]
    },
	{
        title: "Deslumbrado (Dazzled)",
        icon: "one-eyed",
        subtitle: "No puedes ver",
        description: "Eres incapaz de ver debido a una sobeestimulación lumínica de los ojos.",
        reference: "SFCR, pág. 274.",
        bullets: [
            "Sufres un penalizador -1 a las tiradas de ataque y a las pruebas de Percepción basadas en vista."
        ]
    },
	{
        title: "Despavorido (Panicked)",
        icon: "sharp-smile",
        subtitle: "Huyes de tu miedo",
        description: "Dejas caer lo que tienes en las manos y huyes tan rápido como puedes en una dirección aleatoria alejándote del origen de tu miedo, al igual que de cualquier otro peligro con el que te topas.",
        reference: "SFCR, pág. 274.",
        bullets: [
            "No puedes llevar a cabo ninguna otra acción.",
			"Sufres un penalizador -2 a todas las tiradas de salvación, pruebas de habilidad y de característica.",
			"Si te ves acorralado, te encoges de miedo y no atacas, normalmente usando la acción de defensa total en combate y nada más.",
			"Puedes utilizar aptitudes especiales, incluidos conjuros, para huir; de hecho, debes emplear tales medios si suponen la única forma de escapar."
        ]
    },
	{
        title: "Desprevenido (Flat-footed)",
        icon: "sharp-smile",
        subtitle: "Te toman por sorpresa",
        description: "Al inicio de un combate, si resultas sorprendido, estás desprevanido hasta que eres consciente del combate y has tenido oportunidad de actuar.",
        reference: "SFCR, pág. 274.",
        bullets: [
            "Muchos otros efectos podrán provocar que pases a estar desprevenido.",
			"Sufres un penalizador -2 a la CA y no puedes usar reacciones."
        ]
    },
	{
        title: "Dormido (Asleep)",
        icon: "crawl",
        subtitle: "Estás durmiendo e indefenso",
        description: "Estás durmiendo e indefenso.",
        reference: "SFCR, pág. 275.",
        bullets: [
            "Sufres un penalizador -10 a las pruebas de Percepción para advertir cualquier cosa.",
			"Si superas la prueba de Percepción para advertir algo a pesar del penalizador, te despiertas automáticamente.",
			"También te despiertas si te abofetean o te hieren.",
			"Un aliado puede despertarte como acción estándar."
        ]
    },
	{
        title: "Enmarañado (Entangled)",
        icon: "crawl",
        subtitle: "Estás enredado",
        description: "Este estado dificulta la movilidad, pero no la impide por completo, si las ataduras no están sujetas a un objeto inmóvil o aferradas por una fuerza opuesta.",
		reference: "SFCR, pág. 275.",
        bullets: [
            "Te mueves a la mitad de tu velocidad.",
			"No puedes correr ni cargar y sufres un penalizador -2 a la CA, tiradas de ataque, salvaciones de Reflejos, pruebas de iniciativa y pruebas de caracerística y de habilidad basadas en la Destreza."
        ]
    },
    {
        title: "Ensordecido (Deafened)",
        icon: "elf-ear",
        subtitle: "No puedes oír",
        description: "No puedes oír",
        reference: "SFCR, pág. 275.",
        bullets: [
            "Sufres un penalizador -4 a las pruebas de iniciativa y a las pruebas de Percepción opuestas y fallas automáticamente las pruebas de Percepción basadas en oído.",
			"Los personajes que permanecen mucho tiempo en este estado acaban por acostumbrarse a los inconvenientes y pueden superar algunos de ellos."
        ]
    },
	{
        title: "Estabilizado (Stable)",
        icon: "internal-injury",
        subtitle: "Ya no estás muriendo",
        description: "Si estabas moribundo pero has gastado Puntos de Resolución para estabilizarte o has recibido primeros auxilios, estás estabilizado",
        reference: "SFCR, pág. 275.",
        bullets: [
			"Has dejado de estar moribudo, pero sigues estando inconsciente."
        ]
    },
	{
        title: "Estremecido (Shaken)",
        icon: "smitten",
        subtitle: "Estás estremecido",
        description: "Estás estremecido",
        reference: "SFCR, pág. 275.",
        bullets: [
            "Sufres un penalizador -2 a las tiradas de ataque y de salvación y a las pruebas de habilidad y de característica mientras estás estremecido.",
			"Si ya estás estremecido y sufres un efecto que te dejaría estremecido, la duración de este segundo estado se suma a la del estado estremecido que ya sufres."
		
        ]
    },
	{
        title: "Exhausto (Exhausted)",
        icon: "crawl",
        subtitle: "Estás extremadamente cansado",
        description: "Estás extremadamente cansado",
        reference: "SFCR, pág. 275.",
        bullets: [
            "Te mueves a la mitad de tu velocidad, no puedes correr ni cargar y sufres un penalizador -3 a tu CA, tiradas de ataque, tiradas de daño cuerpo a cuerpo, tiradas de daño con armas arrojadizas, salvaciones de Reflejos, pruebas de iniciativa y pruebas de habilidad y características basadas en la Fuerza y la Destreza.",
			"La cantidad de peso que puedes cargar sin quedar impedido se reduce en 3.",
			"Tras 1 hora de descanso completo, pasas a estar fatigado en lugar de exhasuto."
        ]
    },
	{
        title: "Fascinado (Fascinated)",
        icon: "smitten",
        subtitle: "Has quedado embelesado",
        description: "Mientras sufres el estado fascinado, te quedas de pie o te sientas tranquilamente, sin hacer nada salvo prestar atención al efecto que te ha fascinado, durante tanto tiempo como dura.",
        reference: "SFCR, pág. 275.",
        bullets: [
            "Sufres un penalizador -4 a las pruebas de habilidad hechas pasivamente en respuesta a acciones de otros, como las de Percepción.",
			"Cualquier amenaza potencial, como que se acerque una criatura hostil, te dará derecho a una nueva tirada de salvación contra el efecto fascinador.",
			"Cualquier amenaza obvia, como alquien desenvainando un arma, lanzando un conjuro o apuntándote con un arma a distancia, romperá el efecto inmediatamente.",
			"Un aliado puede liberarte del efecto si te sacude con fuerza como acción estándar."
        ]
    },
	{
        title: "Fatigado (Fatigued)",
        icon: "crawl",
        subtitle: "Estás cansado",
        description: "Estás cansado",
        reference: "SFCR, pág. 276.",
        bullets: [
            "No puedes correr ni cargar y sufres un penalizador -1 a tu CA, tiradas de ataque, tiradas de daño cuerpo a cuerpo, salvaciones de Reflejos, pruebas de iniciativa y pruebas de habilidad y características basadas en la Fuerza y la Destreza.",
			"La cantidad de peso que puedes cargar sin quedar impedido se reduce en 1.",
			"Si estás fatigado, llevar a cabo una actividad que suele causar fatiga hace que quedes exhausto.",
			"Tras 8 hora de descanso completo, dejas de estar fatigado."
        ]
    },
	{
        title: "Grogui (Staggered)",
        icon: "internal-injury",
        subtitle: " ",
        description: "Puedes llevar a cabo una sola acción de movimiento o estándar por asalto, pero no ambas, ni acciones completas. Sigues siendo capaz de llvar a cabo acciones rápidas, pero no reacciones.",
        reference: "SFCR, pág. 276.",
        bullets: [
        ]
    },
	{
        title: "Impedido (Encumbered)",
        icon: "internal-injury",
        subtitle: " ",
        description: " ",
        reference: "SFCR, pág. 276.",
        bullets: [
			"Todas tus velocidades se reduen en 10 pies, tu bonificador máximo por Destreza a la CA se reduce a +2 y sufres un penalizador -5 a la pruebas basadas en Fuerza y Destreza (o el penalizador de tu armadura a la pruebas, el peor de los dos)."
        ]
    },   
	{
        title: "Inconsciente (Unconscious)",
        icon: "coma",
        subtitle: "Estás tumbado e indefenso",
        description: "Estás tumbado e indefenso",
        reference: "SFCR, pág. 276.",
        bullets: [
            "La inconsiencia puede resultar de tener 0 Puntos de Golpe.",
        ]
    },	
    {
        title: "Indefenso (Helpless)",
        icon: "internal-injury",
        subtitle: "No tienes acciones ni reacciones",
        description: "Estás atado, dormido, inconsiente o, por cualquier otra causa, completamente a merced de tu oponente",
        reference: "SFCR, pág. 276.",
        bullets: [
			"Se te considera que tienes Destreza 0 (lo que hará que tu modificador sea -5).",
			"Los ataques cuerpo a cuerpo contra ti tienen un bonificador +4 (equivalente a atacar a un objetivo tumbado).",
			"Los ataques a distancia no obtienen ningún bonificador especial."
        ]
    },
	   {
        title: "Indispuesto (Sickened)",
        icon: "internal-injury",
        subtitle: " ",
        description: "Sufres un penalizador -2 a todas las tiradas de ataque, tiradas de daño con armas, tiradas de salvación, pruebas de habilidad y pruebas de característica.",
        reference: "SFCR, pág. 276.",
        bullets: [
        ]
    },
    {
        title: "Mareado (Nauseated)",
        icon: "invisible",
        subtitle: "Tienes malestar estomacal",
        description: "Estás experimentando un malestar estomacal.",
        reference: "SFCR, pág. 276.",
        bullets: [
            "No puedes atacar, lanzar conjuros, concentrarte en conjuros o hacer cualquier cosa que requiere atención.",
			"Lo único que puedes hacer es una sola acción de movimiento por turno."
        ]
    },
    {
        title: "Moribundo (Dying)",
        icon: "dead-head",
        subtitle: "Al borde de la muerte",
        description: "Estás inconsiente y al borde de la muerte",
        reference: "SFCR, pág. 276.",
        bullets: [
            "Las criaturas a 0 Puntos de Golpe que no se han estabilizado están moribundas.",
			"Una criatura moribunda no puede llevar a cabo acción alguna y pierde 1 Punto de Resolución por asalto al final de su turno si no se estabiliza.",
			"Una criatura moribunda puede gastar 3 PR para estabilizarse y luego gastar 1 PR en un asalto subsiguiente para recuperar 1 PG y seguir luchando.",
			"Estabilizarse o ser curado por encima de los 0 Puntos de Golpe pone fin al estado moribundo, como también hace la muerte."
			
        ]
    },
	{
        title: "Muerto (Dying)",
        icon: "dead-head",
        subtitle: "Estás murrto",
        description: "Estás muerto cuando tienes 0 Puntos de Golpe, no estás estabilizado y no te quedan Puntos de Resolución pero deberías perder alguno debido a estar moribundo o sufrir daño estando morubundo.",
        reference: "SFCR, pág. 276.",
        bullets: [
            "También puedes morir por daño de caracerística, consunción de característic o niveles negativos o al sufrir daño masivo.",
			"Cuando estás muerto, tu alma abandona tu cuerpo y no puedes llevar a cabo ningún tipo de acción.",
			
        ]
    },
	{
        title: "Paralizado (Paralyzed)",
        icon: "internal-injury",
        subtitle: "Estás paralizado",
        description: "No puedes hacer nada",
		reference: "SFCR, pág. 276.",
        bullets: [
            "Una criatura paralizada está incapacitada (consulta Incapacitado) y no puede moverse ni hablar.",
            "La criatura falla automáticamente las tiradas de salvación de Fuerza y Destreza.",
            "Las tiradas de ataque contra la criatura tienen ventaja.",
            "Todos los ataques que impacten a la criatura son críticos si el atacante está a 5 pies o menos de ella."
        ]
    },
	{
        title: "Quemadura (Burning)",
        icon: "internal-injury",
        subtitle: "Estás paralizado",
        description: "No puedes hacer nada",
		reference: "SFCR, pág. 276.",
        bullets: [
            "Una criatura paralizada está incapacitada (consulta Incapacitado) y no puede moverse ni hablar.",
            "La criatura falla automáticamente las tiradas de salvación de Fuerza y Destreza.",
            "Las tiradas de ataque contra la criatura tienen ventaja.",
            "Todos los ataques que impacten a la criatura son críticos si el atacante está a 5 pies o menos de ella."
        ]
    },
	{
        title: "Roto (Broken)",
        icon: "internal-injury",
        subtitle: "Sólo objetos",
        description: "No puedes hacer nada",
		reference: "SFCR, págs. 276-277.",
        bullets: [
            "Una criatura paralizada está incapacitada (consulta Incapacitado) y no puede moverse ni hablar.",
            "La criatura falla automáticamente las tiradas de salvación de Fuerza y Destreza.",
            "Las tiradas de ataque contra la criatura tienen ventaja.",
            "Todos los ataques que impacten a la criatura son críticos si el atacante está a 5 pies o menos de ella."
        ]
    },
	{
        title: "Sangrando (Bleeding)",
        icon: "internal-injury",
        subtitle: "Estás paralizado",
        description: "No puedes hacer nada",
        bullets: [
            "Una criatura paralizada está incapacitada (consulta Incapacitado) y no puede moverse ni hablar.",
            "La criatura falla automáticamente las tiradas de salvación de Fuerza y Destreza.",
            "Las tiradas de ataque contra la criatura tienen ventaja.",
            "Todos los ataques que impacten a la criatura son críticos si el atacante está a 5 pies o menos de ella."
        ]
    },
	{
        title: "Sobrecargado (Overburdened)",
        icon: "internal-injury",
        subtitle: "Estás paralizado",
        description: "No puedes hacer nada",
        bullets: [
            "Una criatura paralizada está incapacitada (consulta Incapacitado) y no puede moverse ni hablar.",
            "La criatura falla automáticamente las tiradas de salvación de Fuerza y Destreza.",
            "Las tiradas de ataque contra la criatura tienen ventaja.",
            "Todos los ataques que impacten a la criatura son críticos si el atacante está a 5 pies o menos de ella."
        ]
    },
	{
        title: "Sujeto (Pinned)",
        icon: "grab",
        subtitle: "Te han agarrado",
        description: "Estás agarrado",
        reference: "PHB, pg. 290.",
        bullets: [
            "La velocidad de una criatura agarrada es 0 y no puede aumentar por encima de ese valor.",
            "Este estado termina si quien agarra queda incapacitado (consulta Incapacitado).",
            "Este estado también termina si algún efecto aleja a la criatura de quien (o lo que) la tiene agarrada, como cuando el conjuro ola atronadora hace salir despedida a una criatura."
        ]
    },
	{
        title: "Tumbado (Prone)",
        icon: "crawl",
        subtitle: "Estás derribado",
        description: "Estás derribado",
        reference: "PHB, pg. 292.",
        bullets: [
            "Tu única opción de movimineto es arrastarte, a menos que te levantes.",
            "Tienes desventaja en las tiradas de ataque.",
            "Las tiradas de ataque contra ti tienen ventaja si el atacante está a 5 pies de ti, de lo contrario el ataque tiene desventaja."
        ]
    }
]
