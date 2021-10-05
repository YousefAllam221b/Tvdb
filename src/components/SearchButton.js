import React from 'react';
import MoviePage from './MoviePage';
var searchResults;
var changedvalue;
class SearchButton extends React.Component {
  state = {
    results: []
  }

  searchInput = React.createRef();

  // onChange = event => {
  //       this.setState({ value: event.target.value});
  //       console.log(event.target.value);
  //   }

  // var searchMovie = $.ajax({
  //     type: 'GET',
  //     url: newUrl,
  //     dataType: 'json',
  //     global: false,
  //     async:false,
  //     success: function(data) {
  //         return data;
  //     }
  // }).responseText;
  // searchMovie = JSON.parse(searchMovie);
  // searchInput.classList.add("searchWithInput");
  // this.props.handleChange({results: searchMovie});

  handleValueChange = (e) =>
  {
    const that = this;
    setTimeout(function()
    {

      if (changedvalue != e.target.value)
      {
        changedvalue = e.target.value;
        var searchInput = document.getElementById("search");
        if (changedvalue != "" && changedvalue.replace(/\s/g, '').length)
        {
          console.log('hey');
          that.state.results = [];
           var newUrl = "https://api.themoviedb.org/3/search/multi?api_key=e98409c238903704a47f9d04c21bf484&language=en-US&query=" + changedvalue.replace(" ", "%") +"&page=1&include_adult=false";



           searchResults;
           var f = fetch(newUrl, {
             method: 'GET',
           }).then(response => {
             if(response.ok){return response.json();}
             throw new Error('Request failed!');},
            networkError => {}).then(jsonResponse => {

             searchResults = jsonResponse;
             return jsonResponse
           });
           searchInput.classList.add("searchWithInput");

           // $("#search").on('click',
           // function(e)
           // {
           //   searchInput.classList.add('searchWithInput');
           //   if(document.getElementById('searchResultsDiv') != undefined)
           //   {
           //     document.getElementById('searchResultsDiv').style.display = 'block'
           //   }
           // })
           //
           // $("#searchDiv").blur(
           //   function()
           //   {
           //
           //     if(document.getElementById('searchResultsDiv') != undefined)
           //     {
           //       document.getElementById('searchResultsDiv').style.display = 'none';
           //     }
           //     if (document.getElementById('search').value != '')
           //     {
           //       searchInput.classList.add('searchWithInput');
           //     }
           //     else
           //     {
           //       if(searchInput.classList.contains('searchWithInput'))
           //       {
           //         searchInput.classList.remove('searchWithInput');
           //       }
           //     }
           //   });

           document.onclick = function(e){
                if (document.getElementById('search').value != '')
                {
                  searchInput.classList.add('searchWithInput');
                }
                else
                {
                  if(searchInput.classList.contains('searchWithInput'))
                  {
                    searchInput.classList.remove('searchWithInput');
                  }
                }

                 if (e.target.classList.contains('forSearch'))
                 {
                   searchInput.classList.add("searchWithInput");
                   document.getElementById('searchResultsDiv').style.display = 'block';
                 }
                 else
                 {
                   if(document.getElementById('searchResultsDiv') != undefined)
                   {
                     document.getElementById('searchResultsDiv').style.display = 'none';
                   }
                 }
           };



             var k = setInterval(
               function()
               {
                 if(searchResults != undefined)
                 {
                   that.setState({results: searchResults});
                   clearInterval(k)}
                 }
                 , 100);
        }
        else
        {
          if (document.getElementById('searchResultsDiv') != undefined)
          {
            document.getElementById('searchResultsDiv').innerHTML = '';
          }
        }

      }
    }, 1000);

  }
    // outOfFocus()
    // {
    //   var d = document.getElementById('searchResultsDiv');
    //   console.log(d);
    //   if(d != null)
    //     d.style.display = 'none';
    // }
    // onFocus()
    // {
    //
    //   var d = document.getElementById('searchResultsDiv');
    //   console.log(d);
    //   if(d != null)
    //     d.style.display = 'block';
    // }

    nameId(movie)
    {
      var name = '';;

      if (movie.title != undefined)
      {
        name = movie.title
      }
      else if (movie.original_name != undefined)
      {
        name = movie.original_name
      }
      return name + ' ' + movie.id;
    }
    checkEmptyResults(searchResults)
    {
      var res;

      if (searchResults != undefined && searchResults != [])
      {
        searchResults = searchResults.slice(0,10);
        return searchResults.map( movie =>
          <div className = "forSearch list-group-item list-group-item-action d-flex tester oneResult">
            <MoviePage key = { this.nameId(movie) + ' MoviePage'} movie = {movie}/>
          </div>
        )
      }
      else {
        res = '';
      }
      return res;
    }
  render() {

    return (

      <div className="container h-25 forSearch">
        <div className="d-flex justify-content-end h-100 forSearch">
          <div className="searchbar forSearch">
            <input id = "search" className="search_input forSearch" type="text" name="" placeholder="Search..."
              ref = {this.searchInput}
              onChange={this.handleValueChange}>
            </input>
            <a href="#" className="search_icon forSearch"><i className="fas fa-search"></i></a>
          </div>
        </div>
        <div  id = 'searchResultsDiv'  className = 'serachResults forSearch'>
          {this.checkEmptyResults(this.state.results.results)}
        </div>
      </div>

    )
  }

}


export default SearchButton;
