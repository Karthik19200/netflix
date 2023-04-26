// let scrollcontainer=document.querySelector(".child-div");
// console.log(scrollcontainer)
// let backbtn=document.getElementsByClassName('backbtn');
// console.log(backbtn)
// let nextkbtn=document.getElementsByClassName('nxtbtn');

 
// nextkbtn.addEventListener("click",()=>
// {
//     scrollcontainer.scrollleft -= 140;
// });
// backbtn.addEventListener("click",()=>
// {
//     scrollcontainer.scrollright += 140;
// });

// function scrolll()
// {
// var left=document.querySelector("parent-container");
// left.scrollBy(150,0)
// }
// function scrollr()
// {
// var right=document.querySelector("parent-container");
// right.scrollBy(-150,0)
// }

function login()
{
    window.location='./index.html'
    username=umame.value
    console.log(username)
   localStorage.setItem("USERNAME","username");
}

const api_key='api_key=21db77a161a21822ac37b3af1c72e175';
const base_url='https://api.themoviedb.org/3';
const api_url=base_url+'/discover/movie?sort_by=popularity.desc&'+api_key;
const img_url='https://image.tmdb.org/t/p/w500';
const main=document.getElementById('main')
const main2=document.getElementById('main2')
const genres= [{
    "id": 28,
    "name": "Action"
}, {
    "id": 12,
    "name": "Adventure"
}, {
    "id": 16,
    "name": "Animation"
}, {
    "id": 35,
    "name": "Comedy"
}, {
    "id": 80,
    "name": "Crime"
}, {
    "id": 99,
    "name": "Documentary"
}, {
    "id": 18,
    "name": "Drama"
}, {
    "id": 10751,
    "name": "Family"
}, {
    "id": 14,
    "name": "Fantasy"
}, {
    "id": 36,
    "name": "History"
}, {
    "id": 27,
    "name": "Horror"
}, {
    "id": 10402,
    "name": "Music"
}, {
    "id": 9648,
    "name": "Mystery"
}, {
    "id": 10749,
    "name": "Romance"
}, {
    "id": 878,
    "name": "Science Fiction"
}, {
    "id": 10770,
    "name": "TV Movie"
}, {
    "id": 53,
    "name": "Thriller"
}, {
    "id": 10752,
    "name": "War"
}, {
    "id": 37,
    "name": "Western"
}]






getmovies(api_url);


function getmovies(url)
{
    fetch(url).then(res=>res.json()).then(data=>
    {
      
      console.log(data.results);
      showmovies(data.results);
    } ) 
}

function showmovies(data)
{
main.innerHTML = ' ';
    data.forEach(movie => 
        {
        const{titile,poster_path}=movie;
        const movieE1=document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML=
        `<img src="${img_url+poster_path}" alt="${titile}"> ` 

        main.appendChild(movieE1);
       
    })

   
       
   
    

}