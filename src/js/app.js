const ApiUrl = 'https://yts.am/api/v2/list_movies.json';

(async function load () {

  async function getData (url) {
    const data = await fetch(url)
    const response = await data.json()
    return response;
  }

  const { data: { movies: actionList }} = await getData(`${ApiUrl}?genre=action`)
  const { data: { movies: dramaList }} = await getData(`${ApiUrl}?genre=drama`)
  const { data: { movies: animationList }} = await getData(`${ApiUrl}?genre=animation`)
  console.log(actionList, dramaList, animationList)

  const $form = document.getElementById('form')
  const $home = document.getElementById('home')
  const $featuringContainer = document.getElementById('featuring')

  function videoItemTemplate(movie, category) {
    return (
        `<div class="primaryPlaylistItem" data-id='${movie.id}' data-category='${category}'>
          <div class="primaryPlaylistItem-image">
            <img src="${movie.medium_cover_image}">
          </div>
          <h4 class="primaryPlaylistItem-title">
            ${movie.title}
          </h4>
        </div>`
    )
  }

  function featuringTemplate (peli) {
    return (
      `<div class="featuring">
+         <div class="featuring-image">
+           <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
+         </div>
+       <div class="featuring-content">
+         <p class="featuring-title">Pelicula encontrada</p>
+         <p class="featuring-album">${peli.title}</p>
+       </div>
+      </div>`
      )
  }

  function createTemplate (HTMLString) {
    const html = document.implementation.createHTMLDocument()
    html.body.innerHTML = HTMLString
    return html.body.children[0]
  }

  function addEvent($element) {
    $element.addEventListener('click', () => {
      showModal($element);
    })
  }

  function setAttributes ($element, attributes = {}) { 
    for (const attribute in attributes) {
      $element.setAttribute(attribute, attributes[attribute])
    }
  }

  function renderMovieList (list, $container, category) {
    $container.children[0].remove()
    list.forEach(movie => {
      const HTMLString = videoItemTemplate(movie, category)
      //console.log(HTMLString)
      const movieElement = createTemplate(HTMLString)
      //console.log(movieElement)
      $container.append(movieElement)
      addEvent(movieElement)
    })
  }

  $form.addEventListener('submit', async event => {
    event.preventDefault()
    $home.classList.add('search-active')
    const $loader = document.createElement('img')
    setAttributes($loader, {
      src: 'src/images/loader.gif',
      width: 50,
      height: 50
    })
    //debugger
    $featuringContainer.append($loader)
    const data = new FormData($form);

    const peli = await getData(`${ApiUrl}?limit=1&query_term=${data.get('name')}`)
    
    $featuringContainer.children[0].remove()
    
    const HTMLString = featuringTemplate(peli.data.movies[0])
    console.log(HTMLString)
    
    $featuringContainer.innerHTML = HTMLString

  })

  const $actionContainer = document.getElementById('action')
  renderMovieList(actionList, $actionContainer, 'action')

  const $dramaContainer = document.getElementById('drama')
  renderMovieList(dramaList, $dramaContainer, 'drama')

  const $animationList = document.getElementById('animation')
  renderMovieList(animationList, $animationList, 'animation')

  const $modal = document.getElementById('modal')
  const $overlay = document.getElementById('overlay')
  const $hideModal = document.getElementById('hide-modal')

  const $modalTitle = $modal.querySelector('h1')
  const $modalImage = $modal.querySelector('img')
  const $modalDescription = $modal.querySelector('p')
  
  function findById (list, id) {
    return list.find(movie =>  movie.id === parseInt(id))
  }

  function findMovie (id, category) {
    switch (category) {
      case 'action': {
        return findById(actionList, id)
      }
      case 'drama' : {
        return findById(dramaList, id)
      }
      default: {
        return(findById(animationList, id))
      }

    }
  }



  function showModal ($element) {
    $overlay.classList.add('active')
    $modal.style.animation = 'modalIn .8s forwards'
    const id = $element.dataset.id
    const category = $element.dataset.category
    const data = findMovie(id, category)
    console.log(data)
    //debugger
    $modalTitle.textContent = data.title
    $modalImage.setAttribute('src', data.medium_cover_image)
    $modalDescription.textContent = data.description_full


    
  }

  $hideModal.addEventListener('click', () => {
    $modal.style.animation = 'modalOut .8s forwards'
    $overlay.classList.remove('active')
  })
})()