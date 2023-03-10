import { Coordinate, Resource } from '../entities/videoSystem.js';

class VideoSystemController {

	#videoSystem;
	#videoSystemView;
	#randomProductions;
	#loadVideoSystemObjects() {
		/**Usuario */
		this.#videoSystem.addUser(this.#videoSystem.getUser("admin", "admin@gmail.com", "admin"))

		/**Categorias*/
		this.#videoSystem.addCategory(this.#videoSystem.getCategory("Comedia", "Género que busca hacer reír al espectador y proporcionar un escape de la vida cotidiana a través del humor"));
		this.#videoSystem.addCategory(this.#videoSystem.getCategory("Acción", "Género emocionante que se centra en la acción y el suspense. Estas películas a menudo incluyen persecuciones, peleas, explosiones y otros efectos especiales para crear una experiencia de visualización intensa y emocionante."));
		this.#videoSystem.addCategory(this.#videoSystem.getCategory("Fantasía", "Género que se basa en elementos imaginarios, como magia, seres fantásticos, mundos imaginarios y otros elementos que no existen en el mundo real. Este género permite a los cineastas explorar historias y personajes que van más allá de lo posible en la vida real."));

		/**Producciones para Fantasía */
		this.#videoSystem.assignCategory(this.#videoSystem.getCategory("Fantasía"), this.#videoSystem.getMovie("El hombre de acero", "ESP", new Date(2015, 1, 1), "Desde Krypton, un lejano planeta muy avanzado tecnológicamente, un bebé es enviado en una cápsula a través del espacio a la Tierra para que viva entre los humanos. Educado en una granja en Kansas en los valores de sus padres adoptivos, Martha (Diane Lane) y Jonathan Kent (Kevin Costner), el joven Clark Kent (Henry Cavill) comienza desde niño a desarrollar poderes sobrehumanos, y al llegar a la edad adulta llega a la conclusión de que esos poderes le exigen grandes responsabilidades, para proteger no sólo a los que quiere, sino también para representar una esperanza para el mundo.", "img/Productions/man_of_steel_superman.jpg", new Resource(143, "https://www.youtube.com/embed/VzeDi7YR6gs"), [new Coordinate(40, 40)]));
		this.#videoSystem.assignCategory(this.#videoSystem.getCategory("Fantasía"), this.#videoSystem.getMovie("El gato con botas: El último deseo", "ESP", new Date(2022, 11, 12), "Secuela de 'El gato con botas' (2011). El Gato con Botas descubre que su pasión por la aventura le ha pasado factura: ha consumido ocho de sus nueve vidas, por ello emprende un viaje épico para encontrar el mítico Último Deseo y restaurar sus nueve vidas... ", "img/Productions/puss_in_boots_the_last_wish.jpg", new Resource(100, "https://www.youtube.com/embed/18v5EPO5ySs"), [new Coordinate(40, 40)]));
		this.#videoSystem.assignCategory(this.#videoSystem.getCategory("Fantasía"), this.#videoSystem.getMovie("Los vengadores: End Game", "ESP", new Date(2019, 10, 12), "Después de los eventos devastadores de 'Avengers: Infinity War', el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles son las consecuencias... Cuarta y última entrega de la saga \"Vengadores\"", "img/Productions/avengers_endgame.jpg", new Resource(181, "https://www.youtube.com/embed/TcMBFSGVi1c"), [new Coordinate(40, 40)]));
		this.#videoSystem.assignCategory(this.#videoSystem.getCategory("Fantasía"), this.#videoSystem.getMovie("The Super Mario Bros", "ESP", new Date(2023, 3, 12), "Película de animación basada en la franquicia de videojuegos Super Mario Bros. de Nintendo. Está producida por Shigeru Miyamoto, creador de la licencia, y la producirá y animará Illumination Entertainment ", "img/Productions/the_super_mario_bros_movie.jpg", new Resource(181, "https://www.youtube.com/embed/_1f2RLdxQfA"), [new Coordinate(40, 40)]));


		/**Productions para Acción */
		this.#videoSystem.assignCategory(this.#videoSystem.getCategory("Acción"), this.#videoSystem.getMovie("Uncharted", "ESP", new Date(2022, 1, 1), "Basada en una de las series de videojuegos más vendidas y aclamadas por la crítica de todos los tiempos, \"Uncharted\" presenta a un joven, astuto y carismático, Nathan Drake (Tom Holland) en su primera aventura como cazatesoros con su ingenioso compañero Victor “Sully” Sullivan (Mark Wahlberg). En una aventura de acción que se extiende por todo el mundo, ambos se embarcan en una peligrosa búsqueda de “el mayor tesoro nunca antes encontrado” al tiempo que rastrean las claves que les podrían conducir al hermano de Nathan, perdido hace ya mucho tiempo", "img/Productions/uncharted.jpg", new Resource(143, "https://www.youtube.com/embed/Sn5sRX6jaxk"), [new Coordinate(40, 40)]));
		this.#videoSystem.assignCategory(this.#videoSystem.getCategory("Acción"), this.#videoSystem.getMovie("Bullet Train", "ESP", new Date(2022, 11, 12), "Cinco asesinos a sueldo se encuentran a bordo de un tren bala que viaja de Tokio a Morioka con unas pocas paradas intermedias. Descubren que sus misiones no son ajenas entre sí. La pregunta es quién saldrá vivo del tren y qué les espera en la estación final.", "img/Productions/bullet_train.jpg", new Resource(124, "https://www.youtube.com/embed/0IOsk2Vlc4o"), [new Coordinate(40, 40)]));
		this.#videoSystem.assignCategory(this.#videoSystem.getCategory("Acción"), this.#videoSystem.getMovie("John Wick (Otro día para matar)", "ESP", new Date(2019, 10, 12), "En Nueva York, John Wick, un asesino a sueldo retirado, vuelve otra vez a la acción para vengarse de los gángsters que le quitaron todo.", "img/Productions/john_wick.jpg", new Resource(121, "https://www.youtube.com/embed/TWRxFTiNTyU"), [new Coordinate(40, 40)]));
		this.#videoSystem.assignCategory(this.#videoSystem.getCategory("Acción"), this.#videoSystem.getMovie("Matrix Resurrections", "ESP", new Date(2020, 12, 3), "Neo vive una vida normal y corriente en San Francisco mientras su terapeuta le prescribe pastillas azules. Hasta que Morfeo le ofrece la pastilla roja y vuelve a abrir su mente al mundo de Matrix. ", "img/Productions/the_matrix_resurrections.jpg", new Resource(181, "https://www.youtube.com/embed/qjnvX44LoQw"), [new Coordinate(40, 40)]));

		/**Producciones para Comedia */
		this.#videoSystem.assignCategory(this.#videoSystem.getCategory("Comedia"), this.#videoSystem.getMovie("El día del Sí", "ESP", new Date(2019, 1, 1), "Sintiendo como si siempre dijeran NO a sus hijos y compañeros de trabajo, Allison y Carlos deciden dar a sus tres hijos un YES DAY, en el que durante 24 horas los niños mandarán. No se imaginaban que se embarcarían en una aventura vertiginosa en torno a Los Ángeles, que unirá a su familia más que nunca.", "img/Productions/yes_day.jpg", new Resource(123, "https://www.youtube.com/embed/4J0Of6wqzxk"), [new Coordinate(40, 40)]));
		this.#videoSystem.assignCategory(this.#videoSystem.getCategory("Comedia"), this.#videoSystem.getMovie("Noche de juegos", "ESP", new Date(2020, 11, 12), "Max y Annie quedan todas las semanas con sus amigos para celebrar una noche de juegos. Competitivos hasta el extremo, ahora están preocupados por la vuelta del hermano de Max, un presuntuoso ganador que lleva toda la vida menospreciándolo. Un día, Max, Annie y sus amigos son invitados por Brooks, el carismático hermano de Max, a lo que afirma será una noche de juegos inolvidable. Cuando llegan a su formidable casa, Brooks les informa de en qué consiste el juego: ha contratado a una empresa que secuestrará a uno de los presentes y, si no lo encuentran en un tiempo determinado, el secuestrado morirá.", "img/Productions/game_night.jpg", new Resource(124, "https://www.youtube.com/embed/oDcq4GBOaTg"), [new Coordinate(40, 40)]));
		this.#videoSystem.assignCategory(this.#videoSystem.getCategory("Comedia"), this.#videoSystem.getMovie("Resacón en Las Vegas", "ESP", new Date(2009, 10, 12), "Historia de una desmadrada despedida de soltero en la que el novio y tres amigos se montan una gran juerga en Las Vegas. Como era de esperar, a la mañana siguiente tienen una resaca tan monumental que no pueden recordar nada de lo ocurrido la noche anterior. Lo más extraordinario es que el novio ha desaparecido y en la suite del hotel se encuentran un tigre y un bebé", "img/Productions/the_hangover.jpg", new Resource(121, "https://www.youtube.com/embed/_esKPsFVjsg"), [new Coordinate(40, 40)]));
		this.#videoSystem.assignCategory(this.#videoSystem.getCategory("Comedia"), this.#videoSystem.getMovie("Supersalidos", "ESP", new Date(2007, 12, 3), "En una de sus últimas noches como estudiantes de instituto, Evan (Michael Cera) y Seth (Jonah Hill), dos amigos inadaptados, tropezarán con diversas dificultades para comprar bebidas para una fiesta a la que han invitado a las chicas de sus sueños. En su peripecia les acompañará el indescriptible McLovin (Christopher Mintz-Plasse), otro inadaptado que acaba de comprarse un carnet falso para que le sirva de salvoconducto en la compra de alcohol", "img/Productions/superbad.jpg", new Resource(114, "https://www.youtube.com/embed/b8ht6ObDlyQ"), [new Coordinate(40, 40)]));

		/**Producciones por general */
		this.#videoSystem.assignCategory(this.#videoSystem.getCategory("General"), this.#videoSystem.getMovie("Uncharted", "ESP", new Date(2022, 1, 1), "Basada en una de las series de videojuegos más vendidas y aclamadas por la crítica de todos los tiempos, \"Uncharted\" presenta a un joven, astuto y carismático, Nathan Drake (Tom Holland) en su primera aventura como cazatesoros con su ingenioso compañero Victor “Sully” Sullivan (Mark Wahlberg). En una aventura de acción que se extiende por todo el mundo, ambos se embarcan en una peligrosa búsqueda de “el mayor tesoro nunca antes encontrado” al tiempo que rastrean las claves que les podrían conducir al hermano de Nathan, perdido hace ya mucho tiempo", "img/Productions/uncharted.jpg", new Resource(143, "https://www.youtube.com/embed/Sn5sRX6jaxk"), [new Coordinate(40, 40)]));
		this.#videoSystem.assignCategory(this.#videoSystem.getCategory("General"), this.#videoSystem.getSerie("Marvel Studios: leyendas", "ESP", new Date(2017, 12, 3), "La serie muestra personajes individuales en cada episodio, destacando algunos de sus momentos icónicos en el Universo Cinematográfico de Marvel (MCU).", "img/Productions/leyendas.jpg", [new Resource(114, "https://www.youtube.com/embed/aKL3gZYO5tg"), new Resource(100, "https://www.youtube.com/embed/jfZk3i46QG4")], [new Coordinate(40, 40)]));

		/**Directores */
		/**Asignamos Directores Fantasia*/
		this.#videoSystem.assignDirector(this.#videoSystem.getDirector("Zack", "Snyder", "", new Date(1978, 1, 2), "img/Directors/ZackSnyder.jpg"), this.#videoSystem.getMovie("El hombre de acero"));
		this.#videoSystem.assignDirector(this.#videoSystem.getDirector("Joel", "Crawford", "", new Date(1980, 1, 0), "img/Directors/JoelCrawford.jpg"), this.#videoSystem.getMovie("El gato con botas: El último deseo"));
		this.#videoSystem.assignDirector(this.#videoSystem.getDirector("Anthony", "Russo", "", new Date(1970, 3, 1), "img/Directors/AnthonyRusso.jpg"), this.#videoSystem.getMovie("Los vengadores: End Game"));
		this.#videoSystem.assignDirector(this.#videoSystem.getDirector("Aaron", "Horvath", "", new Date(1980, 19, 7), "img/Directors/AaronHorvath.jpg"), this.#videoSystem.getMovie("The Super Mario Bros"));
		this.#videoSystem.assignDirector(this.#videoSystem.getDirector("Michael", "Jelenic", "", new Date(1977, 12, 4), "img/Directors/MichaelJelenic.jpg"), this.#videoSystem.getMovie("The Super Mario Bros"));

		/**Asignamos Directores Acción*/
		this.#videoSystem.assignDirector(this.#videoSystem.getDirector("Ruben", "Fleischer", "", new Date(1974, 31, 9), "img/Directors/RubenFleischer.jpg"), this.#videoSystem.getMovie("Uncharted"));
		this.#videoSystem.assignDirector(this.#videoSystem.getDirector("David", "Leitch", "", new Date(1975, 16, 10), "img/Directors/DavidLeitch.jpg"), this.#videoSystem.getMovie("Bullet Train"));
		this.#videoSystem.assignDirector(this.#videoSystem.getDirector("Chad", "Stahelski", "", new Date(1975, 16, 10), "img/Directors/ChadStahelski.jpg"), this.#videoSystem.getMovie("John Wick (Otro día para matar)"));
		this.#videoSystem.assignDirector(this.#videoSystem.getDirector("Lana", "Wachowski", "", new Date(1965, 21, 5), "img/Directors/LanaWachowski.jpg"), this.#videoSystem.getMovie("Matrix Resurrections"));

		/**Asignamos Directores Comedia*/
		this.#videoSystem.assignDirector(this.#videoSystem.getDirector("Miguel", "Arteta", "", new Date(1965, 29, 7), "img/Directors/MiguelArteta.jpg"), this.#videoSystem.getMovie("El día del Sí"));
		this.#videoSystem.assignDirector(this.#videoSystem.getDirector("John", "Francis", "Daley", new Date(1985, 20, 4), "img/Directors/JohnFrancisDaley.webp"), this.#videoSystem.getMovie("Noche de juegos"));
		this.#videoSystem.assignDirector(this.#videoSystem.getDirector("Jonathan", "Goldstein", "", new Date(1968, 12, 5), "img/Directors/JonathanGoldstein.jpg"), this.#videoSystem.getMovie("Noche de juegos"));
		this.#videoSystem.assignDirector(this.#videoSystem.getDirector("Todd", "Phillips", "", new Date(1970, 20, 11), "img/Directors/ToddPhillips.jpg"), this.#videoSystem.getMovie("Resacón en Las Vegas"));
		this.#videoSystem.assignDirector(this.#videoSystem.getDirector("Todd", "Phillips", "", new Date(1970, 20, 11), "img/Directors/ToddPhillips.jpg"), this.#videoSystem.getMovie("Supersalidos"));

		/**Asignamos a general */
		this.#videoSystem.assignDirector(this.#videoSystem.getDirector("Anthony", "Russo", "", new Date(1970, 3, 1), "img/Directors/AnthonyRusso.jpg"), this.#videoSystem.getMovie("Marvel Studios: leyendas"));


		/**Actores */

		/**Actores de El hombre de acero */
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Henry", "Cavill", "", new Date(1983, 6, 5), "img/Actors/HenryCavill.webp"), this.#videoSystem.getMovie("El hombre de acero"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Diane", "Lane", "", new Date(1965, 22, 0), "img/Actors/DianeLane.jpg"), this.#videoSystem.getMovie("El hombre de acero"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Kevin", "Costner", "", new Date(1955, 18, 0), "img/Actors/KevinCostner.jpg"), this.#videoSystem.getMovie("El hombre de acero"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Russell", "Crowe", "", new Date(1964, 7, 3), "img/Actors/RussellCrowe.jpg"), this.#videoSystem.getMovie("El hombre de acero"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Michael", "Shannon", "", new Date(1974, 7, 6), "img/Actors/MichaelShannon.jpg"), this.#videoSystem.getMovie("El hombre de acero"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Laurence", "Fishburne", "", new Date(1961, 30, 6), "img/Actors/LaurenceFishburne.jpg"), this.#videoSystem.getMovie("El hombre de acero"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Antje", "Traue", "", new Date(1981, 18, 0), "img/Actors/AntjeTraue.jpg"), this.#videoSystem.getMovie("El hombre de acero"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Christopher", "Meloni", "", new Date(1988, 15, 0), "img/Actors/ChristopherMeloni.jpg"), this.#videoSystem.getMovie("El hombre de acero"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Richard", "Schiff", "", new Date(1955, 27, 5), "img/Actors/RichardSchiff.jpg"), this.#videoSystem.getMovie("El hombre de acero"))


		/**El gato con botas el último deseo */
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Antonio", "Banderas", "", new Date(1960, 10, 8), "img/Actors/AntonioBanderas.jpg"), this.#videoSystem.getMovie("El gato con botas: El último deseo"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Florence", "Pugh", "", new Date(1996, 3, 0), "img/Actors/FlorencePugh.jpg"), this.#videoSystem.getMovie("El gato con botas: El último deseo"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Harvey", "Guillén", "", new Date(1999, 3, 5), "img/Actors/HarveyGuillén.jpg"), this.#videoSystem.getMovie("El gato con botas: El último deseo"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Olivia", "Colman", "", new Date(1974, 30, 0), "img/Actors/OliviaColman.jpg"), this.#videoSystem.getMovie("El gato con botas: El último deseo"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("John", "Mulaney", "", new Date(1982, 30, 0), "img/Actors/JohnMulaney.jpg"), this.#videoSystem.getMovie("El gato con botas: El último deseo"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Samson", "Kayo", "", new Date(1992, 1, 0), "img/Actors/SamsonKayo.jpg"), this.#videoSystem.getMovie("El gato con botas: El último deseo"))

		/**Los vengadores end game */
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Robert", "Downey", "Jr", new Date(1965, 4, 3), "img/Actors/RobertDowneyJr.jpg"), this.#videoSystem.getMovie("Los vengadores: End Game"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Chris", "Evans", "", new Date(1981, 13, 4), "img/Actors/ChrisEvans.jpg"), this.#videoSystem.getMovie("Los vengadores: End Game"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Scarlett", "Johansson", "", new Date(1984, 22, 10), "img/Actors/ScarlettJohansson.jpg"), this.#videoSystem.getMovie("Los vengadores: End Game"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Chris", "Hemsworth", "", new Date(1983, 11, 10), "img/Actors/ChrisHemsworth.jpg"), this.#videoSystem.getMovie("Los vengadores: End Game"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Mark", "Ruffalo", "", new Date(1967, 22, 10), "img/Actors/MarkRuffalo.jpg"), this.#videoSystem.getMovie("Los vengadores: End Game"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Jeremy", "Renner", "", new Date(1971, 1, 7), "img/Actors/JeremyRenner.jpg"), this.#videoSystem.getMovie("Los vengadores: End Game"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Brie", "Larson", "", new Date(1989, 1, 9), "img/Actors/BrieLarson.jpg"), this.#videoSystem.getMovie("Los vengadores: End Game"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Paul", "Rudd", "", new Date(1969, 6, 4), "img/Actors/PaulRudd.jpg"), this.#videoSystem.getMovie("Los vengadores: End Game"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Donald", "Cheadle", "", new Date(1964, 29, 10), "img/Actors/DonaldCheadles.jpg"), this.#videoSystem.getMovie("Los vengadores: End Game"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Elizabeth", "Olsen", "", new Date(1989, 16, 1), "img/Actors/ElizabethOlsen.jpg"), this.#videoSystem.getMovie("Los vengadores: End Game"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Chadwick", "Boseman", "", new Date(2020, 20, 9), "img/Actors/ChadwickBoseman.jpg"), this.#videoSystem.getMovie("Los vengadores: End Game"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Tom", "Holland", "", new Date(1996, 1, 5), "img/Actors/TomHolland.jpg"), this.#videoSystem.getMovie("Los vengadores: End Game"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Chris", "Pratt", "", new Date(1979, 21, 6), "img/Actors/ChrisPratt.jpg"), this.#videoSystem.getMovie("Los vengadores: End Game"))

		/**Serie leyenda */
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Robert", "Downey", "Jr", new Date(1965, 4, 3), "img/Actors/RobertDowneyJr.jpg"), this.#videoSystem.getMovie("Marvel Studios: leyendas"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Chris", "Evans", "", new Date(1981, 13, 4), "img/Actors/ChrisEvans.jpg"), this.#videoSystem.getMovie("Marvel Studios: leyendas"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Scarlett", "Johansson", "", new Date(1984, 22, 10), "img/Actors/ScarlettJohansson.jpg"), this.#videoSystem.getMovie("Marvel Studios: leyendas"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Chris", "Hemsworth", "", new Date(1983, 11, 10), "img/Actors/ChrisHemsworth.jpg"), this.#videoSystem.getMovie("Marvel Studios: leyendas"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Mark", "Ruffalo", "", new Date(1967, 22, 10), "img/Actors/MarkRuffalo.jpg"), this.#videoSystem.getMovie("Marvel Studios: leyendas"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Jeremy", "Renner", "", new Date(1971, 1, 7), "img/Actors/JeremyRenner.jpg"), this.#videoSystem.getMovie("Marvel Studios: leyendas"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Brie", "Larson", "", new Date(1989, 1, 9), "img/Actors/BrieLarson.jpg"), this.#videoSystem.getMovie("Marvel Studios: leyendas"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Paul", "Rudd", "", new Date(1969, 6, 4), "img/Actors/PaulRudd.jpg"), this.#videoSystem.getMovie("Marvel Studios: leyendas"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Donald", "Cheadle", "", new Date(1964, 29, 10), "img/Actors/DonaldCheadles.jpg"), this.#videoSystem.getMovie("Marvel Studios: leyendas"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Elizabeth", "Olsen", "", new Date(1989, 16, 1), "img/Actors/ElizabethOlsen.jpg"), this.#videoSystem.getMovie("Marvel Studios: leyendas"))
		/**The Super Mario Bros */
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Chris", "Pratt", "", new Date(1979, 21, 6), "img/Actors/ChrisPratt.jpg"), this.#videoSystem.getMovie("The Super Mario Bros"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Charles", "Martinet", "", new Date(1955, 17, 10), "img/Actors/CharlesMartinet.jpg"), this.#videoSystem.getMovie("The Super Mario Bros"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Anya", "Taylor", "Joy", new Date(1996, 16, 5), "img/Actors/AnyaTailorJoy.jpg"), this.#videoSystem.getMovie("The Super Mario Bros"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Charlie", "Day", "", new Date(1976, 9, 1), "img/Actors/CharlieDay.jpg"), this.#videoSystem.getMovie("The Super Mario Bros"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Jack", "Black", "", new Date(1969, 2, 28), "img/Actors/JackBlack.jpg"), this.#videoSystem.getMovie("The Super Mario Bros"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Keegan", "Michael", "Key", new Date(1971, 22, 2), "img/Actors/Keegan-MichaelKey.jpg"), this.#videoSystem.getMovie("The Super Mario Bros"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Seth", "Rogen", "", new Date(1982, 15, 5), "img/Actors/SethRogen.jpg"), this.#videoSystem.getMovie("The Super Mario Bros"))

		/**Uncharted*/
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Tom", "Holland"), this.#videoSystem.getMovie("Uncharted"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Antonio", "Banderas"), this.#videoSystem.getMovie("Uncharted"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Sophia", "Ali", "", new Date(1995, 11, 7), "img/Actors/SophiaAli.jpg"), this.#videoSystem.getMovie("Uncharted"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Mark", "Wahlberg", "", new Date(1971, 5, 5), "img/Actors/MarkWahlberg.jpg"), this.#videoSystem.getMovie("Uncharted"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Alana", "Boden", "", new Date(1997, 1, 1), "img/Actors/AlanaBoden.jpg"), this.#videoSystem.getMovie("Uncharted"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Manuel", "de Blas", "", new Date(1941, 12, 5), "img/Actors/ManueldeBlas.jpg"), this.#videoSystem.getMovie("Uncharted"))

		/**Bullet Train*/
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Brad", "Pitt", "", new Date(1963, 18, 11), "img/Actors/BradPitt.jpg"), this.#videoSystem.getMovie("Bullet Train"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Aaron", "Taylor", "Johnson", new Date(1990, 13, 6), "img/Actors/AaronTaylor-Johnson.jpg"), this.#videoSystem.getMovie("Bullet Train"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Joey", "King", "", new Date(1999, 30, 6), "img/Actors/JoeyKing.jpg"), this.#videoSystem.getMovie("Bullet Train"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("David", "Leitch", "", new Date(1975, 16, 10), "img/Actors/DavidLeitch.jpg"), this.#videoSystem.getMovie("Bullet Train"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Sandra", "Bullock", "", new Date(1964, 26, 5), "img/Actors/SandraBullock.jpg"), this.#videoSystem.getMovie("Bullet Train"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Michael", "Shannon", "", new Date(1974, 7, 11), "img/Actors/MichaelShannon.jpg"), this.#videoSystem.getMovie("Bullet Train"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Logan", "Lerman", "", new Date(1992, 19, 0), "img/Actors/LoganLerman.jpg"), this.#videoSystem.getMovie("Bullet Train"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Ryan", "Reynolds", "", new Date(1976, 23, 9), "img/Actors/RyanReynolds.jpg"), this.#videoSystem.getMovie("Bullet Train"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Masi", "Oka", "", new Date(1974, 27, 11), "img/Actors/MasiOka.jpg"), this.#videoSystem.getMovie("Bullet Train"))

		/** John Wick (Otro día para matar) */
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Keanu", "Reeves", "", new Date(1964, 2, 10), "img/Actors/KeanuReeves.jpg"), this.#videoSystem.getMovie("John Wick (Otro día para matar)"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Ian", "McShane", "", new Date(1964, 2, 10), "img/Actors/IanMcShane.jpg"), this.#videoSystem.getMovie("John Wick (Otro día para matar)"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Laurence", "Fishburne", "", new Date(1961, 30, 6), "img/Actors/LaurenceFishburne.jpg"), this.#videoSystem.getMovie("John Wick (Otro día para matar)"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Lance", "Reddick", "", new Date(1966, 31, 11), "img/Actors/LanceReddick.jpg"), this.#videoSystem.getMovie("John Wick (Otro día para matar)"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Bridget", "Moynahan", "", new Date(1971, 28, 4), "img/Actors/BridgetMoynahan.jpg"), this.#videoSystem.getMovie("John Wick (Otro día para matar)"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Willem", "Dafoe", "", new Date(1955, 22, 6), "img/Actors/WillemDafoe.jpg"), this.#videoSystem.getMovie("John Wick (Otro día para matar)"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Alfie", "Allen", "", new Date(1986, 12, 10), "img/Actors/AlfieAllen.jpg"), this.#videoSystem.getMovie("John Wick (Otro día para matar)"))

		/**Matrix Resurrections*/
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Keanu", "Reeves"), this.#videoSystem.getMovie("Matrix Resurrections"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Jessica", "Henwick", "", new Date(1992, 30, 10), "img/Actors/JessicaHenwick.jpg"), this.#videoSystem.getMovie("Matrix Resurrections"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Priyanka", "Chopra", "", new Date(1982, 18, 6), "img/Actors/PriyankaChopra.jpg"), this.#videoSystem.getMovie("Matrix Resurrections"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Jonathan", "Groff", "", new Date(1985, 26, 2), "img/Actors/JonathanGroff.jpg"), this.#videoSystem.getMovie("Matrix Resurrections"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Eréndira", "Ibarra", "", new Date(1985, 25, 10), "img/Actors/EréndiraIbarra.jpg"), this.#videoSystem.getMovie("Matrix Resurrections"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Lambert", "Wilson", "", new Date(1958, 3, 9), "img/Actors/LambertWilson.jpg"), this.#videoSystem.getMovie("Matrix Resurrections"))

		/**El día del Sí*/
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Jenna", "Ortega", "", new Date(2002, 27, 10), "img/Actors/JennaOrtega.jpg"), this.#videoSystem.getMovie("El día del Sí"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Jennifer", "Garner", "", new Date(1972, 17, 4), "img/Actors/JenniferGarner.jpg"), this.#videoSystem.getMovie("El día del Sí"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Édgar", "Ramírez", "", new Date(1977, 25, 2), "img/Actors/ÉdgarRamírez.jpg"), this.#videoSystem.getMovie("El día del Sí"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Julian", "Lerner", "", new Date(2006, 5, 10), "img/Actors/JulianLerner.jpg"), this.#videoSystem.getMovie("El día del Sí"))

		/**Noche de juegos*/
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Jason", "Bateman", "", new Date(1969, 14, 0), "img/Actors/JasonBateman.jpg"), this.#videoSystem.getMovie("Noche de juegos"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Rachel", "McAdams", "", new Date(1978, 17, 9), "img/Actors/RachelMcAdams.jpg"), this.#videoSystem.getMovie("Noche de juegos"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("John", "Francis", "Daley", new Date(1985, 20, 5), "img/Actors/JohnFrancisDaley.jpg"), this.#videoSystem.getMovie("Noche de juegos"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Jonathan", "Goldstein", "", new Date(1969, 20, 5), "img/Actors/JonathanGoldstein.jpg"), this.#videoSystem.getMovie("Noche de juegos"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Jesse", "Plemons", "", new Date(1988, 2, 7), "img/Actors/JessePlemons.jpg"), this.#videoSystem.getMovie("Noche de juegos"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Sharon", "Horgan", "", new Date(1979, 13, 7), "img/Actors/SharonHorgan.jpg"), this.#videoSystem.getMovie("Noche de juegos"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Kyle", "Chandler", "", new Date(1965, 17, 10), "img/Actors/KyleChandler.jpg"), this.#videoSystem.getMovie("Noche de juegos"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Lamorne", "Morris", "", new Date(1980, 14, 10), "img/Actors/LamorneMorris.jpg"), this.#videoSystem.getMovie("Noche de juegos"))

		/**Resacón en Las Vegas*/

		this.#videoSystem.assignActor(this.#videoSystem.getActor("Bradley", "Cooper", "", new Date(1975, 5, 0), "img/Actors/BradleyCooper.jpg"), this.#videoSystem.getMovie("Resacón en Las Vegas"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Zach", "Galifianakis", "", new Date(1969, 1, 9), "img/Actors/ZachGalifianakis.jpg"), this.#videoSystem.getMovie("Resacón en Las Vegas"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Ed", "Helms", "", new Date(1974, 24, 0), "img/Actors/EdHelms.jpg"), this.#videoSystem.getMovie("Resacón en Las Vegas"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Todd", "Phillips", "", new Date(1970, 20, 11), "img/Actors/ToddPhillips.jpg"), this.#videoSystem.getMovie("Resacón en Las Vegas"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Justin", "Bartha", "", new Date(1978, 21, 6), "img/Actors/JustinBartha.jpg"), this.#videoSystem.getMovie("Resacón en Las Vegas"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Ken", "Jeong", "", new Date(1969, 13, 6), "img/Actors/KenJeong.jpg"), this.#videoSystem.getMovie("Resacón en Las Vegas"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Heather", "Graham", "", new Date(1970, 29, 0), "img/Actors/HeatherGraham.jpg"), this.#videoSystem.getMovie("Resacón en Las Vegas"))

		/**Supersalidos*/
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Jonah", "Hill", "", new Date(1983, 20, 11), "img/Actors/JonahHill.jpg"), this.#videoSystem.getMovie("Supersalidos"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Seth", "Rogen", "", new Date(1982, 15, 5), "img/Actors/SethRogen.jpg"), this.#videoSystem.getMovie("Supersalidos"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Michael", "Cera", "", new Date(1988, 7, 5), "img/Actors/MichaelCera.jpg"), this.#videoSystem.getMovie("Supersalidos"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Christopher", "Mintz", "Plasse", new Date(1989, 20, 4), "img/Actors/ChristopherMintz-Plasse.jpg"), this.#videoSystem.getMovie("Supersalidos"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Emma", "Stone", "", new Date(1988, 6, 10), "img/Actors/EmmaStone.jpg"), this.#videoSystem.getMovie("Supersalidos"))
		this.#videoSystem.assignActor(this.#videoSystem.getActor("Bill", "Hader", "", new Date(1978, 7, 5), "img/Actors/BillHader.jpg"), this.#videoSystem.getMovie("Supersalidos"))
	}
	constructor(model, view) {
		this.#videoSystem = model;
		this.#videoSystemView = view;

		//Cargamos todos los objetos
		this.#loadVideoSystemObjects();

		//Obtengo 3 producciones aleatorias para mostrarlas al cargar, las voy a guardar en un array para mantener las mismas al usuario
		//hasta que reinicie la página
		this.#randomProductions = [...model.randomProductions()];

		this.onLoad();

	}

	/**Contenido que se al entrar la web */
	onLoad = () => {
		//cargamos los elementos del navegador
		this.onAddCategoryNav();
		//cargamos las categorias en el main
		this.onAddCategoryMain();
		//cargamos las producciones aleatorias
		this.onAddRandomProductionLoad();

		//vinculamos las funciones a la vista
		//Si pulsamos en las categorias mostrara la lista que corresponda a esa categoria
		this.#videoSystemView.bindProductions(this.handleCategoryListProduction)
		//viculamos la lista de actores, directores y  botón de inicio, estos elementos solo se van a vincular la primera vez
		this.#videoSystemView.bindActorPersonList(this.handleActors);
		this.#videoSystemView.bindDirectorPersonList(this.handleDirector);
		this.#videoSystemView.bindInit(this.handleInit);
		//vinculamos cerrar todas las ventnas
		this.#videoSystemView.bindCloseWindows(this.handleCloseAllNewWindows)

		//mostramos el formulario de gestión
		this.#videoSystemView.showAdminNav();
		//vinculamos sus eventos correspondientes
		this.#videoSystemView.bindAdminMenu(
			this.handlerNewProduction,
			this.handlerRemoveProduction,
			this.handlerAssignPerson,
			this.handlerManageCategory,
			this.handlerNewPerson,
			this.handleRemovePerson
		);

		if (document.cookie == "username=admin") {
			this.#videoSystemView.loadNavbar(true);
			//mostramos el boton de cerrra sesion
			this.#videoSystemView.bttnCloseSession();
			//asignamos el evento para eliminar la cookie
			this.#videoSystemView.bindRemoveCookie(this.handleRemoveCookie);
		} else {
			this.#videoSystemView.loadNavbar(false);

			this.#videoSystemView.bindShowFormLogin(this.handleShowLogin)

		}


		/*
	if(document.cookie == "username=admin"){

		this.#videoSystemView.showAdminCookie();
		this.#videoSystemView.removeCookie(this.handleRemoveCookie);

	}else{
		//vinculamos el texto de iniciar sesión al formulario
	}
*/

	}
	//Cuando vuelvo a home
	onInit = () => {
		//cargamos la categoria en el main y vinculamos su evento
		this.onAddCategoryMain();
		//añadimos las produciones aleatorias
		this.onAddRandomProductionLoad();
		this.#videoSystemView.bindProductions(this.handleCategoryListProduction)

	}
	//controlador de la  función de inicio
	handleInit = () => {
		this.onInit();
	}
	//va a mostrar la lista de categorias en el navegador y vincular el evento para listar las películas de cada categoria
	onAddCategoryNav = () => {
		this.#videoSystemView.showCategoriesInNav(this.#videoSystem.categories);
		this.#videoSystemView.bindProductionsNavCategoryList(this.handleProductsCategoryList)
	}
	//muestra 3 producciones aleatorias
	onAddRandomProductionLoad = () => {
		//puedo generar otras 3 peliculas aleatorias o mantenerlas
		this.#videoSystemView.showProductionInLoad(this.#randomProductions);
	}
	//va a mostrar la lista de categorias en el main y vincular el evento para listar las películas de cada categoria
	onAddCategoryMain = () => {
		this.#videoSystemView.showCategoriesInMain(this.#videoSystem.categories);
		this.#videoSystemView.bindProductionsCategoryList(this.handleProductsCategoryList);
	}


	/*
	función que se ejecuta cuando el usuario hace click en una categoría en la lista de categorías.
	La función toma como parámetro el título de la categoría.
	Obtenemos la categoría que tiene ese título
	Listamos las películas
	Asignamos el evento correspondiente para ver los datos de cada película
*/
	handleProductsCategoryList = (title) => {
		let category = this.#videoSystem.getCategory(title);
		this.#videoSystemView.listProductions(this.#videoSystem.getProductionCategory(category), title);
		this.#videoSystemView.bindProductions(this.handleCategoryListProduction)
	}
	/*
	función que se ejecuta cuando el usuario hace click en en una producción.
	tomamos como parámetro el nombre de la película.
	Obtenemos la producción que tiene ese título
	Obtenemos las categorias que tienen esa película
	Obtenemos el casting de actores
	Obtenemos los directores de la película
	Mostamos la película con sus actores y sus directores
	Asignamos el evento correspondiente para ver los datos de las categorias y las personas
*/
	handleCategoryListProduction = (title) => {

		let production = this.#videoSystem.getMovie(title);
		let categories = this.#videoSystem.getCategoryProduction(production)
		let actors = this.#videoSystem.getCast(production);
		let directors = this.#videoSystem.getCastDirector(production)
		this.#videoSystemView.showProduction(production, categories, directors, actors);
		this.#videoSystemView.bindProductionsCategoryList(this.handleProductsCategoryList);
		this.#videoSystemView.bindShowPerson(this.handleShowPerson)
		this.#videoSystemView.bindShowProductionInNewWindow(this.handleShowProductionNewWindow)

	}
	/**Función que se ejecuta cuando pulsamos en actores, en este caso llamamos a la función onActorList--> on hace referencia a onLoad */
	handleActors = () => {
		this.onActorList();
	}
	/**Función que se ejecuta cuando pulsamos en directores, en este caso llamamos a la función onDirectorList--> on hace referencia a onLoad */
	handleDirector = () => {
		this.onDirectorList();
	}

	/*función que va a listar todos los actores y les va a asignar un evento para mostrar sus datos */
	onActorList = () => {
		let iterator = this.#videoSystem.actors[Symbol.iterator]();
		this.#videoSystemView.showListPersons(iterator)
		this.#videoSystemView.bindShowPerson(this.handleShowPerson)
	}
	/*función que va a listar todos los directores y les va a asignar un evento para mostrar sus datos */
	onDirectorList = () => {
		let iterator = this.#videoSystem.director[Symbol.iterator]();
		this.#videoSystemView.showListPersons(iterator)
		this.#videoSystemView.bindShowPerson(this.handleShowPerson)
	}
	/**
	 * función que se ejecuta para mostrar los datos de una persona y toma como parámetro name
	 */
	handleShowPerson = (name) => {
		//el name esta compuesto por nombre y apellido
		let fullName = name.split("||")
		let person;
		let acted;
		let directed;
		//comprobamos si esta persona es un actor
		if (this.#videoSystem.checkActor(fullName[0], fullName[1])) {
			//si es un actor le asignamos la la variable person con getActor y obtenemos sus produciones donde ha actuado
			person = this.#videoSystem.getActor(fullName[0], fullName[1]);
			acted = this.#videoSystem.getProductionActor(person)
		}
		//comprobamos si es un director
		if (this.#videoSystem.checkDirector(fullName[0], fullName[1])) {
			//si es un director le asignamos la la variable person con getActor y obtenemos sus produciones donde ha actuado
			person = this.#videoSystem.getDirector(fullName[0], fullName[1]);
			directed = this.#videoSystem.getProductionDirector(person)

		}
		//mostramos las producciones
		this.#videoSystemView.showPerson(person, directed, acted)
		//enlazamos los eventos de las producciones
		this.#videoSystemView.bindProductions(this.handleCategoryListProduction);
	}

	handleShowProductionNewWindow = (title) => {
		let production = this.#videoSystem.getMovie(title);
		let categories = this.#videoSystem.getCategoryProduction(production)
		let actors = this.#videoSystem.getCast(production);
		let directors = this.#videoSystem.getCastDirector(production)
		this.#videoSystemView.showProductionInNewWindow(production, categories, actors, directors);
	}


	/*método que cierra todas las ventanas que han sido abiertas y limpian el mapa de ventanas */
	handleCloseAllNewWindows = () => {

		for (const window of this.#videoSystemView.newWindows.values()) {
			//cerramos las ventanas
			window.close()
			/* Si quiero cerrar pasado un tiempo
			setTimeout(function() {
				window.close()
			}, 400);
		*/
		}
		this.#videoSystemView.newWindows.clear()
	}

	//----Formulario

	handlerNewProduction = () => {

		this.#videoSystemView.showFormAddProduction(this.#videoSystem.categories, this.#videoSystem.actors, this.#videoSystem.director);
		this.#videoSystemView.bindFormNewProduction(this.handleNewProduction)


	}
	handlerRemoveProduction = () => {
		let productions = this.#videoSystem.productions;
		this.#videoSystemView.showFormRemoveProduction(productions)
		this.#videoSystemView.bindUpdateShowRemoveProduction(this.handleUpdateRemoveProduction)
		this.#videoSystemView.bindRemoveProduction(this.handlerRemoveProductionDelProduction)

	}
	handlerAssignPerson = () => {
		this.#videoSystemView.showFormAsignPerson(this.#videoSystem.productions, this.#videoSystem.actors, this.#videoSystem.director);
		this.#videoSystemView.bindUpdateAsignPerson(this.handleUpdateAsignPerson)
		this.#videoSystemView.bindUpdateAsignProuction(this.handleUpdateProductionAsignPerson)
		this.#videoSystemView.bindFormAsignPerson(this.handleAssignProductionAsignPerson)

	}
	handlerManageCategory = () => {
		let categories = this.#videoSystem.categories;
		this.#videoSystemView.showFormManagerCategory(categories);
		this.#videoSystemView.bindRemoveCategory(this.hadlerRemoveCategory)
		this.#videoSystemView.bindNewCategory(this.handleNewCategory)
	}
	handlerNewPerson = () => {
		this.#videoSystemView.showFormNewPerson();
		this.#videoSystemView.bindFormNewPerson(this.handleCreateNewPerson);
	}
	handleCreateNewPerson = (name, lastname1, lastname2, date, type, img) => {

		let done;
		//intentamos crear el actor o el director
		try {
			if (type == "Actor") {
				this.#videoSystem.addActor(this.#videoSystem.getActor(name, lastname1, lastname2, new Date(Date.parse(date)), img))
			}
			else {
				this.#videoSystem.addDirector(this.#videoSystem.getDirector(name, lastname1, lastname2, new Date(Date.parse(date)), img))
			}
			done = true
		} catch (e) {
			//si no se ha podido crear el actor ponemos done a false, en el modal mostraremos un mensaje de error
			done = false;
		}
		this.#videoSystemView.showFormNewPersonModal(done, name, lastname1, type)
	}

	handleRemovePerson = () => {

		let actors = this.#videoSystem.actors;
		let directors = this.#videoSystem.director
		this.#videoSystemView.showFormRemovePerson(actors, directors);
		this.#videoSystemView.bindUpdateShowRemovePerson(this.handleUpdateRemovePerson)
		this.#videoSystemView.bindFormRemovePerson(this.handledelRemovePerson)
	}
	handledelRemovePerson = (name) => {
		name = name.trim();
		let done;

		try {
			if (name.includes("(actor)")) {
				name = name.replaceAll("(actor)", "")
				try {
					this.#videoSystem.removeActor(this.#videoSystem.getActorFullName(name));
				} catch (e) {
				}
			} else {
				name = name.replaceAll("(director)", "")

				this.#videoSystem.removeDirector(this.#videoSystem.getDirectorFullName(name));
			}
			done = true;
		} catch (e) {
			done = false;
		}

		this.#videoSystemView.showFormRemovePersonModal(done, name)

	}

	handleUpdateRemovePerson = (name) => {
		name = name.trim();
		if (name.includes("(actor)")) {
			name = name.replaceAll("(actor)", "")
			try {
				this.#videoSystemView.updateRemovePeson(this.#videoSystem.getActorFullName(name));
			} catch (e) {
			}
		}
		else if (name.includes("(director)")) {
			name = name.replaceAll("(director)", "")
			try {
				this.#videoSystemView.updateRemovePeson(this.#videoSystem.getDirectorFullName(name));
			} catch (e) {
			}
		}
		else {
			this.#videoSystemView.updateDefaultRemovePeson()
		}
	}

	handleUpdateRemoveProduction = (title) => {
		title = title.trim();
		try {
			//si existe esa pelicula la mostramos
			let production = this.#videoSystem.getMovie(title)
			this.#videoSystemView.updateRemoveProduction(production)
		} catch (e) {
			//si no existe mostramos las caracteriscias por defecto
			this.#videoSystemView.updateDefaultRemoveProduction()
		}
	}

	handlerRemoveProductionDelProduction = (name) => {

		let done;
		try {
			let production = this.#videoSystem.getMovie(name)
			this.#videoSystem.removeProduction(production);
			done = true;

		} catch (error) {
			done = false;
		}

		this.#videoSystemView.showFormRemoveProdutionModal(done, name, this.#videoSystem.productions)
	}

	hadlerRemoveCategory = (title) => {

		let done;

		try {
			let category = this.#videoSystem.getCategory(title);
			this.#videoSystem.removeCategory(category);
			done = true;
		} catch (e) {
			done = false;
		}
		this.#videoSystemView.showFormRemoveCategoryModal(done, title, this.#videoSystem.categories)

		this.onAddCategoryNav();

	}
	handleNewCategory = (title, inf) => {

		let done;

		try {
			let category = this.#videoSystem.getCategory(title, inf);
			this.#videoSystem.addCategory(category);
			done = true;
		} catch (e) {
			done = false;
		}
		this.#videoSystemView.showFormNewCategoryModal(done, title, inf, this.#videoSystem.categories)

		this.onAddCategoryNav();

	}

	handleUpdateAsignPerson = (name) => {
		name = name.trim();
		if (name.includes("(actor)")) {
			name = name.replaceAll("(actor)", "")

			try {
				//le mando el controlador de showPerson para que el usuario pueda hacer click en la imagen y ver los resultados de la asignación
				this.#videoSystemView.updateAsignPerson(this.#videoSystem.getActorFullName(name), this.handleShowPerson);
			} catch (error) {
			}

		}
		else if (name.includes("(director)")) {
			name = name.replaceAll("(director)", "")

			try {
				this.#videoSystemView.updateAsignPerson(this.#videoSystem.getDirectorFullName(name));
			} catch (error) {
			}

		}
		else {
			this.#videoSystemView.updateDefaultAsignPerson()
		}
	}
	handleUpdateProductionAsignPerson = (title) => {
		title = title.trim();
		try {
			//si existe esa pelicula la mostramos
			let production = this.#videoSystem.getMovie(title)
			this.#videoSystemView.updateAsignProduction(production, this.handleCategoryListProduction)
		} catch (e) {
			//si no existe mostramos las caracteriscias por defecto
			this.#videoSystemView.updateDefaultAsignProduction()
		}
	}

	handleAssignProductionAsignPerson = (title, name) => {

		let type = (name.includes("(actor)")) ? "actor" : "director";
		let msg = null;
		let done;
		//	let firstName;
		//	let lastName;
		if (!name.includes("(actor)") && !name.includes("(director)")) {
			msg = "El nombre introducido no se conoce como actor ni como director";
		}
		if (!msg) {
			try {
				if (type == "actor") {
					name = name.replaceAll("(actor)", "")
				} else {
					name = name.replaceAll("(director)", "")
				}

				let person;
				let production = this.#videoSystem.getMovie(title)

				if (type == "actor") {
					person = this.#videoSystem.getActorFullName(name);
					this.#videoSystem.assignActor(person, production)
				} else {
					person = this.#videoSystem.getDirectorFullName(name);
					this.#videoSystem.assignDirector(person, production)
				}
				done = true;
			} catch (e) {
				done = false;
				msg = "Ha ocurrido un error en la asignación " + e;
			}
		}

		this.#videoSystemView.showFormAssignPersonModal(done, msg, title, name)
	}

	handleNewProduction = (type, title, nationality, date, categories, synopsis, actors, directors, urlImg, resource, lat, long, season, time) => {

		let done;
		urlImg = urlImg || "/img/default-p.jpg";
		resource = resource || "https://www.youtube.com/embed/U2DkSxMGfGE";
		time = parseInt(time) || 0;
		lat = parseInt(lat) || 0;
		long = parseInt(long) || 0;

		try {
			//Si puede obtener una película es porque esa película ya existe entonces no podemos crear otra
			this.#videoSystem.getMovie(title);
			done = false;
		} catch (e) {
			let production;
			if (type != "Serie") {

				production = this.#videoSystem.getMovie(title, nationality, date, synopsis, urlImg, new Resource(time, resource), [new Coordinate(lat, long)]);
			}
			else {
				production = this.#videoSystem.getSerie(title, nationality, date, synopsis, urlImg, [new Resource(time, resource)], [new Coordinate(lat, long)], season)
			}
			//añadimos la producción
			this.#videoSystem.addProduction(production);
			//si hay actores para añadir
			if (actors.length > 0) {
				actors.forEach(actor => {
					this.#videoSystem.assignActor(this.#videoSystem.getActorFullName(actor), production)
				});
			}
			if (directors.length > 0) {
				directors.forEach(director => {
					this.#videoSystem.assignDirector(this.#videoSystem.getDirectorFullName(director), production)
				});
			}
			if (categories.length > 0) {
				categories.forEach(category => {
					this.#videoSystem.assignCategory(this.#videoSystem.getCategory(category), production)
				});
			}
			done = true;
		}

		this.#videoSystemView.showFormAddProductionModal(done, title)

	}

	handleShowLogin = () => {

		this.#videoSystemView.showFormLogin();
		this.#videoSystemView.bindFormLogin(this.handleLoginUser);

		//this.#videoSystemView.bindUpdateShowRemovePerson(this.handleUpdateRemovePerson)
		//	this.#videoSystemView.bindFormRemovePerson(this.handledelRemovePerson)
	}
	handleLoginUser = (name, password) => {
		let users = this.#videoSystem.users;

		let authenticated = false;
		for (const user of users) {
			if (user.username == name && user.password == password) {
				//si se ha encontrado al usuario admin
				authenticated = true;
				break;
			}
		}
		this.#videoSystemView.showFormLoginModal(authenticated);

		if (authenticated) {
			document.cookie = `username=admin`;
			//actulizamos el nav
			this.#videoSystemView.showAdminCookie();
			//volemos a inicio
			this.onInit();
			//mostramos el boton de cerrra sesion
			this.#videoSystemView.bttnCloseSession();
			//asignamos el evento para eliminar la cookie
			this.#videoSystemView.bindRemoveCookie(this.handleRemoveCookie);

		}

	}

	handleRemoveCookie = () => {
		//hacemos que la cookie expire
		document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		//quitamos bttn de cerrar sesion
		this.#videoSystemView.bttnCloseSessionEmpty();
		//ponemos otra vez iniciar Session
		this.#videoSystemView.CloseAdminCookie();
		//enlazamos el evento para el formulario de inicio de sesion
		this.#videoSystemView.bindShowFormLogin(this.handleShowLogin)
	}

}

export default VideoSystemController;
