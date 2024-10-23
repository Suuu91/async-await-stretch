const getArtists = async () => {
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-FTB-ET-WEB-FT/artists`)
  const artistsInfo = await response.json()
  const artistsName = artistsInfo.data.map((item) => {
    return `<li>${item.name}</li>`
  })

  const ol = document.querySelector(`ol`)
  ol.innerHTML = artistsName.join(``)
}

getArtists()