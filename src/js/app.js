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

  const $actionContainer = document.getElementById('action')
  //console.log(videoItemTemplate('bitcoin-died', 'src/images/covers/bitcoin.jpg'))
  actionList.data.movies.forEach(movie => {
    const HTMLString = videoItemTemplate(movie)
    //console.log(HTMLString)
    const html = document.implementation.createHTMLDocument()
    html.body.innerHTML = HTMLString
    $actionContainer.append(html.body.children[0])

    //debugger

  })
})()