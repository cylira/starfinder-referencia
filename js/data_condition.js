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
        subtitle: "Estás cansado",
        description: "El cansansio se mide en seis niveles",
        reference: "SFCR, pág. 275.",
        bullets: [
            "<table><tr><th>Nivel</th><th></th><th></th><th style='text-align:left'>Consecuencia</th></tr><tr><td>1</td><td></td><td></td><td>Desventaja en pruebas de característica</td></tr><tr><td>2</td><td></td><td></td><td>Velocidad reducida a la mitad</td></tr><tr><td>3</td><td></td><td></td><td>Desventaja en tiradas de ataque y de salvación</td></tr><tr><td>4</td><td></td><td></td><td>Puntos de golpe máximos reducidos a la mitad</td></tr><tr><td>5</td><td></td><td></td><td>Velocidad reducida a 0</td></tr><tr><td>6</td><td></td><td></td><td>Muerte</td></tr></table>",
            "En cada nivel de cansancio sufres tanto la consecuencia del mismo como todas las de los niveles inferiores.",
            "Finalizar un descanso largo reduce el nivel de cansancio en 1, siempre y cuando hayas comido y bebido algo durante el mismo.",
            "También, ser resucitado de entre los muertos reduce el nivel de cansancio por 1."
        ]
    },
	{
        title: "Enmarañado (Entangled)",
        icon: "crawl",
        subtitle: "Estás cansado",
        description: "El cansansio se mide en seis niveles",
		reference: "SFCR, pág. 275.",
        bullets: [
            "<table><tr><th>Nivel</th><th></th><th></th><th style='text-align:left'>Consecuencia</th></tr><tr><td>1</td><td></td><td></td><td>Desventaja en pruebas de característica</td></tr><tr><td>2</td><td></td><td></td><td>Velocidad reducida a la mitad</td></tr><tr><td>3</td><td></td><td></td><td>Desventaja en tiradas de ataque y de salvación</td></tr><tr><td>4</td><td></td><td></td><td>Puntos de golpe máximos reducidos a la mitad</td></tr><tr><td>5</td><td></td><td></td><td>Velocidad reducida a 0</td></tr><tr><td>6</td><td></td><td></td><td>Muerte</td></tr></table>",
            "En cada nivel de cansancio sufres tanto la consecuencia del mismo como todas las de los niveles inferiores.",
            "Finalizar un descanso largo reduce el nivel de cansancio en 1, siempre y cuando hayas comido y bebido algo durante el mismo.",
            "También, ser resucitado de entre los muertos reduce el nivel de cansancio por 1."
        ]
    },
    {
        title: "Ensordecido (Deafened)",
        icon: "elf-ear",
        subtitle: "No puedes oír",
        description: "No puedes oír",
        reference: "SFCR, pág. 275.",
        bullets: [
            "Una criatura ensordecida no puede oír y falla automáticamente todas las pruebas de característica que requieran el oído."
        ]
    },
	{
        title: "Estabilizado (Stable)",
        icon: "internal-injury",
        subtitle: "No tienes acciones ni reacciones",
        description: "Una criatura incapacitada no puede llevar a cabo acciones ni reacciones",
        reference: "SFCR, pág. 275.",
        bullets: [
        ]
    },
	{
        title: "Estremecido (Shaken)",
        icon: "smitten",
        subtitle: "Estás hechizado",
        description: "Estás hechizado por otra criatura",
        reference: "SFCR, pág. 275.",
        bullets: [
            "Una criatura hechizada no puede atacar ni elegir como objetivo de efectos dañinos o mágicos a quien la hechizó.",
			"Quien hechizó a la criatura tiene ventaja en las pruebas de característica para interactuar socialmente con ella."
        ]
    },
	{
        title: "Exhausto (Exhausted)",
        icon: "crawl",
        subtitle: "Estás cansado",
        description: "El cansansio se mide en seis niveles",
        reference: "SFCR, pág. 275.",
        bullets: [
            "<table><tr><th>Nivel</th><th></th><th></th><th style='text-align:left'>Consecuencia</th></tr><tr><td>1</td><td></td><td></td><td>Desventaja en pruebas de característica</td></tr><tr><td>2</td><td></td><td></td><td>Velocidad reducida a la mitad</td></tr><tr><td>3</td><td></td><td></td><td>Desventaja en tiradas de ataque y de salvación</td></tr><tr><td>4</td><td></td><td></td><td>Puntos de golpe máximos reducidos a la mitad</td></tr><tr><td>5</td><td></td><td></td><td>Velocidad reducida a 0</td></tr><tr><td>6</td><td></td><td></td><td>Muerte</td></tr></table>",
            "En cada nivel de cansancio sufres tanto la consecuencia del mismo como todas las de los niveles inferiores.",
            "Finalizar un descanso largo reduce el nivel de cansancio en 1, siempre y cuando hayas comido y bebido algo durante el mismo.",
            "También, ser resucitado de entre los muertos reduce el nivel de cansancio por 1."
        ]
    },
	{
        title: "Fascinado (Fascinated)",
        icon: "smitten",
        subtitle: "Estás hechizado",
        description: "Estás hechizado por otra criatura",
        reference: "SFCR, pág. 275.",
        bullets: [
            "Una criatura hechizada no puede atacar ni elegir como objetivo de efectos dañinos o mágicos a quien la hechizó.",
			"Quien hechizó a la criatura tiene ventaja en las pruebas de característica para interactuar socialmente con ella."
        ]
    },
	{
        title: "Fatigado (Fatigued)",
        icon: "crawl",
        subtitle: "Estás cansado",
        description: "El cansansio se mide en seis niveles",
        reference: "PHB, pg. 291.",
        bullets: [
            "<table><tr><th>Nivel</th><th></th><th></th><th style='text-align:left'>Consecuencia</th></tr><tr><td>1</td><td></td><td></td><td>Desventaja en pruebas de característica</td></tr><tr><td>2</td><td></td><td></td><td>Velocidad reducida a la mitad</td></tr><tr><td>3</td><td></td><td></td><td>Desventaja en tiradas de ataque y de salvación</td></tr><tr><td>4</td><td></td><td></td><td>Puntos de golpe máximos reducidos a la mitad</td></tr><tr><td>5</td><td></td><td></td><td>Velocidad reducida a 0</td></tr><tr><td>6</td><td></td><td></td><td>Muerte</td></tr></table>",
            "En cada nivel de cansancio sufres tanto la consecuencia del mismo como todas las de los niveles inferiores.",
            "Finalizar un descanso largo reduce el nivel de cansancio en 1, siempre y cuando hayas comido y bebido algo durante el mismo.",
            "También, ser resucitado de entre los muertos reduce el nivel de cansancio por 1."
        ]
    },
	{
        title: "Grogui (Staggered)",
        icon: "internal-injury",
        subtitle: "No tienes acciones ni reacciones",
        description: "Una criatura incapacitada no puede llevar a cabo acciones ni reacciones",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
	{
        title: "Impedido (Encumbered)",
        icon: "internal-injury",
        subtitle: "No tienes acciones ni reacciones",
        description: "Una criatura incapacitada no puede llevar a cabo acciones ni reacciones",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },   
	{
        title: "Inconsciente (Unconscious)",
        icon: "coma",
        subtitle: "Estás inconsciente",
        description: "Estás inconsciente",
        reference: "PHB, pg. 292.",
        bullets: [
            "Un criatura inconsciente está incapacitada (consulta Incapacitado), no puede moverse o hablar y no es consciente de su entorno.",
            "La criatura deja caer cualquier cosa que esté sujetando y cae derribada.",
            "La criatura falla automáticamente las tiradas de salvación de Fuerza y Destreza.",
            "Las tiradas de ataque contra la criatura tienen ventaja.",
            "Todos los ataques que impacten a la criatura son críticos si el atacante está a 5 pies o menos de ella",
        ]
    },	
    {
        title: "Indefenso (Helpless)",
        icon: "internal-injury",
        subtitle: "No tienes acciones ni reacciones",
        description: "Una criatura incapacitada no puede llevar a cabo acciones ni reacciones",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
	   {
        title: "Indispuesto (Sickened)",
        icon: "internal-injury",
        subtitle: "No tienes acciones ni reacciones",
        description: "Una criatura incapacitada no puede llevar a cabo acciones ni reacciones",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
    {
        title: "Mareado (Nauseated)",
        icon: "invisible",
        subtitle: "No te pueden ver",
        description: "No pueden verte sin la ayuda de magia o sentidos especiales.",
        reference: "PHB, pg. 291.",
        bullets: [
            "Es imposible ver a una criatura invisible sin la ayuda de magia o sentidos especiales.",
			"En lo que a esconderse respecta, se considera que la criatura se encuentra en una zona muy oscura, aunque se puede determinar su ubicación si esta hace algún ruido o deja huellas.",
            "Las tiradas de ataque contra la criatura tienen desventaja y las tiradas de ataque hechas por la criatura tienen ventaja."
        ]
    },
    {
        title: "Moribundo (Dying)",
        icon: "dead-head",
        subtitle: "Estás muriendo",
        description: "Has alcanzado los 0 puntos de golpe y estás muriendo",
        reference: "PHB, pg. 197.",
        bullets: [
            "Si el daño que no te mata te reduce a 0 puntos de golpe, caes inconsciente y comienzas a morir.",
			"Si recibes sanación, inmediatamente recuperas la consciencia y dejas de morir.",
			"Cuando estás muriendo, al inicio de cada uno de tus turnos realizas una tirada de salvación contra muerte. Tira un d20 sin sumar ningún modificador.",
			"Si sacas 10 o más es un éxito, 9 o menos es un fallo.",
			"En tu tercer éxito te estabilizas.",
			"En tu tercer fallo mueres.",
			"Sacar 1 en la tirada cuenta como 2 fallos.",
			"Sacar 20 en la tirada inmediatamente te recupera 1 punto de golpe.",
			"Pueden estabilizarte utilizando la acción de Estabilizar y superando una prueba de Sabiduría (Medicina) CD 10.",
			"Una vez estable recuperas 1 punto de golpe después de 1d4 horas."
        ]
    },
	{
        title: "Muerto (Dying)",
        icon: "dead-head",
        subtitle: "Estás muriendo",
        description: "Has alcanzado los 0 puntos de golpe y estás muriendo",
        reference: "PHB, pg. 197.",
        bullets: [
            "Si el daño que no te mata te reduce a 0 puntos de golpe, caes inconsciente y comienzas a morir.",
			"Si recibes sanación, inmediatamente recuperas la consciencia y dejas de morir.",
			"Cuando estás muriendo, al inicio de cada uno de tus turnos realizas una tirada de salvación contra muerte. Tira un d20 sin sumar ningún modificador.",
			"Si sacas 10 o más es un éxito, 9 o menos es un fallo.",
			"En tu tercer éxito te estabilizas.",
			"En tu tercer fallo mueres.",
			"Sacar 1 en la tirada cuenta como 2 fallos.",
			"Sacar 20 en la tirada inmediatamente te recupera 1 punto de golpe.",
			"Pueden estabilizarte utilizando la acción de Estabilizar y superando una prueba de Sabiduría (Medicina) CD 10.",
			"Una vez estable recuperas 1 punto de golpe después de 1d4 horas."
        ]
    },
	{
        title: "Paralizado (Paralyzed)",
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
        title: "Quemadura (Burning)",
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
        title: "Roto (Broken)",
        icon: "internal-injury",
        subtitle: "Sólo objetos",
        description: "No puedes hacer nada",
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
