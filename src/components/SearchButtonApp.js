import React from 'react';
import SearchButton from './SearchButton';
import MovieCard from './MovieCard';

import MoviePage from './MoviePage';

class SearchButtonApp extends React.Component {

  // state = {
  //   searchResults: []
  // }
  //
  // handleValueChange = (results) => {
  //   console.log(results.results.results);
  //   if (results != [])
  //   {
  //     this.setState({searchResults: results.results.results});
  //   }
  //   else {
  //     this.setState({searchResults: []})
  //   }
  //   }

  render() {



    return (

          <div id = 'searchDiv' className = 'd-flex flex-column forSearch'>
            <SearchButton key = 'searchBarKey' handleChange = {this.handleValueChange}/>
          </div>

    );
  }
}

export default SearchButtonApp;
