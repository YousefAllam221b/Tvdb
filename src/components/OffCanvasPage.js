import React from 'react';




class OffCanvas extends React.Component {

  state = {info: [], allreadyDone: false, cast :[], castAllreadyDone: false}

  url = `https://api.themoviedb.org/3/${this.props.movie.media_type}/${this.props.movie.id}?api_key=e98409c238903704a47f9d04c21bf484&append_to_response=videos,images`;

  allInfo;
  f = fetch(this.url, {
    method: 'GET',
  }).then(response => {
    if(response.ok){return response.json();}
    throw new Error('Request failed!');},
   networkError => {}).then(jsonResponse => {

    this.allInfo = jsonResponse;
    return jsonResponse
  })


  castUrl = `https://api.themoviedb.org/3/${this.props.movie.media_type}/${this.props.movie.id}?api_key=e98409c238903704a47f9d04c21bf484&append_to_response=credits`;

  castInfo;
  g = fetch(this.castUrl, {
    method: 'GET',
  }).then(response => {
    if(response.ok){return response.json();}
    throw new Error('Request failed!');},
   networkError => {}).then(jsonResponse => {

    this.castInfo = jsonResponse;
    return jsonResponse
  });






  render() {


    const that = this;
    if(!this.state.allreadyDone)
    {
      var k = setInterval(
        function()
        {
          if(that.allInfo != undefined)
          {
            // console.log('states');
            // console.log(that.state);
            that.setState({info: that.allInfo, allreadyDone: true})
            // console.log(that.state);
            clearInterval(k)}
          }
          , 100);
    }

    if(!this.state.castAllreadyDone)
    {

      var k2 = setInterval(
        function()
        {

          if(that.castInfo != undefined)
          {

            // console.log('castInfo');
            // console.log(castInfo.credits);
        
            that.setState({cast: that.castInfo.credits.cast, castAllreadyDone: true})
            clearInterval(k2)}
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

    function getCast(movie)
    {

      }

    return (

      <div className="container d-flex rounded-3 flex-column overflow-auto">
        <div>
          <div className = ' d-flex flex-row justify-content-between align-items-center'>
          {this.props.checkName(this.props.movie)}
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

                    <div className = 'container d-flex overflow-auto'>
                      {this.state.cast.map( castMember =>
                        <div className = 'card col-2 col-sm-2 col-md-2 col-lg-2 align-items-center'>
                        <div className = 'card-body d-flex flex-column justify-content-between'>
                          <h6 className = 'm-3'>{castMember.name}</h6>
                          <img src = {"https://image.tmdb.org/t/p/original" + castMember.profile_path} className="card-img-top col-3 posters" />
                        </div>
                      </div>)
                      }
                    </div>



        </div>
      </div>
    )
  }

}
//{checkDuration(this.allInfo)}
export default OffCanvas;
