const ApiUrl = 'https://yts.am/api/v2/list_movies.json';

(async function load () {

  async function getData (url) {
    const data = await fetch(url)
    const response = data.json()
    return response;
  }

  const actionList = await getData(`${ApiUrl}?genre=action`)
  const dramaList = await getData(`${ApiUrl}?genre=drama`)
  const animationList = await getData(`${ApiUrl}?genre=animation`)
  console.log(actionList, dramaList, animationList)
})()