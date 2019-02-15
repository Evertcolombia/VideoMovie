/*0--//creamos la variable  que contiene la url  hacia la api
https://yts.am/api/v2/list_movies.json*/

/*1--/Creamos una funcion autoEjecutable esta funcion se ejecuta cada vez que se carga el documento*/
/*1.1--/creamos dentro una funcin para obtener  datos de la api, esta funcion va a traer lo que le digamos de la url usamos 
async-await, recibe una url com parametro, dentor de esta vamos a crear una variable
 response que haga fetch de la url y luego que  en otra variable
 pasemos los datos  a json, interpnemos await en ambas, que nos retorne la data*/

/*1.2--/Esta api tiene tres categorias, asi que tendremos que hacer tres llamados una por cada categoria,  obtendremos tres listas de peliculas
una lista tras otra por orden ya que usamos async await  en la funcion auto ejecutable y esto esta dentro */
 

/*2--/En este paso vamos a referenciar los id de los contenedres del html
donde queremos mostrar estas peliculas, segun su lista iran en un contenedor, creamos 
una constante referenciandoa la categoria de cada container*/

/*2.1--/algo mas en lo que trabajaremos sobre el dom son las partes del contenedr de los fatures, el form, y el home
referenciamos estos por su id y lo guardamos en constantes */

/*2.2--/Referenciams tambien por id los atributos para abrir cerrar, y el overlay del modal
los guardamos en unas constantes */

/*2.3--/Obtenemos los campos del modal, el h1, img, p, miramos el html para ver sise deben referenciar
por clase o id y los guardamos en constantes*/


/*3--/ya obtuvimos las listas de las peliculas, hicimos los selectores necesarios, para usar nuestrar listas 
en el html, ahora crearemos una funcion que recibe  una movie, el objetivo es que la movie sea una pelicula de la lista
y  esta funcion lo que hace es retornar un mini template de html, donde queremos imprimir
algunos de los datos que trae este objeto de pelicula, el titulo y la imagen de portada

	<div class="primaryPlaylistItem" >
          <div class="primaryPlaylistItem-image">
            <img src="${image}">
          </div>
          <h4 class="primaryPlaylistItem-title">
            ${titulo}
          </h4>
        </div>
Ese es el template queremos donde esta el img pasarle la imagen que trae la movie,y donde esta el titulo tambien lo mismo
vamos a probarla con elementos nuestros antes de cambiarlo por los de el objeto movie
para esto primero la funcion que reciba dos parametros  la imagen y el titulocom tenemos especificad en el miniTemplate ahi van
Luego la llamamos en un console.log() para ver que funcione y luego, si pasamos a el parametro movie  y en los campos obtendriamos
la informacion de este objeto movie*/


/*3.1--//crearemos un forEach asociado a la lista de action, al pasarle este array, por cada elemento que trae, cada movie, queremos imprimirla
en surespectivo contenedor por categorias hacemos debugger*/

/*3.2--//dentr de este forEach vamos a llamar a la funcion que crea ese mini template,  y le pasamos la movie, de turno, guardamos esto
en una constante, y hacemos console.log para ver que tiene en el dom*/

/*3.3--/usamos el metodo document.implementation.cerateHTMLDcument(), este creara un arbol
de htm->head->body->/body->/head->/html, lo guardamos en una constante, hacemos debugger y vemos que tiene 
esta constante*/

/*3.4--/En ese arbol guardemos cada pelicula que venga, en la constante que crea un template pprr cada movie en el body, osea por cada
pelicula cree su propio arbol, para esto en la constante del arbol en su body usamos innerHTML y le pasamos ese miniTemplate asi
entonces agamos debugger para ver que tiene ahora este elemento*/

/*3.5--/Ahora usemos el contenedor que obtivomos de accion y hagamos en este append() le pasamos lo que tenga nuestro
 arbol en su body su hijo [0], hacemos console.log(de esta constante que contiene el miniTemplate)*/


/*3.6--/por ultim0 de este paso, subimos esta linea que obtiene el contenedor de las peliculas de accion, para poder trabajar con el en el forEach la ponemos arriba  de este
forEach*/



/*4--/Debemos crear un funcion que reciba un miniTemplate, dentro de esta
usamos de nuevo el metodo para crear un arbol del dom, para que podamos imprimirle 
el miniTemplae que le pasemos en el body */

/*4.1--/Dentro de esta funcion Creamos la constante que creara el arbol html*/

/*4.2--/Que abajo de esta linea al body de ese arbolle haga inner del mini
template que trae la funcion, hacemos debugger para ver que trae*/

/*4.3--/que esta funcion retorne lo que tiene el arbol de documento en su  body, 
en su hijo [0]*/

/*4.4--/Debemos modificar el forEach, el plan es convertirlo en una funcion desde la que nos va a renderizar la lista de peliculas
    y las genera en el container correspondiente a  el container, esta funcion al ser llamada debe recibir una lista y un container*/

/*4.5--/dentro de esta funcion antes de comenzar con el renderizado, debemos hacr que remueva
lo que tenga este container en su hijo [0] cn el metodo remove, asi cuando carguen las peliculas ya no hay nada*/

/*4.6--/Aqui adentro haremos de nuevo el forEach, pero  no que llame directamente a la lista de accion, 
que el forEach este concatenado a solo la lista, en el cb recibe cada movie de la lista */

/*4.7--/Ahora  llamamos a la funcionque genera el template y le pasamos la movie,para que por cada movie haga esto,
lo guardamos en una constante*/

/*4.8--/ahora tambien aqui en el forEach, llamamos a la funcion que crea el arbol y le inserta el template, le pasamos la
constante que hemos creado que guarda el mini template, y guardamos esto en una constante*/

/*4-9--/por ultimo entonces vamos a generar cada elemento ya en su arbol, en el container
que le correspnde, hacems append de  esa cnstante, en el container que trae la funcion*/

/*4.10--/Vamos a comentar el anterior forEach a este, tambien*/

/*4.11--/por logica debems ubicar los elementos de los contenedores, bajo cada uno  vamos
a hacer un llamado  a la funcion de renderizado y le pasamos la lista que le corresponde y el conainer*/

/*4.12--/Vamos al navegador y siguiendo lo que llevamos  va a ir por las peticiones obtener las listas, btener los contenedores
llama a la lista de renderizado que por cada llamado recibira una lista  y por cad apelicula en la lista  crea un template y lo inserta en un
arbol del dom para luego generarlo en el container que le correspnde, entonces obtendremos las listas de las peliculas, antes de eso se borra lo que tiene
el contenedor, que es el loader, recarguemos y vems si funciona*/



/*5--/En este paso vamos a darle funcionalidad al formulario, debemos ubicar mejor, mas arriba
el elemento que obtiene el form del html*/

/*5.1--/debemos crear  una funcion que lo que queremos que haga es emitir un evento de escucha
desde adentro al elemento que le pasemos a la funcion*/

/*5.2--/Este evento deberia teener escuchando un evento de click,  dentro del click
ponemos un alert*/

/*5.3--/Esta funcion de evento la vamos a llamar desde la ultima 
linea de la funcionque renderiza las peliculas, y le pasamos el elemento que termina 
siendo cada pelicula, para que cada pelicula tenga este evento escuchando*/

/*5.4--/Guardamos y recargamos para ver que nuestr evento funciona*/



/*6--/En este paso trabajaremos con el home vamos al indez.html y el elemento con el id home,que es nuestro sidebar le quitamos la clase search.active*/ 

/*6.1--/ubicamos mejor la constante que obtiene el home*/

/*6.2--/Ahora vamos a la funcion del evento que acabamos de crear, cuandoalguna pelicula reciba clic, llame a la funcion showModal()*/


/*6.3--/Debemos crear esta funcion showModal, el objetivo es que cuando
sea llamada, lo podemos hacer con un simple sistema de clases que estan definidad
en el css*/

/*6.4--/En esta funcion tomamos el elemento  que obtiene el verlay del modal y le
agregamos la clase ''active'*/

/*6.5-/usamos las porpiedades style.animation para darle una animacin al elemento que contiene el modal
la animacion es la clase modalIn .8s forwards, asi cuando se ejecute nos muestra el modal
con una animacion*/

/*6.6--/obtenemos el elemento que esconde el modal, y debemos pasarle un evento de click, que active la funcion hideMdal*/

/*6.7--/creamos esta funcion, debe encargarse de desaparecer el Overlay removiendo la clase 'active, y la animacion usando esta vez una animacion
de modalOut con las mismas propiedades */

/*6.8--/ya tenemos un evento que escucha en el home por un click en las peliculas
si pasa enseña el modal, de la misma forma podemos ocultarlo,  guqardamos y 
recargamos para ver que funcione*/



/*7--/Vamos en este pasoa trabajar con el featurin contenedor, ubicamos mejor el element que obtiene este contenedor, del dom*/

/*7.1--/El featuring se activara solo por busquedas en el form, debemos concatenarle a este elemento que obtiene el form un evento de submit, 
en su cb debe recibir un evento*/

/*7.2--/En primer lugar este evento evitara que se cargue de nuevo la pagina, para esto al evento
le pasams el metodo preventDefault()*/

/*7.3--/cuando este evento suceda que al elemento de que obtiene el home
le agregue una clase 'search-active, esta agregara un contenedor en el dom para este home*/

/*7.4--/Cuandoeste evento suceda, queremos crear un nuevo atributo html, un img y lo guardamos en una constante llamada $loader, lo hacemos
      con la funcion document.createElement('img')*/


/*7.5--/Creams fuera esta funcion que debe setearle ciertos a un atributo que le pasemos,
recibe el elemento, y un objeto que seran los atributos*/

/*7.6--/Dentro de esta funcion,usamos un for que pregunte por cada atributo en el objeto de los atributos que le pasamos a la funcion, por cada uno haga algo
      para esto declaramos dentro del for una constante atributo, para que podamos llamar atributo en atributos*/

/*7.7--/dentro de este for, por cada atributo que hay  tome el elemento que le pasamos a la funcion y use el metodo de js setAttribute() este metodo como parametro
        recibe el  la constante que creamos atributo, que viene siendo el atributo de turno,  como segundo parametro el objeto con el indice que tiene[] attributes[atribute]*/

/*7.8--/Ahora vlvemos a este evento de submit y en la ultima linea, tambien cuando suceda submit llamaremos a la funcion setAttributes, recordemos que recibe un elemento, y un objeto
 con los atributos que queremos settealer al elemento html, por ende cuando este llamado suceda tomara un elemento html y le pondra las 
propiedades que contiene el objeto, le pasamos el elemento que contiene el elemento que creamos una linea antes de esta, como propiedades pasams el objeto y dentro
una src con la ruta, un ancho y un alto*/

/*7.9--/HAcemos debugger y vemos que tiene  esto*/

/*7.10--/despues de setAtriute,  al elemento del del contenedor del featuring le diremos
que  haga append de este $loader*/



/*8--/para este paso debemos crear una funcion que nos cree un template
    este template lo usarems en este container del featuring, vamos al index. queremos obtener lo que esta dentro
    del div con id featuring el contenido de ese container, lo cortamos y lo pegamos dentro de una funcion esta recibe
     una pelicula como parametro

     <div class="featuring">
+         <div class="featuring-image">
+           <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
+         </div>
+       <div class="featuring-content">
+         <p class="featuring-title">Pelicula encontrada</p>
+         <p class="featuring-album">${peli.title}</p>
+       </div>

*/

/*8.1--/ahora  el evento submit de formulario va a pasar a ser asincrono
    usarems async-await en el de esta manera el callback del event lleva async*/

/*8.2--/En la ultima linea e este event submit, creamos un nuevo formulario desde el codigo, se lo pasamos a una constante
      llamada data, el formulario con el metodo new Formdata(recibe el formulario) */


/*8.3--/en la siguiente linea, creamos una constante llamada peli,  a esta le pasamos un llamado a nuestra funcion de getData,
      le interponemos await,  y le pasamos parametros a la ruta para que el limite de peliculas sea una,
      es decir esta funcion busca el nmbre de la peli que tenga el formulario, entonces que el limite sea uno, y que sea el del nombre mas exacto,
      esto l logramos con query_term=${data.get('name')}*/

/*8.4--/creamos una constante llamada HTMLString y le pasamos un llamado a featuringTemplate pasando
      como parametro la pelicula que estaria en peli.data.movies[0], asi crea un template por la pelicula 
      que se busco y encontro*/

/*8.5--/Ahora que genere ese HTMLString en nuestro featurincontainer con innerHTML*/

/*8.6--/hacemos debugger  para ver que tiene el cntenedr del featuring*/


/*9--///Vamos a ver como desestructurar objetos en esta clase, deshaciendo algunos pasos de el n8, en lugar de crear una constante peli y luego
      tener que ir dentro de sus propiedades podemos desestructurar este objeto hasta la propiedad que queramos, en este objeto le diremos que el objeto que 
      recibe tiene un objeto llamado data y dentro de este hay una propiedad llamada movies que ahora sera pelis, y le pasamos la misma llamada a  getData*/

/*9.1--/Seguims en este evento,*/

/*9.1--/Ahora ya no queremos el HTMLString que teniamos 
      ahora queremos la misma constante que recibe un llamado a featuringTemplate 
      y como parametro recibe este array pelis que obtuvims en su indice [0]
      Ahora comentamos la constante anterior a esta*/

/*9.2--/guardar y recargar*/

/*10--/En este paso vamos a usar el metdo data set, para asociar datos con atributos del dom, en este caso
    los de esl template de videoItemTemplate,  estos datos no sn visibles  y se declaran con data-nombre, para comenzar
    la funcion videoItemTemplate va a recibir dos parametros movie y category, en la funcion que genera nuestro
    miniTemplate*/

/*10.1--/En el primer div luego del return le seteamos dos datos
      data-id  y data-category, el data-id recibe como valor lo que traiga la movie en su id, y la category recibe
      la categoria que le pase de la funcion entonces mdificamos ese div para que tenga
      ests dos nuevos atributos y valores*/

/*10.2--/ este renderMovieList ahora recibe otro parametro mas, category*/

/*10.3--/en el forEach, ahora que llame a videoItemTemplate tambien pasando la categoria*/

/*10.4/Ahora vamos a incluir la categoria en cada uno de estos llamados, de esta forma
    la funcion render recibira list, $container y la categoria correspondiente como tercer parametro, le agregamos la categria a cada llamad
    al render*/


/*10.5--/Modificamos esta funcion showModal para que reciba un parametro $element*/

/*10.6--/dentro de esta funcion en la ultima linea, obtenemos auqellos datos no visibles que estan en data-, los ponemos en constantes
    el id y la categoria de ese elemento que trae, entnces Element.dataset.id 'dataset' es como
    el objeto dnde esta seteada esta informacion, que quedo escrita en el template que al final del foreach recibe un evento
    de click que al activarse ,  activa esta funcion, al recibir $element recibe el elemento que trae el click*/

/*10.7--/hacemos debugger*/

/*10.8--/Vamos a la funcion que crea un event de click alrededor del elemento que recibe
y devuelve un llamad a showMdal, a showModal le pasamos el elemento para que reciba ese elemento ese template
al ser llamada*/



/*11--/En este pas vamos a continuar con desestructuraicion de objetos, vamos a desarmar ese objeto que nos devuelve
    cada peticion a getData en cada lista vemos que estamos buscando en list.data.movies
    y querems evitar eso queremos que ya la lista que nos pase represente las peliculas, para esto desarmamos este objeto en una constante por cada
    lista,  y comentamos ls anteriores llamados*/ 
  /*  const { data: { movies: actionList } }*/

/*11.1--/ahora en cada llamado  a rendermovieList ya no tenemos que pasar el camino hasta movies como parametro
      osea list.data.movies, pues ya lo tenemos guardado en los llamados, solo usamos el nombre de la lista que es l que
      lo contiene*/

/*11.2--/Crearems dos funciones una para hacer una busquedad por Id
   de una lista que le pasemos, hagamos esta funciuon que reciba entnces una lista, y un id*/

/*11.3--/que nos retorne la lista y le cntatenamos el metodo find() este metodo devuelve, el primer valor del array que cumple con el valor
    dado en la funcion, find recibe un callback, donde, pasamos como parametro una movie, osea cada pelicula de la lista, y dentro vamos a hacer una comparacion
    entre el id de la pelicula de turno y  el id que recibio la funcion,para esto el id de la funcion
    debe ser un entero y no una cadena, usamos parseInt() y lo pasamos a entero, de base 10,asi nos devolvera el primer id de la lista
    que sea  === al del parametro*/

/*11.4--/La otra funcion es para buscar una pelicula, recibe dos parametros id y category
   Esta funcintendra un switch escuchando con un caso por cada categria, entonces cuando sea llamada
   trae una categoria,   la recibe escoje el caso correcto y ejecuta findById()pasandole la lista de peliculas
   correspndiente a esa categoria */

/*11.5--/el switsh le pasamos la categoria*/

/*11.6--/Creams un caso por cada categoria, la ultima que sea por default
      en cada caso queremos que retorne un  lllamado a findById, pasandole
      la lista de peliculas de cada categoria, y el id*/

/*11.7--/Volvemos a la funcion showModal, en la ultima linea, Entonces vamos a llamar esta funcion findMovie aqui
    y como parametro le pasamos los datos que estamos recibiendo de el $elemento al
    que se le dio click y sucedio el evento lo guardamos en una variable data*, nos devuelve el objeto
    cn este template, esa pelicula */

/*11.8--/hacemos debugger*/

/*11.9--/Hicimos debuger para ver el contenido de data y es el objeto de esa pelicula,  vamos ahora a usar las propiedades de la vista del modal
    para insertarle los datos de la data, la movie que recibio, para eso vemos ese objeto en la consola de dev
    y vemos lo que necesitamos que es $modalTitle, $modalImage, $modalDescription, y les seteams el contenido que deberia ir ahi 
    ejemplo $modaltitle.textContent = data...  textContent le setea el contenidoque le digamos a la variable*/

/*11.10--/para la imagen debemos pasarle un llamado al metodo setAttribute, para inertale un atribut de source 'src',
    como segundo parametro donde esta la imagen en data, estp a nuestro elemento con la img del modal en el html,*/

/*11.11--//guardams recargamos y probamos el modal con la inf y la imagen*/



/*12--/amos a llevarnos estos llamados a alas listas con  getData de aqui, los vams a poner mas abajo cada uno con su respectivo container
    y su llamado a renderMvieList, comentamos estos de abaj y haems eso en el 12.1, 12.2, 12.3*/

/*12.1--/le ponemos el llamado de action list a esta zona, que le correspnde donde se obtiene el conainer
y se llama  arenderizar las movies*/

/*12.2--/ahora a dramaList*/

/*12.3--/Ahora a animationList*/

/*12.4--/Vamos ahora a seguir aqui, en el forEach, bajo la linea que hace append del container, se supne que despues de la linea anterior
        se genero en el container cada movieElement, ahora vamos a crear una constanre llamada img, 
        dnde vamos a seleccionar el selector img de este movieElement*/

/*12.5--/ahora a esta variable image que contiene el img de el template en cada pelicula
        le vamos a poner un evento, de load, este en su cb recibe el evento*/

/*12.6--/Cuando suceda el load es decir el recurso de la imagen se cargo totalmente,
          al evento que trae le queremos pasar  y darle una clase, para esto antes de  classList concatenamos
          el metodo srcElement para que asi sea tomado por varios navegadores, y la clase que 
          queremos agregarle cuando est suceda es 'fadeIn' asi entnces le damos animacion cuandose carguen nuestras peliculas*/

/*12.7--//Ahora busquemos esta clase en nuestro archivo css para ver que existe
veremos que contiene una animacion de 5000ms con la propiedad
fadeIn
Guardams y recargamos para ver que funcione*/



/*13--/Ahora vamos a nuestra funcion get Data, Vamos adentro  a majenar el error en caso de que suceda, hagamos un if que pregunte
    si la cantidad de peliculas es mayor a 0, si es asi retorne la datay termine la 
    ejecucuin */

/*13.1--//Si no hay peliculas osea es 0, lanze un  nuevo error*/

/*13.2--/volvemos al evento de submit, dbajo la linea que crea un nuevo formulario,
Vamos a  comentar todo lo que hay abajo de  traer la pelicula por el nombre
y generarle un template  y lueg imprimirl en el $featuringContainer, y vamos a hacer un try catch
le diremos que trate de hacer esto que comentamos, si no puede que nos capture el error*/

/*13.3--/Ahora capturamos un error en caso de que suceda, lanzams una alerta,y que remueva el $loader
      con el metodo remove(), tambien que al $home le remueva la clase 'search-active, asi cuando hay error
      se cierra todo este contenedor*/



/*14--/PAra este paso queremos almacenar nuestras listas una vez que las obtenemos por primera vez en el localStorage
    localStorage permite almacenar datos sin fecha de expiracion, los queremos almacenar en nuestro navegadr
    en window, entonces hacemos eso, vamos a comentar cada llamado a cada lista con su respectivo renderizad y 
    aparicion en container y las vamos a pegar en este paso, con la diferencia de que en segunda linea vamos a 
    seterarle a window localStorage a este  seteandole un item con el metodo setItem, este recibe dos parametros, 
    el nombre del objeto o item a settearle en un string, y el segundo como es un objeto hay que pasarlo en a string, 
    para esto usamos el metodo JSON.stringify(le pasamos el objeto a tranformar), de esta forma ya n vamos a tener que 
    hacer las mismas
    peticiones cada vez que se recargue la pagina*/

  /*const { data: { movies: actionList } } = await getData(`${apiUrl}?genre=action`)
    window.localStorage.setItem('actionList', JSON.stringify(actionList))
    const $actionContainer = document.querySelector('#action')
    renderMovieList(actionList, $actionContainer, 'action')*/

/**14.1--/hacemos lo mismo con el drama  y animation/

/*14.2--//Guardamos y recargamos para ver que funcione bien con el localStorage, ya que las peticiones
    se hacen una sola vez y luego podemos recargar la pagina y las tenemos guardadas en localStorage por 
    lo que ahorramos procesamiento*/


/*15--//En este paso crearemos una async funcion que revise si los datos estan en el cache,para que si hay no los muestre, estos datos
    son nuestras listas de peliculas recordemos y si no tiene nada el cache, entonces que si haga los llamads a la api todo desde aqui, la 
    funcion recibe la categoria como parametro*/
    
      /*15.1--//Creams una variable llamada listName que obtendra  el nombre de la lista, usando
      la categoria que le pasa la funcion*/
     
      /*15.2--//ahora otra variable para decirle que obtenga lo que tiene en localStorage
      para esto usamos el metodo getItem()de localStrage que nos permite obtener lo que le pidamos, 
      y en ese metodole pasamos la listName*/
      

      /*15.3--//Ahora  si  en cacheList se obtuvo algo del localStorage
      queremos que nos retorne el contenido de este cacheList pero, si lo hacemos 
      solo return cacheList nos devuelve un string, necesitamos que nos devuelva el objeto de cada lista
      que le pasen tenemos que convertirlo en un objeto, con el metodo JSON.parse()*/
     
      /*15.4--//ahora vamos si no trae nada entonces, tenemos que hacer los llamados a la api,
      haremos esto de una forma mas limpia, creamos una constante que desestructure el objeto  que recibe de la api
      hasta las movies y lo llamamos data, a esta constante le pasamos el llamado a getData(), pero antes le interponemos await
      en getData recibe la ruta, y a la hora de especificar el genero le pasamos la categoria que trae la funcion*/

      /*15.5--//Como obtuvo los datos que llamo entonces se los seteamos a localStorage
      recordemos que este recibe el nombre de los datos 'lista', en un string
      y para poder  setearle un objeto debemos pasarlo a string*/

      /*15.6--//asi cuando se llame esta funcion  le pasamos la categria, para esto vamos a remplazar los llamados que teniamos a getData para las 
      listas por  una constante con el nombre de la lista,  y recibe un llamado  a esta funcion, pasandole la categoria que corresponde
      a cada lista, de este modo estaq funcion al ser llamada  obtiene los datos del cache, si noestan ahi los obtiene de la api y los
      setea en localStorage, entonces en cada llamado a la api para las listas, ya no vamos a necesitarlas ds primeras lineas, como ya dijimos el llamado cambia, y eliminamos cada 
      seteada que haciamos a localStorage de cada lista comentamos esa parte y la hacems bajo 
      esta funcion con las especificaciones del paso*/
   

    /*15.7--//arregandlo  los llamados*/
    /*const actionList = await cacheExist('action')
    const $actionContainer = document.querySelector('#action')
    renderMovieList(actionList, $actionContainer, 'action')*/

    //igual para los demas recargamos y vemos que funcione, aqui termina el curso

