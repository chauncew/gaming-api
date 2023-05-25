const highestRated = document.querySelector('.highest-rated')
const input = document.querySelector('.input-box')
const submit = document.querySelector('.submit')
const searchCards = document.querySelector('.search-cards')
const scroll = document.querySelector('.scroll')
const cardsClicked = document.querySelector('.cards-clicked')
const smallImages = document.querySelector('.small-images')
const popupCards = document.querySelector('.popup-cards')
const vale = document.querySelector('.vale')


const url = "https://api.rawg.io/api/games?key=d34c595a3f0b48eca8d4022bde535aba"

//Fetching the search data
submit.addEventListener('click', (e) => {
    e.preventDefault()
    const getAPI = async () => {
        let value = input.value;
        const url2 = `https://api.rawg.io/api/games?key=d34c595a3f0b48eca8d4022bde535aba&search=${value}`
        if(value === "") {
            alert("Please Enter A Game. The default games will now be loaded")
        }
        try {
        const api = await fetch(url2)
        const data = await api.json()
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
        // console.log(search)
        const gameData = document.createElement('div')
        searchCards.append(gameData)
        gameData.innerHTML += `
        <div class="search-info">
            <h1 class="search-name">${search.name}</h1>
            <h3 class="search-date">Released: ${search.released}</h3>
            <h3 class="rating">Rating: ${search.rating}</h3>
            <img class="search-image" src=${search.background_image}>
        </div>
        `
        gameData.addEventListener('click', () => {
            vale.style.display = 'block'
            popupCards.classList.add('cards')
            popupCards.innerHTML += `
            <h1 class="search-name">${search.name}</h1>
            <h3 class="rating">Rating: ${search.rating}</h3>
            `
            search.genres.map((genre) => {
                console.log(genre.name)
                popupCards.innerHTML += `
                    <div class="genres">
                        <h3>Type:  ${genre.name}</h3>
                    </div>
                `
            })
            // console.log(gameData)
            search.platforms.map((gameData) => {
                // console.log(gameData.platform.name)
                popupCards.innerHTML += `
                    <h3 class="platforms">${gameData.platform.name}</h3>
                `  
            })
            popupCards.innerHTML += `
            <h1 class="close-button">X</h1>
            <img class="search-image" src=${search.background_image}>
            `
            search.short_screenshots.map((screenShots) => {
                smallImages.classList.add('smallImagesActive')
                smallImages.innerHTML += `
                    <div class="screen-shots">
                        <img src=${screenShots.image}>
                    </div>
                `
                window.scrollTo({top: 0})
            })
        })
        popupCards.addEventListener('click', () => {
            popupCards.classList.remove('cards') 
            popupCards.innerHTML  = ""
            smallImages.classList.remove('smallImagesActive')
            smallImages.innerHTML = ""
            vale.style.display = "none"
        })

    })
}


//Creating dates to fetch games
// const fetchCurrentMonth = () => {
//     const month = new Date().getMonth() + 1
//     if(month < 10) {
//         return `0{month}`
//     } else {
//         return month
//     }
// }
// fetchCurrentMonth()

// const fetchCurrentDay = () => {
//     const day = new Date().getDate()
//     if(day < 10) {
//         return `0${day}`
//     } else {
//         return day
//     }
// }
// fetchCurrentDay()

// const fetchCurrentYear = () => {
//     const year = new Date().getFullYear()
// }
// fetchCurrentYear()

// const currentYear = new Date().getFullYear()
// const currentMonth = fetchCurrentMonth()
// const currentDay = fetchCurrentDay()
// const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
// const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`



//NASA API KEY: bgVXNGhNo3viRxKKc3SdD9LhDvPmJgYObDmZT7gQ