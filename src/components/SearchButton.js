import React from 'react';


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
       var searchMovie = $.ajax({
           type: 'GET',
           url: newUrl,
           dataType: 'json',
           global: false,
           async:false,
           success: function(data) {
               return data;
           }
       }).responseText;
       searchMovie = JSON.parse(searchMovie);
       searchInput.classList.add("searchWithInput");
       this.props.handleChange({results: searchMovie});
    }
    else
    {
      searchInput.classList.remove("searchWithInput");
      this.props.handleChange({results: []});
    }
  }

  render() {
    return (

      <div className="container h-25">
        <div className="d-flex justify-content-end h-100">
          <div className="searchbar">
            <input id = "search" className="search_input" type="text" name="" placeholder="Search..."
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
