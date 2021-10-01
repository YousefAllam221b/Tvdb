import React from 'react';

var allInfo = 2;
class OffCanvas extends React.Component {

  state = {info: [], allreadyDone: false}

  url = `https://api.themoviedb.org/3/${this.props.movie.media_type}/${this.props.movie.id}?api_key=e98409c238903704a47f9d04c21bf484&append_to_response=videos,images`;



  allInfo = 'no';
  f = fetch(this.url, {
    method: 'GET',
  }).then(response => {
    if(response.ok){return response.json();}
    throw new Error('Request failed!');},
   networkError => {}).then(jsonResponse => {

    allInfo = jsonResponse;
    return jsonResponse
  })



  render() {
    const that = this;
    if (!this.state.allreadyDone)
    {
      var k = setInterval(
        function()
        {
          if(allInfo != undefined)
          {
            that.setState({info: allInfo, allreadyDone: true})
            clearInterval(k)}
          }
          , 100);
    }


    function checkPoster(movie)
    {
      var img = '';
      if (movie.poster_path != undefined)
      {
        img = <img src = {"https://image.tmdb.org/t/p/original" + movie.poster_path} className="card-img-top col-3 posters"></img>
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
        return <h6>{movie.vote_count}</h6>
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
    function checkMediaType(movie)
    {
      var type = movie.media_type;
      if (type != undefined)
      {
        if (type == 'tv')
          return <p>{movie.media_type}-Series</p>
        else
          return <p>{movie.media_type}</p>
      }
    }


    return (

      <div className="d-flex rounded-3 flex-column">
        <div>
          <div className = ' d-flex flex-row justify-content-between align-items-center'>
          {this.props.checkName(this.state.info)}
          <button id = 'close-button' type="button" className="btn-close text-reset me-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          {checkMediaType(this.props.movie)}
          <div className = 'd-flex flex-column'>
            {checkPoster(this.state.info)}
            <div className = 'd-flex flex-column'>
              {checkOverview(this.state.info)}
              <div>{checkGenres(this.state.info)}</div>
              {/*Rate*/}
              <div className ='d-flex justify-content-center'>
                <i className="fa fa-star ratingStar"></i>
                <div className = 'd-flex flex-column '>
                {this.props.checkRating(this.state.info)}
                {checkVoteCount(this.state.info)}
              </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    )
  }

}
//{checkDuration(this.allInfo)}
export default OffCanvas;
