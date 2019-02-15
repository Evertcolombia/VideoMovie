const ApiUrl = 'https://yts.am/api/v2/list_movies.json';

(async function load () {

  async function getData (url) {
    const data = await fetch(url)
    const response = await data.json()
    return response;
  }

  const actionList = await getData(`${ApiUrl}?genre=action`)
  const dramaList = await getData(`${ApiUrl}?genre=drama`)
  const animationList = await getData(`${ApiUrl}?genre=animation`)
  console.log(actionList, dramaList, animationList)

  const $form = document.getElementById('form')
  const $home = document.getElementById('home')
  const $featuringContainer = document.getElementById('featuring')

  function videoItemTemplate(movie) {
    return (
        `<div class="primaryPlaylistItem">
          <div class="primaryPlaylistItem-image">
            <img src="${movie.medium_cover_image}">
          </div>
          <h4 class="primaryPlaylistItem-title">
            ${movie.title}
          </h4>
        </div>`
    )
  }

  function createTemplate (HTMLString) {
    const html = document.implementation.createHTMLDocument()
    html.body.innerHTML = HTMLString
    return html.body.children[0]
  }

  function addEvent($element) {
    $element.addEventListener('click', () => {
      alert('hubo click sobre una pelicula')
    })
  }

  function setAttributes ($element, attributes = {}) { 
    for (const attribute in attributes) {
      $element.setAttribute(attribute, attributes[attribute])
    }
  }

  function renderMovieList (list, $container) {
    $container.children[0].remove()
    list.forEach(movie => {
      const HTMLString = videoItemTemplate(movie)
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
    debugger
    


  })

  const $actionContainer = document.getElementById('action')
  renderMovieList(actionList.data.movies, $actionContainer)

  const $dramaContainer = document.getElementById('drama')
  renderMovieList(dramaList.data.movies, $dramaContainer)

  const $animationList = document.getElementById('animation')
  renderMovieList(animationList.data.movies, $animationList)
})()