import React from 'react';
import SearchButton from './SearchButton';
import MovieCard from './MovieCard';
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



// <div className = "d-flex overflow-auto">
//
//     {this.state.searchResults.map( movie =>
//       <div className = "card col-2 col-sm-2 col-md-2 col-lg-2 align-items-center">
//         <MovieCard title = {movie.title} imgSrc = {movie.poster_path} overview = {movie.overview}></MovieCard>
//       </div>
//     )}
// </div>


class SearchButtonApp extends React.Component {

  state = {
    searchResults: []
  }

  handleValueChange = (results) => {
    console.log(results.results.results);
    if (results != [])
    {
      this.setState({searchResults: results.results.results});
    }
    else {
      this.setState({searchResults: []})
    }
    }

  render() {
    // var x = document.getElementById("searchButton");
    // if (x.value != "")
    // {
    //    x.classList.add("searchValue");
    // }
    // else
    // {
    //    x.classList.add("searchValue");
    // }
    function checkProp(movie)
    {
      var date;
      if (movie.first_air_date != undefined)
      {
        date = <h6>{movie.first_air_date.split('-')[0]}</h6>
      }
      else if (movie.release_date != undefined)
      {
        date = <h6>{movie.release_date.split('-')[0]}</h6>
      }
      else
      {
        date = '';
      }
      return date;
    }

    function checkEmptyResults(searchResults)
    {
      var res;

      if (searchResults != undefined)
      {
        searchResults = searchResults.slice(0,10);
        return searchResults.map( movie =>
          <div className = "list-group-item list-group-item-action d-flex tester oneResult">
            <img src = {"https://image.tmdb.org/t/p/original" + movie.backdrop_path} className="card-img-top col-3"></img>
            <div className  = 'd-flex flex-column col-9'>
              <h5 className = ''>{movie.title}</h5>
              <h5 className = ''>{movie.original_name}</h5>
              {
                checkProp(movie)
              }
              <div className = 'd-flex'>
                <i className="fa fa-star ratingStar"></i>
                <h6>{movie.vote_average}</h6>
              </div>
            </div>
          </div>
        )
      }
      else {
        res = '';
      }
      return res;
    }

    return (
        <div className = ''>
          <div className = 'd-flex flex-column'>
            <SearchButton handleChange = {this.handleValueChange}/>
            <div className = 'serachResults'>
              {checkEmptyResults(this.state.searchResults)}
            </div>
          </div>
        </div>
    );
  }
}

export default SearchButtonApp;
