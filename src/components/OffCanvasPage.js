import React from 'react';


class OffCanvas extends React.Component {



  url = `https://api.themoviedb.org/3/${this.props.movie.media_type}/${this.props.movie.id}?api_key=e98409c238903704a47f9d04c21bf484`;

  allInfo = $.ajax({
      type: 'GET',
      url: this.url,
      data: this.url.request_token,
      dataType: 'json',

      global: false,
      async:false,
      success: function(data) {
          return data;
      }
  }).responseText;
  allInfo = JSON.parse(this.allInfo);


  render() {

    function checkPoster(movie)
    {
      var img = '';
      if (movie.poster_path != undefined)
      {
        img = <img src = {"https://image.tmdb.org/t/p/original" + movie.poster_path} className="card-img-top col-3"></img>
      }
      return img;
    }

    function checkGenres(movie)
    {
      if (movie.genres != undefined)
      {
        return movie.genres.map( genre =>
          <span className="badge rounded-pill bg-secondary">{genre.name}</span>
        )
      }
    }
    function checkOverview(movie)
    {
      if (movie.overview != undefined)
      {
        return <p>{movie.overview}</p>
      }
    }
    function checkVoteCount(movie)
    {
      if (movie.vote_count != undefined)
      {
        return <p>{movie.vote_count}</p>
      }
    }
    function checkDuration(movie)
    {
      if (movie.episode_run_time != undefined)
      {
        return <p>{movie.episode_run_time} min</p>
      }
    }
    function checkEndDate(movie)
    {
      if (movie.last_air_date != undefined)
      {
        return <p>{movie.last_air_date}</p>
      }
    }


    console.log(this.allInfo);
    return (
            <div className="d-flex rounded-3">

              <h1>HEY</h1>
              {checkDuration(this.allInfo)}
              <p>{this.props.movie.media_type}</p>
              {
                checkPoster(this.allInfo)
              }
              <div>
                {
                  checkGenres(this.allInfo)
                }
              </div>
              {checkOverview(this.allInfo)}
              <div className ='d-flex flex-column'>
                <div className ='d-flex'>
                  {this.props.checkRating(this.allInfo)}
                  <i className="fa fa-star ratingStar"></i>
                </div>
                {checkVoteCount(this.allInfo)}
              </div>

            </div>
    )
  }

}
export default OffCanvas;
