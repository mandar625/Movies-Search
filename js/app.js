const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
//most popular movies
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    
// code by me///////
// // search movies




// const moiveBox = document.querySelector("#movie-box")
// //init call
// const getMovies = async (api) => {

//     const response = await fetch(api)
//     const data = await response.json()
//     // console.log(data)
//      showMovies(data.results)




// }


// const showMovies = (data) => {

//     moiveBox.innerHTML = "";
//     //empty the movie box

//     data.forEach((item) => {
//         // console.log(item)
//         const box = document.createElement("div")
//                     box.classList.add("box")
//                     box.innerHTML = `
//                         <img src="${IMGPATH+item.poster_path}" alt="" />
//                         <div class="overlay">
//                             <div class="title"> 
//                                 <h2>${item.original_title}</h2>
//                                 <span>${item.vote_average} <span>
//                             </div>
//                             <h3>Overview:</h3>
//                             <p> 
//                                 ${item.overview}
//                             </p>
//                          </div>
//                     `
//                     moiveBox.appendChild(box)


//     });


// }
// document.querySelector("#search").addEventListener(

//     "keyup",
//     function (event) {

//         if(event.target.value != null){
//             getMovies(SEARCHAPI+event.target.value)

//         }else{

//             getMovies(APIURL)
//         }
        
//     }
// )
// getMovies(APIURL);


const moiveBox = document.querySelector("#movie-box")
const getMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    showMovies(data)
}
getMovies(APIURL);


const showMovies = (data) => {
    moiveBox.innerHTML = "";
    data.results.forEach(
        (result) => {
            const imagePath = result.poster_path === null ? "img/image-missing.png" : IMGPATH + result.poster_path;
            // const box = `
            // <div class="box">
            //     <img src="${IMGPATH+result}" alt="" />
            //     <div class="overlay">
            //         <h2>Overview:</h2>
            //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis iste doloribus quam voluptatum, illum unde nostrum dignissimos, mollitia, sapiente porro natus neque cupiditate distinctio quod possimus aliquid reiciendis vel. Soluta?
            //     </div>
            // </div>
            // `
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
                <img src="${imagePath}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>
            `
            moiveBox.appendChild(box)
        }
    )
}

document.querySelector("#search").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            getMovies(SEARCHAPI + event.target.value)
        } else {
            getMovies(APIURL);
        }
    }
)