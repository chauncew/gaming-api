const highestRated = document.querySelector('.highest-rated');
const input = document.querySelector('.input-box');
const submit = document.querySelector('.submit');
const searchCards = document.querySelector('.search-cards');
const scroll = document.querySelector('.scroll');
const smallImages = document.querySelector('.small-images');
const popupCards = document.querySelector('.popup-cards');
const vale = document.querySelector('.vale');
const body = document.querySelector('body');
const mainHeading = document.querySelectorAll('.main-heading h1');
const searchInfo = document.querySelectorAll('.search-info');
const searchSection = document.querySelector('.search-section');


const url = "https://api.rawg.io/api/games?key=d34c595a3f0b48eca8d4022bde535aba"

//Fetching the search data
submit.addEventListener('click', (e) => {
    e.preventDefault();
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
        };
    };
    getAPI();
    searchCards.innerHTML = ""
    // searchCards.style.display = "none"
});

const gameSearch = (data) => {
    data.results.forEach((search) => {
        // console.log(search)
        const gameData = document.createElement('div')
        gsap.from(gameData, {y: -1000, x: -1000,  duration: 1.5, rotateY: 1080})
        searchCards.append(gameData);
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
            vale.style.transition = "all 0.5s"
            popupCards.classList.add('cards');
            popupCards.innerHTML += `
            <h1 class="search-name">${search.name}</h1>
            <h3 class="rating">Rating: ${search.rating}</h3>
            `
            search.genres.map((genre) => {
                // console.log(genre.name)
                popupCards.innerHTML += `
                    <div class="genres">
                        <h3>Type:  ${genre.name}</h3>
                    </div>
                `
            });
            // console.log(gameData)
            search.platforms.map((gameData) => {
                // console.log(gameData.platform.name)
                popupCards.innerHTML += `
                    <h3 class="platforms">${gameData.platform.name}</h3>
                `  
            });
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
            });
        });
        popupCards.addEventListener('click', () => {
            popupCards.classList.remove('cards') ;
            popupCards.innerHTML  = "";
            smallImages.classList.remove('smallImagesActive')
            smallImages.innerHTML = "";
            vale.style.display = "none";
        });

    });
};

//Animations
gsap.registerPlugin();
//Heading Animation
const animation = () => {
    const reveal = gsap.timeline()
    reveal
      .from(mainHeading, {
        autoAlpha: 0,
        scale: 30,
        y: -100,
        ease: 'bounce.out',
        duration: 1,
        stagger: 0.9,
      });
  };

  window.addEventListener('load', () => {
    setTimeout(() => {
        animation()
    }, 1000)
  });

  //Search Box Animations
  const animation2 = () => {
    gsap.from(searchSection, {autoAlpha: 0, y: 300, opacity: 0, duration: 1.5, delay: 4});
  };
  animation2();