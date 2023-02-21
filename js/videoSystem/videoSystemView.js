class VideoSystemView {

	#excecuteHandler(handler, handlerArguments, scrollElement, data, url, event){
		handler(...handlerArguments);
		$(scrollElement).get(0).scrollIntoView();
		history.pushState(data, null, url);
		event.preventDefault();
	}

	constructor() {
		this.categories = $('#navbarSupportedContent ul li');
		this.main = $('main');
		this.newWindows = new Map();

	}
	//funcion que retorna un div que contiene una lista de personas
	#showPersons(persons) {
		let container = $(`
		<div class="row row-cols-4 mx-auto ms-2 me-2 mt-4 bg-dark p-2 rounded-4 bg-blue-glass">
		</div>
		`);
		for (const person of persons) {
			container.append(`
			<section class="col item-list mx-auto rounded-4 my-3">
			<figure >
				<img src="${person.picture}" alt="" class="rounded-4 position-relative person mt-3" data-name='${person.name + "||" + person.lastname1}' >
				<figcaption>${person.name + " " + person.lastname1 + " " + person.lastname2}</figcaption>
			</figure>
		</section>
			`)
		}
		return container;
	}
	//funcion que retorna un div con una lista de producciones
	#showProductions(productions) {
		let section = $(`

		<section class="container-fluid mx-auto " >

		<div class="row row-cols-4 mx-auto ms-2 me-2 mt-4 bg-dark p-2 rounded-4 bg-blue-glass">

			</div>
	</section>
	`);
		for (const production of productions) {
			let div = $(`
		<section class="col prueba2 mx-auto rounded-4 my-3 item-list">
			<figure class="production-person" >
				<img src="${production.image}" alt="" class="rounded-4 image-production mt-3" data-title="${production.title}">
			</figure>
		</section>`)
			section.children().append(div)
		}
		return section;
	}

	//muestra un iframe que corresponde a una película
	#showFrameFilm(production) {
		let container = $(`
			<div class="container-fluid  bg-dark p-0 rounded-5"  >
				<div class="container-fluid p-0" >
					<iframe src="${production.resource.link}"
					title="${production.title}"
					frameborder="0"
					allowfullscreen
					class="container-fluid frame-production rounded-5 shadow-white"></iframe>
				</div>
			</div>
		`)
		return container;
	}
	//muestra un iframe que corresponde a una serie
	#showFrameSerie(production) {

		let active = "active";
		let resources = production.getResource();

		let container = $(`
	<div id="carouselExampleControls" class="carousel slide  bg-transparent p-0 rounded-5 shadow-white" data-bs-ride="carousel">
		<div class="carousel-inner bg-transparent">
		</div>
		<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
		</button>
	</div>
`);

		for (const product of resources) {
			let div = $(`
		<div class="carousel-item ${active}  bg-transparent p-0 rounded-5 ">
			<iframe src="${product.link}"
			title="${production.title}"
			frameborder="0"
			allowfullscreen
			class="container-fluid frame-production bg-transparent rounded-5 "></iframe>
		</div>
	`);

			container.find('.carousel-inner').append(div);
			active = "";
		}

		return container;
	}

	showCategoriesInNav(categories) {

		let ul = $(`<ul class="dropdown-menu"></ul>`);

		for (let category of categories) {
			ul.append(`<li><a data-category="${category.name}" class="dropdown-item" >${category.name}</a><li>`);
		}
		this.categories.append(ul);
	}


	/**
 * Enlaza un controlador de clicks a cada una de las imágenes de producción.
 * Al hacer el click la función le va a permitir ver la ficha de esa producción
 * @param handler - La función a llamar cuando el usuario hace click, pasandole el título de la película como parámetro
 */
	bindProductions(handler) {
		$('.image-production').click(function (event) {
			handler(this.dataset.title);
		});
	}

	/**
	 *
	 * Vincula un controlador de clicks a cada uno de los elementos desplegables
	 * del navegador en este caso a los desplegables de categoria
	 * @param handler - La función que sera cargada al hacer click,pasandole como argumento la categoria
	 */
	bindProductionsNavCategoryList(handler) {
		$('.dropdown-item').click(function (event) {
			handler(this.dataset.category);
		});
	}

	/**
	 * Vincula un evento de clicks a cada una de las categorias, va a cargar las listas de peliculas
	 * que tengan esa categoria
	 * @param handler - La función a ejecutar cada vez que hacemos click, pasandole como argumento la categoria
	 */
	bindProductionsCategoryList(handler) {
		document.querySelectorAll('.list-category').forEach(function (h4) {
			h4.addEventListener('click', (function (event) {
				handler(this.dataset.category);
			}))
		})
	}

	/**
	 * Enlaza el logo de la web con un evento que se va a ejecutar cuando volvamos a home
	 * @param handler - La función que es lanzada al hacer click.
	 */
	bindInit(handler) {
		$('#logo').click((event) => {
			handler();
		});
	}

	/**
	 * Enlaza el enlace de los actores del navegador con un evento que va a permitir listar los actores
	 * @param handler - La función que va a ser llamada al hacer click.
	 */
	bindActorPersonList(handler) {
		$('#actors').click(function (event) {
			handler();
		});
	}

	/**
	 * Enlaza el enlace de los directores del navegador con un evento que va a permitir listar los directores
	 * @param handler - The function to be called when the button is clicked.
	 */
	bindDirectorPersonList(handler) {
		$('#directors').click(function (event) {
			handler();
		});
	}
	/**
	 * Vincula un evento de click a los elementos que tengan la clase person, el evento va a permitir
	 * lanzar los datos de la persona que ha sido clickeada
	 * @param handler
	 */
	bindShowPerson(handler) {
		$('.person').click(function (event) {
			handler(this.dataset.name);
		});
	}

	//Función que va a mostrar el carusel en el momento que entramos a la página o vamos a inicio
	showProductionInLoad(productions) {

		function limitSypnosis(text) {
			//cramos un array a partir del texto
			let array = text.split(" ");

			if (array.length > 40) {
				//obtenemos los 40  primeros caracteres y añadimos ...
				text = array.slice(0, 40).join(" ") + "...";
			}
			return text
		}
		//un elemento de carousel por defecto tiene que estar activo
		let active = true;

		let carousel = $(`<div id="carouselExampleCaptions" class="carousel slide ms-5 me-5 mx-auto " data-bs-ride="carousel">
		<div class="carousel-indicators">
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
				aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
				aria-label="Slide 2"></button>
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
				aria-label="Slide 3"></button>
		</div>
		<div class="carousel-inner mt-4 rounded-4 shadow-white">

		</div>
		`);
		//agregamos una producción al carousel
		for (let production of productions) {
			carousel.children().eq(1).append(`

			<div class="carousel-item ${active ? "active" : ""} ">

			<img src="${production.image}"  data-category="${production.title}" class="d-block w-100 bg-image-carousel" alt="${production.title}">
			<img src="${production.image}" data-category="${production.title}" class="position-absolute image-production image-carousel" alt="${production.title}" data-title="${production.title}" >

			<div class="carousel-caption d-none d-md-block text-carrusel ">
				<h5>${production.title}</h5>
				<p class = "px-4">${limitSypnosis(production.synopsis)}</p>
			</div>
			`);
			active = false;
		}

		carousel.append(`
		<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
		data-bs-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
	</button>
	<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
		data-bs-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
	</button>
</div>`);

		this.main.append(carousel);
	}

	//muestra las categorias en el elemento desplegable del nav
	showCategoriesInMain(categories) {
		this.main.empty();
		let categoriesMain = $(`<div class="container rounded-5 bg-dark mx-a mt-4 py-2 shadow-aside">
		<aside class="carousel-aside">
		</aside>
	</div>
	`);
		//obtenemos todas las categorias disponibles
		for (let category of categories) {
			categoriesMain.children().append(`

		<div class="item-aside p-2 list-category" href='#product-list'  data-category="${category.name}">
		<div>
			<img src="img/icons/${category.name.toLowerCase()}.png" alt="${category.name}" class="image-aside" >
			<h3 class="d-none d-lg-block">${category.name}</h3>
		</div>
	</div>
		`);
		}
		this.main.append(categoriesMain);
	}

	//Lista las producciones que pertenecen a una categoría
	listProductions(productions, title) {
		this.main.empty();
		let container = $(`
		<section class="container-fluid mx-auto " >
			<div class="row row-cols-4 mx-auto ms-2 me-2 mt-4 bg-dark p-2 rounded-4">
			</div>
		</section>
		`)
		//agregamos todas producciones
		let production = productions.next();
		while (!production.done) {
			let div = $(`
			<section class="col item-list mx-auto rounded-4 my-3">
			<figure>
				<img src="${production.value.image}" alt="${production.value.title}" class="rounded-4 image-cat image-production" data-title="${production.value.title}">
			</figure>
			`);
			container.children().first().append(div);
			production = productions.next();
		}
		container.prepend(`<h1>${title}</h1>`);
		this.main.append(container);
	}


	//Permite mostrar los datos de una producción
	showProduction(production, categories, directors, actors) {
		//vaciamos el main
		this.main.empty();
		//Primero mostramos los datos de la producción
		let container = $(`
		<!-- Producción -->

	<section class="container-fluid mx-auto mt-5 rounded-5">

	</section>

	<!--Información-->
		<div class="container-fluid mt-5 bg-dark pb-4" >
			<div class="row  mx-auto">
				<div class="col-lg-4 col-xs-5 mt-2">
					<figure class="lg-me-4 mx-auto text-center img-production-synosis">
						<img src="${production.image}" alt="" class="w-75 mx-auto rounded-4 ">
					</figure>
				</div>
				<div class="col-8">
						<div class="row mb-2">
							<h1>${production.title}</h1>
						</div>
						<div class="row mt-2 d-inline" id = "category-film">

						</div>
						<div class="row mt-4">
							<span>${production.publication.toLocaleDateString()} </span>
						</div>
						<div class="row">
							<span>
							${production.synopsis}
							</span>
						</div>
						<div class="row">
						<button id="b-open" data-title="${production.title}" class="btn btn-primary text-uppercase mr-2 px-4">Abrir en nueva ventana</button>
						</div>
					</div>
			</div>

		</div>
		`);

		//si no tiene la propiedad resource es una serie
		if ("resource" in production) {
			container.children().prepend(this.#showFrameFilm(production))
		} else {
			container.children().prepend(this.#showFrameSerie(production))
		}
		//mostramos las categorias a las que pertenece esa pelicula
		let categoriesFilm = container.find("#category-film");
		for (const category of categories) {
			categoriesFilm.append(`
			<div class="d-inline">
				<h4 class="d-inline bg-danger rounded-4 p-2 list-category"  data-category="${category.name}"> ${category.name} </h4>
			</div>
			`)
		}
		//mostramos los directores de la película
		let directorsFilm = $(`
		<section class="container-fluid mx-auto mt-2 " >
		<h1>Directores</h1>
		</section>
		`)
		//llamamos a la función que permite obtener todas las personas
		directorsFilm.append(
			this.#showPersons(directors)
		);
		container.last().children().append(directorsFilm);
		//mostramos los actorse de la película
		let actorsFilm = $(`
		<section class="container-fluid mx-auto mt-2 " >
		<h1>Actores</h1>
		</section>
		`)
		actorsFilm.append(
			//llamamos a la función que permite obtener todas las personas
			this.#showPersons(actors)
		);
		container.last().children().append(actorsFilm);

		this.main.append(container);
	}

	//Permite mostrar una lista de personas sin importar si son actores o directores
	showListPersons(persons) {
		this.main.empty();
		let container = $(`
		<section class="container-fluid mx-auto " >
			<div class="row row-cols-4 mx-auto ms-2 me-2 mt-4 bg-dark p-2 rounded-4">
			</div>
		</section>
		`)
		let person = persons.next();
		//en los datos de la persona voy a usar || para separar nombre y apellido
		while (!person.done) {
			let div = $(`
			<section class="col item-list mx-auto rounded-4 my-3 item-list">
			<figure>
				<img src="${person.value.picture}" alt="" class="rounded-4 person mt-3" data-name='${person.value.name + "||" + person.value.lastname1}'>
				<figcaption>${person.value.name + " " + person.value.lastname1 + " " + person.value.lastname2}</figcaption>
			</figure>
			</section>
			`);
			container.children().append(div);
			person = persons.next();
		}
		this.main.append(container);
	}


	//muestra la información de una persona, además va a mostrar las produciones que ha dirigido y las peliculas donde ha actuado
	//si no ha a actuado o no ha dirigido una pelicula no mostrara ese campo
	showPerson(person, directedProductions, actedProductions) {
		this.main.empty();
		let container = $(`
			<div class="container-fluid mt-5 bg-dark pb-5">
				<div class="row  mx-auto">
					<div class="col-lg-4 col-xs-5 mt-2">
						<section class="col prueba2 mx-auto rounded-4 mt-3">
							<figure class="lg-me-4 mx-auto text-center">
								<img src="${person.picture}" alt="${person.name}" class="rounded-4 position-relative">
							</figure>
						</section>
					</div>
					<div class="col-8">
						<div class="row">
							<h1>${person.name + " " + person.lastname1 + " " + person.lastname2}</h1>
						</div>
						<div class="row mt-4">
							<span>nacimiento:${person.born.toLocaleDateString()}  </span>
						</div>
					</div>
				</div>

			</div>
		`);
		//comprobamos si ha dirigido producciones
		if (directedProductions) {
			container.append(this.#showProductions(directedProductions).prepend(`<h1>${"Producciones dirigidas"}</h1>`));
		}
		//comprobamos si ha actuado en producciones
		if (actedProductions) {
			container.append(this.#showProductions(actedProductions).prepend(`<h1>${"Producciones como actor"}</h1>`));
		}

		this.main.append(container)
	}

	//----------Nueva ventana

	bindShowProductionInNewWindow(handler) {
		$('#b-open').click((event) => {
			//creamos la ventana nueva si no ha sido creada aun para esa producción
			if(!this.newWindows.has(event.target.dataset.title)){
			let width = 800;
			let height = 600;
			this.newWindows.set(event.target.dataset.title,( window.open("newWindow.html", `${event.target.dataset.title}`, `width=${width}, height=${height}, top=${screen.height / 2 - height / 2}, left=${screen.width / 2 - width / 2}, titlebar=yes, toolbar=no, menubar=no, location=no`)))
			this.newWindows.get(event.target.dataset.title).addEventListener('DOMContentLoaded', () => {
				handler(event.target.dataset.title)
			});
		}else{
			//damos el foco a la ventana
			this.newWindows.get(event.target.dataset.title).focus();
		}

		});
	}

	showProductionInNewWindow(production, categories,actors,directors) {
		let newWindow = this.newWindows.get(production.title)
		//asignamos titulo a la ventana
		newWindow.document.title = production.title
		let main = newWindow.document.querySelector("main");
		let header = newWindow.document.querySelector("header");

		let heiderContainer = document.createRange().createContextualFragment(`
			<h1 class="bg-dark py-3 mb-5">
				${production.title}
			</h1>
		`)
		let container = document.createRange().createContextualFragment(`
		<!-- Producción -->

	<section class="container-fluid mx-auto mt-5 rounded-5">

	</section>

	<!--Información-->
		<div class="container-fluid mt-5 bg-dark pb-4" >
			<div class="row  mx-auto">
				<div class="col-lg-4 col-xs-5 mt-2">
					<figure class="lg-me-4 mx-auto text-center img-production-synosis">
						<img src="${production.image}" alt="" class="w-75 mx-auto rounded-4 ">
					</figure>
				</div>
				<div class="col-8">
						<div class="row mb-2">
							<h1>${production.title}</h1>
						</div>
						<div class="row mt-2 d-inline" id = "category-film">

						</div>
						<div class="row mt-4">
							<span>${production.publication.toLocaleDateString()} </span>
						</div>
						<div class="row">
							<span>
							${production.synopsis}
							</span>
						</div>
					</div>
			</div>
		</div>
		`);

		//si no tiene la propiedad resource es una serie
		if ("resource" in production) {
			$(container).prepend(this.#showFrameFilm(production))
		} else {
			$(container).prepend(this.#showFrameSerie(production))
		}

		//mostramos las categorias a las que pertenece esa pelicula
		let categoriesFilm = container.querySelector("#category-film");
		for (const category of categories) {
			categoriesFilm.appendChild(document.createRange().createContextualFragment(`
			<div class="d-inline">
				<h4 class="d-inline bg-danger rounded-4 p-2 list-category"  data-category="${category.name}"> ${category.name} </h4>
			</div>
			`))
		}

		//mostramos los directores de la película
		let directorsFilm = $(`
		<section class="container-fluid mx-auto mt-2 " >
		<h1>Directores</h1>
		</section>
		`)
		//llamamos a la función que permite obtener todas las personas
		directorsFilm.append(
			this.#showPersons(directors)
		);
		//añadimos al ultimo hijo de container
		$(container).children().last().append(directorsFilm);
		//mostramos los actorse de la película
		let actorsFilm = $(`
		<section class="container-fluid mx-auto mt-2 " >
		<h1>Actores</h1>
		</section>
		`)
		actorsFilm.append(
			//llamamos a la función que permite obtener todas las personas
			this.#showPersons(actors)
		);
				//añadimos al ultimo hijo de container
		$(container).children().last().append(actorsFilm);

		header.appendChild(heiderContainer);
		main.appendChild(container)
	}


	/**
	 * Enlaza el enlace de cerrar ventnas con un evento que va a permitir cerrar las ventanas
	 * @param handler - La función que va a ser llamada al hacer click.
	 */
	bindCloseWindows(handler) {
		$('#close-Windows').click((event) => {
			handler();
		});
	}


}

export default VideoSystemView;
