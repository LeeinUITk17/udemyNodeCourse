// // async function searchBooks() {
// //     const searchInput = document.getElementById('searchInput').value;
// //     const bookList = document.getElementById('bookList');
// //     const loadingSpinner = document.getElementById('loadingSpinner');
// //     const bookDetails = document.getElementById('bookDetails');

// const { response, request, request } = require("express");

// //     try {
// //         // Display loading spinner while waiting for the API response
// //         loadingSpinner.classList.remove('hidden');                        

// //         const response = await fetch(`/search?title=${searchInput}`);
// //         const data = await response.json();

// //         // Clear previous results and details
// //         bookList.innerHTML = '';
// //         bookDetails.innerHTML = '';
        
// //         // Display search results
// //         data.forEach(book => {
// //             const listItem = document.createElement('li');
// //             listItem.textContent = `${book.title} by ${book.author}`;
// //             listItem.addEventListener('click', () => showBookDetails(book));
// //             bookList.appendChild(listItem);
// //         });
// //     } catch (error) {
// //         console.error('Error fetching book data:', error);
// //         // Handle errors (e.g., display an error message)
// //     } finally {
// //         // Hide loading spinner after the API response is received
// //         loadingSpinner.classList.add('hidden');
// //     }
// // }

// // function clearResults() {
// //     document.getElementById('bookList').innerHTML = '';
// //     document.getElementById('searchInput').value = '';
// //     document.getElementById('bookDetails').innerHTML = '';
// // }

// // function showBookDetails(book) {
// //     const bookDetails = document.getElementById('bookDetails');
// //     bookDetails.innerHTML = `
// //         <h2>${book.title}</h2>
// //         <p>Author: ${book.author}</p>
// //         <!-- Add more details as needed -->
// //     `;
// //     bookDetails.classList.remove('hidden');
// // }

// // function sortResults() {
// //     const sortSelect = document.getElementById('sortSelect');
// //     const sortBy = sortSelect.value;
// //     const bookList = document.getElementById('bookList');
// //     const books = Array.from(bookList.children);

// //     books.sort((a, b) => {
// //         const aText = a.textContent.toLowerCase();
// //         const bText = b.textContent.toLowerCase();

// //         if (sortBy === 'title') {
// //             return aText.localeCompare(bText);
// //         } else if (sortBy === 'author') {
// //             const aAuthor = aText.split('by')[1].trim();
// //             const bAuthor = bText.split('by')[1].trim();
// //             return aAuthor.localeCompare(bAuthor);
// //         }

// //         return 0;
// //     });

// //     bookList.innerHTML = '';
// //     books.forEach(book => bookList.appendChild(book));
// // }

// // function fetchWeatherData(city,callback){
// //     setTimeout(()=>{
// //         const temperature=Math.floor(Math.random()*20)+10;
// //         callback({city,temperature});
// //     },1000);
// // }

// // function calculateAverageTemperature(dataArray,callback){
// //     const temperature=dataArray.map(data=>data.temperature);
// //     const averageTemperature=temperature.reduce((sum,temp)=>sum+temp,0)/temperature.length;
// //     callback(averageTemperature);
// // }

// // const cities=["New York","London","Tokyo"];
// // const weatherData=[];
// // function fetchAndProcessData(){
// //     let count=0;
// //     function processData(data){
// //         weatherData.push(data);
// //         if(++count===cities.length){
// //             calculateAverageTemperature(weatherData,displayAverageTemperature);
// //         }
// //     }
// //     cities.forEach(city=>{
// //         fetchWeatherData(city,processData);
// //     });
// // }
// // function displayAverageTemperature(averageTemperature){
// //     console.log(`The average temperature for the selected cties is: ${averageTemperature.toFixed(2)} Celsius`);
// // }
// // fetchAndProcessData();
// // fetch example
// // getWeather(weatherReceived);
// // function weatherReceived(data){
// //     let weather=data;
// //     document.body.innerText(weather);
// // }
// // function getWeather(callback){
// //     setTimeout(()=>{
// //         callback('Sunny');
// //     });
// // }
// ///////////////////////////////////////////////////////////////////////////
// function getWeather(){
//     return new Promise(function(resolve,reject){
// //resolve('Sunny')
// setTimeout(() => {
//    resolve=('Cloudy') 
// }, 0);
//     })
// }

// function getWeatherIcon(weather){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             switch(weather){
//                 case 'Sunny':
//                     resolve ('(^o^)');
//                     break;
//                     case 'Cloudy':
//                         resolve('(-_-)!');
//                         break;
//                         case 'Rainy':
//                             resolve('(+_+)');
//                             break;
//                             default:
//                                 reject ('No icon found');
//             } 
//         },0);
//     })
// }

// // const promise=getWeather();
// // promise.then(
// //     function(data){
// //     console.log(`first param ${data}`);
// // },
// //   function(data){
// //     console.log(`second param ${data}`);
// //   }
// // )
// function onSuccess(data){
//     console.log(`sucess ${data}`);
// }
// function onError(error){
//     console.log(`error ${error}`);
// }
// //getWeather().then(onSuccess,onError)
// getWeather()
// .then(getWeatherIcon)
// .then(onSuccess,onError)
function getWeather() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Rainy');
        }, 100);
    });
}

function getWeatherIcon(weather) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            switch (weather) {
                case 'Sunny':
                    resolve('(^o^)');
                    break;
                case 'Cloudy':
                    resolve('(-_-)!');
                    break;
                case 'Rainy':
                    resolve('(+_+)');
                    break;
                default:
                    reject('No icon found');
            }
        }, 100);
    });
}

function onSuccess(data) {
    console.log(`success ${data}`);
}

function onError(error) {
    console.log(`error ${error}`);
}

getWeather()
    .then(getWeatherIcon)
    .then(onSuccess)
    .catch(onError);
/////////////////////////////////
function contactCheck(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve ('404')
        }, 100);
    })

}
function readdata(param){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            switch(param){
                case '404':
                    resolve ('Not found (-_-#)');
                    break;
                    case '200':
                        resolve('Ok (^ 3 ^)');
                        break;
                        default:
                            reject('disconnection (@ . @ !)');
            }
        }, 100);
    })
}
function onSuccessX(data){
    console.log(`Success: ${data}`);
}
function onErrorX(error){
    console.log(`Error: ${error}`);
}
function onFinallyX(){
    console.log('Finnaly we be done ..');
}
 contactCheck()
 .then(readdata)
 .then(onSuccessX)
 .catch(onErrorX)
 .finally(onFinallyX)
//////////////////////////////////////////////////
function fetchData() {
    return new Promise(function (resolve, reject) {
        fetch('https://api.weather.gov/gridpoints/OKX/35,35//forecast')
            .then(response => response.json())
            .then(data => resolve(data.properties.periods[1].shortForecast))
            .catch(error => reject(error)); // Handle errors and reject the promise
    });
}

function displayData(weather) {
    console.log(weather);
}

function onErrorz(err) {
    console.log(`Error: ${err}`);
}

fetchData()
    .then(displayData)
    .catch(onErrorz);
////////////////////////////////////////////////////
function getData(){
    return new Promise(resolve=>{
        setTimeout(() => {
           resolve(46) 
        }, 1);
    })
}
// const result=getData();
// console.log(result)
async function start(){
    const result= await getData();
    console.log(result);
}
start()

async function startx(){
    const data=await fetch('http://api.weather.gov/gridpoints/OKX/35,35/forecast');
    const result=await data.json();
     console.log(result.properties.periods[5].shortForecast);
}
startx()

function nongetData(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
          //  reject('something went wrong!!')
          resolve('congratulation !!')
        }, 1 );
    })
}

function Successfully(result){
    console.log(`Success: ${result}`);
}

function Failure(result){
    console.log(`Error: ${result}`)
}

async function nonstart(){
    try{
        const result=await nongetData();
       Successfully(result);
    }catch(error){
        Failure();
    }
}
nongetData()
.then(nonstart)
.catch(Failure)
////////////////////////////////////////////////////////////////


//const url='http://worldtimeapi.org/api/timezone/America/New_York'
 async function getDataAPI(){
  const response=await fetch('http://worldtimeapi.org/api/timezone/America/New_York')
  //console.log(response)
  const data=await response.json();
  console.log(data)
 }
 //getDataAPI();
 const artistId = '2TpxZ7JUBn3uw46aR7qd6V';
const apiUrl = `https://api.spotify.com/v1/artists/${artistId}`;

async function getDataArtist() {
    // Check if localStorage is available, if not, use a polyfill
    if (typeof localStorage === 'undefined' || localStorage === null) {
        // Import the polyfill correctly
        const LocalStoragePolyfill = require('localstorage-polyfill');
        // Initialize the polyfill
        if (typeof window !== 'undefined') {
            window.localStorage = new LocalStoragePolyfill('./scratch');
        }
    }

    // Now you can use localStorage as usual
    const accessToken = localStorage.getItem('access_token');

    // Check if the access token is available
    if (!accessToken) {
        console.error('Access token is missing. Please provide a valid access token.');
        return;
    }

    const request = new Request(apiUrl, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });

    try {
        const response = await fetch(request);

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

getDataArtist();


// //spotify api
// async function getProfile(accessToken) {
//   // Check if accessToken is provided, otherwise use the one from localStorage
//   const token = accessToken || localStorage.getItem('access_token');

//   const response = await fetch('https://api.spotify.com/v1/me', {
//     headers: {
//       Authorization: 'Bearer ' + token
//     }
//   });

//   const data = await response.json();
//   console.log(data); // You can log or further process the retrieved data here
// }

// // Call the function with the provided accessToken or null to use the one from localStorage
// getProfile('your_actual_access_token');
//--------------------------------------------------------------------------------------------------------

// const urlID = '2TpxZ7JUBn3uw46aR7qd6V';
// const url = `https://api.spotify.com/v1/artists/${artistId}`;
// async function getDatanon(){
//     const request=new request(url,{
//         headers:{
//             'Authorization':''
//         }
//     })
// }