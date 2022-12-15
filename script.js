const gamingInfo = document.querySelector('.gaming-info');

const url = "https://api.rawg.io/api/games?key=d34c595a3f0b48eca8d4022bde535aba"

const getAPI = async () => {
    const api = await fetch(url)
    const data = await api.json()
    games(data)
    console.log(data)
}
getAPI()

const games = (data) => {
    data.results.forEach((info) => {
        console.log(info)
        gamingInfo.innerHTML += `
            <img class="gaming-image" src=${info.background_image}>
            <h3>${info.name}</h3>
        `
    })
}