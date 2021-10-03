import React from 'react';

var searchResults;
class SearchButton extends React.Component {
  searchInput = React.createRef();

  // onChange = event => {
  //       this.setState({ value: event.target.value});
  //       console.log(event.target.value);
  //   }
  handleValueChange = (e) =>
  {
    var changedvalue = e.target.value;
    var searchInput = document.getElementById("search");
    if(changedvalue != "")
    {
       var newUrl = "https://api.themoviedb.org/3/search/multi?api_key=e98409c238903704a47f9d04c21bf484&language=en-US&query=" + changedvalue.replace(" ", "%") +"&page=1&include_adult=false";
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



       searchResults = 'no';
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

       const that = this;

         var k = setInterval(
           function()
           {
             if(searchResults != undefined)
             {
               that.props.handleChange({results: searchResults});
               clearInterval(k)}
             }
             , 100);

    }
    else
    {
      searchInput.classList.remove("searchWithInput");
      this.props.handleChange({results: []});
    }
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
  render() {



    return (

      <div className="container h-25">
        <div className="d-flex justify-content-end h-100">
          <div className="searchbar">
            <input   id = "search" className="search_input" type="text" name="" placeholder="Search..."
              ref = {this.searchInput}
              onChange={this.handleValueChange}>
            </input>
            <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
          </div>
        </div>
      </div>

    )
  }

}
export default SearchButton;
