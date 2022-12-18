const highestRated = document.querySelector('.highest-rated');
const input = document.querySelector('.input-box')
const submit = document.querySelector('.submit')
const searchCards = document.querySelector('.search-cards')

const url = "https://api.rawg.io/api/games?key=d34c595a3f0b48eca8d4022bde535aba"

//Fetching the search data
submit.addEventListener('click', (e) => {
    e.preventDefault()
    const getAPI = async () => {
        let value = input.value;
        const url2 = `https://api.rawg.io/api/games?key=d34c595a3f0b48eca8d4022bde535aba&search=${value}`
        try {
        const api = await fetch(url2)
        const data = await api.json()
        // console.log(data)
        input.value = ""
            gameSearch(data)
        } catch(error) {
            console.log(`Failed to fetch data ${error}`)
        }
    }
    getAPI()
})

const gameSearch = (data) => {
    data.results.forEach((search) => {
        // const gameData = document.createElement('div')
        console.log(search)
        // searchCards.prepend(gameData)
        searchCards.innerHTML += `
        <div class="search-info">
            <h1 class="search-name">${search.name}</h1>
            <h3 class="search-date">Released: ${search.released}</h3>
            <img class="search-image" src=${search.background_image}>
        </div>
        `
    })
}

//Creating dates to fetch games
const fetchCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if(month < 10) {
        return `0{month}`
    } else {
        return month
    }
}
fetchCurrentMonth()

const fetchCurrentDay = () => {
    const day = new Date().getDate()
    if(day < 10) {
        return `0${day}`
    } else {
        return day
    }
}
fetchCurrentDay()

const fetchCurrentYear = () => {
    const year = new Date().getFullYear()
}
fetchCurrentYear()

const currentYear = new Date().getFullYear()
const currentMonth = fetchCurrentMonth()
const currentDay = fetchCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`


//Fetching highest rated games
//     const getApi = async () => {
//         const url = `https://rawg.io/api/games?key=d34c595a3f0b48eca8d4022bde535aba&dates=${lastYear},${currentDate}&ordering=-rating`
//         try {
//         const api = await fetch(url)
//         const data = await api.json()
//         highestRatedGames(data)
//         console.log(data)
//         input.value = ""
//         } catch(error) {
//             console.log(`Failed to fetch data ${error}`)
//         }
//     }
//     getApi()


// const highestRatedGames = (data) => {
//     data.results.forEach((info) => {
//         // console.log(info)
//         highestRated.innerHTML += `
//         <div class="popular-games">
//             <img class="gaming-image" src=${info.background_image}>
//             <h3>${info.name}</h3>
//         </div>
//         `
//     })
// }


//Fetching games coming soon
//     const getApi2 = async () => {
//         const url = `https://rawg.io/api/games?key=d34c595a3f0b48eca8d4022bde535aba&dates=${currentDate},${nextYear}&ordering=-rating`
//         try {
//         const api = await fetch(url)
//         const data = await api.json()
//         comingSoon(data)
//         console.log(data)
//         input.value = ""
//         } catch(error) {
//             console.log(`Failed to fetch data ${error}`)
//         }
//     }
//     getApi2()


// const comingSoon = (data) => {
//     data.results.forEach((info) => {
//         // console.log(info)
//         highestRated.innerHTML += `
//         <div class="popular-games">
//             <img class="gaming-image" src=${info.background_image}>
//             <h3>${info.name}</h3>
//         </div>
//         `
//     })
// }


//NASA API KEY: bgVXNGhNo3viRxKKc3SdD9LhDvPmJgYObDmZT7gQ