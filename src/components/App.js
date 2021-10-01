import React from 'react';
import Header from './Header';
import MovieCard from './MovieCard'
var xmlhttp = new XMLHttpRequest();
var url = "https://api.themoviedb.org/3/discover/movie?api_key=e98409c238903704a47f9d04c21bf484&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
var bestDrama2014Url = "https://api.themoviedb.org/3/discover/movie?api_key=e98409c238903704a47f9d04c21bf484&with_genres=18&primary_release_year=2014";

//
// var moviesList = $.ajax({
//     type: 'GET',
//     url: url,
//
//     dataType: 'json',
//
//     global: false,
//     async:false,
//     success: function(data) {
//         return data;
//     }
// }).responseText;
// moviesList = JSON.parse(moviesList);
//
//
// var bestDrama2014 = $.ajax({
//     type: 'GET',
//     url: bestDrama2014Url,
//     dataType: 'json',
//     global: false,
//     async:false,
//     success: function(data) {
//         return data;
//     }
// }).responseText;
// bestDrama2014 = JSON.parse(bestDrama2014);


//
//
//
// var searchButton = document.getElementById("search");
// var searchButtonValue = "";
//
// searchButton.addEventListener('input',
//           function(event)
//           {
//             searchButtonValue = event.target.value;
//
//             if(searchButton.value != "")
//             {
//                searchButton.classList.add("searchValue");
//                var newUrl = "https://api.themoviedb.org/3/search/multi?api_key=e98409c238903704a47f9d04c21bf484&language=en-US&query=" + searchButtonValue.replace(" ", "%") +"&page=1&include_adult=false";
//                var searchMovie = $.ajax({
//                    type: 'GET',
//                    url: newUrl,
//                    dataType: 'json',
//                    global: false,
//                    async:false,
//                    success: function(data) {
//                        return data;
//                    }
//                }).responseText;
//                searchMovie = JSON.parse(searchMovie);
//                console.log(searchMovie);
//             }
//             else if (searchButton.value == "")
//             {
//               searchButton.classList.remove("searchValue");
//             }
//
//           });
//




var firstList;
var bestDrama2014;
class App extends React.Component {

  state = {
    firstListAllreadyDone: false,
    bestDrama2014AllreadyDone: false,
    firstListInfo: [],
    bestDrama2014Info: []
  }
  firstList = 'no';
  f1 = fetch(url, {
    method: 'GET',
  }).then(response => {
    if(response.ok){return response.json();}
    throw new Error('Request failed!');},
   networkError => {}).then(jsonResponse => {

    firstList = jsonResponse;
    return jsonResponse
  })

  bestDrama2014 = 'no';
  f2 = fetch(bestDrama2014Url, {
    method: 'GET',
  }).then(response => {
    if(response.ok){return response.json();}
    throw new Error('Request failed!');},
   networkError => {}).then(jsonResponse => {

    bestDrama2014 = jsonResponse;
    return jsonResponse
  })




  render() {

    const that = this;
    if (!this.state.firstListAllreadyDone)
    {
      var k1 = setInterval(
        function()
        {
          if(firstList != undefined)
          {
            console.log('heyeyy');
            console.log(firstList);
            that.setState({firstListInfo: firstList, firstListAllreadyDone: true})
            clearInterval(k1)}
          }
          , 100);
    }

    if (!this.state.bestDrama2014AllreadyDone)
    {
      var k2 = setInterval(
        function()
        {
          if(bestDrama2014 != undefined)
          {
            console.log('heyeyy');
            console.log(bestDrama2014);
            that.setState({bestDrama2014Info: bestDrama2014, bestDrama2014AllreadyDone: true})
            clearInterval(k2)}
          }
          , 100);
    }

    function checkFirstList()
    {
      if(that.state.firstListAllreadyDone)
      {
        return that.state.firstListInfo.results.map( movie =>
        <div className = "card col-2 col-sm-2 col-md-2 col-lg-2 align-items-center">
          <MovieCard title = {movie.title} imgSrc = {movie.poster_path} overview = {movie.overview}></MovieCard>
        </div>

        )
      }
    }

    function checkBestDrame2014()
    {
      if(that.state.bestDrama2014AllreadyDone)
      {
        return that.state.bestDrama2014Info.results.map( movie =>
        <div className = "card col-2 col-sm-2 col-md-2 col-lg-2 align-items-center">
          <MovieCard title = {movie.title} imgSrc = {movie.poster_path} overview = {movie.overview}></MovieCard>
        </div>

        )
      }
    }


    return (
      <div className = "d-flex flex-column overflow-auto">
          <div className = "d-flex overflow-auto">
            <h3>First list</h3>
              {checkFirstList()}
          </div>
          <div className = "d-flex overflow-auto">
            <h3>Best Drama 2014</h3>
              {
                checkBestDrame2014()
              }
          </div>

      </div>
    );
  }
}

export default App;
