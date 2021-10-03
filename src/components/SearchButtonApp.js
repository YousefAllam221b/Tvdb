import React from 'react';
import SearchButton from './SearchButton';
import MovieCard from './MovieCard';

import MoviePage from './MoviePage';

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

    function checkEmptyResults(searchResults)
    {
      var res;
      if (searchResults != undefined)
      {
        searchResults = searchResults.slice(0,10);
        return searchResults.map( movie =>
          <div className = "list-group-item list-group-item-action d-flex tester oneResult">
            <MoviePage movies = {movie}/>
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
            <div  id = 'searchResultsDiv'  className = 'serachResults'>
              {checkEmptyResults(this.state.searchResults)}
            </div>
          </div>
        </div>
    );
  }
}

export default SearchButtonApp;
