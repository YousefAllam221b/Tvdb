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






class SearchButtonApp extends React.Component {

  state = {
    searchResults: []
  }

  handleValueChange = (results) => {
    console.log(results.results.results);
    this.setState({searchResults: results.results.results});
    }

  render() {
    return (
        <div>
          <SearchButton handleChange = {this.handleValueChange}/>
          <div className = "d-flex overflow-auto">
            <h3>Search Results</h3>
              {this.state.searchResults.map( movie =>
                <div className = "card col-2 col-sm-2 col-md-2 col-lg-2 align-items-center">
                  <MovieCard title = {movie.title} imgSrc = {movie.poster_path} overview = {movie.overview}></MovieCard>
                </div>
              )}
          </div>
        </div>
    );
  }
}

export default SearchButtonApp;
