const gamingInfo = document.querySelector('.gaming-info');
const input = document.querySelector('.input-box')
const submit = document.querySelector('.submit')

// const url = "https://api.rawg.io/api/games?key=d34c595a3f0b48eca8d4022bde535aba"


submit.addEventListener('click', (e) => {
    e.preventDefault()
    const getAPI = async () => {
        let value = input.value;
        const url2 = `https://api.rawg.io/api/games?key=d34c595a3f0b48eca8d4022bde535aba&search=${value}`
        try {
        const api = await fetch(url2)
        const data = await api.json()
        // games(data)
        console.log(data)
        input.value = ""
        } catch(error) {
            console.log(`Failed to fetch data ${error}`)
        }
    }
    getAPI()
})

// const games = (data) => {
//     data.results.forEach((info) => {
//         // console.log(info)
//         gamingInfo.innerHTML += `
//             <img class="gaming-image" src=${info.background_image}>
//             <h3>${info.name}</h3>
//         `
//     })
// }




//Fetching game dates
// const fetchCurrentMonth = () => {
//     const month = new Date().getMonth() + 1
//     // console.log(month)
//     if(month < 10) {
//         return 
//         `0${month}`
//     }else {
//         return month;
//     }
// }
// fetchCurrentMonth()


// const fetchCurrentDay = () => {
//     const day = new Date().getDate()
//     // console.log(day)
//     if(day < 10) {
//         return 
//         `0${day}`
//     }else {
//         return day;
//     }
// }
// fetchCurrentDay()

//Combining current month, day, and year
// const currentYear = new Date().getFullYear()
// const currentMonth = fetchCurrentMonth()
// const currentDay = fetchCurrentDay()
// const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// console.log(currentDate)

//Last Year Dates
// const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`

//Next Year Dates
// const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

//Popular games dates
// const popular_games =`${url}games?dates${lastYear},${currentDate}&ordering=-rating&page_size=10`;
// console.log(popular_games)



//Fetching the API for upcoming games




//Fetching the API for new games

//NASA API KEY: bgVXNGhNo3viRxKKc3SdD9LhDvPmJgYObDmZT7gQ