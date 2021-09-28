import React from 'react';


class MoviePage extends React.Component {



  canvasId = '#'+ this.props.movies.id;
  render() {
    function checkProp(movie)
    {
      var date = '';;
      if (movie.first_air_date != undefined)
      {
        date = <h6>{movie.first_air_date.split('-')[0]}</h6>
      }
      else if (movie.release_date != undefined)
      {
        date = <h6>{movie.release_date.split('-')[0]}</h6>
      }
      return date;
    }

    function checkImg(movie)
    {

      var img = '';;

      if (movie.backdrop_path != undefined)
      {
        img = <img src = {"https://image.tmdb.org/t/p/original" + movie.backdrop_path} className="card-img-top col-3"></img>
      }
      else if (movie.poster_path != undefined)
      {
        img = <img src = {"https://image.tmdb.org/t/p/original" + movie.poster_path} className="card-img-top col-3"></img>
      }
      return img;
    }

    function checkName(movie)
    {
      var name = '';;

      if (movie.title != undefined)
      {
        name = <h5 className = ''>{movie.title}</h5>
      }
      else if (movie.original_name != undefined)
      {
        name = <h5 className = ''>{movie.original_name}</h5>
      }
      return name;
    }

    function checkRating(movie)
    {
      var rate = '';

      if (movie.vote_average != undefined)
      {
        rate = <h6>{movie.vote_average}</h6>
      }
      return rate;
    }

    function checkId(movie)
    {
      var canvasId = '';

      if (movie.id != undefined)
      {
        canvasId = movie.id
      }
      return canvasId;
    }






    return (


      <div className = 'd-flex mt-auto'>


        <div className="d-flex rounded-3" type="button" data-bs-toggle="offcanvas" data-bs-target={"#offcanvasTop"+ checkId(this.props.movies)} aria-controls={"offcanvasTop"+ checkId(this.props.movies)}>
        {
        checkImg(this.props.movies)
        }
        <div className  = 'd-flex flex-column col-9'>
            {
              checkName(this.props.movies)
            }
            {
              checkProp(this.props.movies)
            }
          <div className = 'd-flex'>
            <i className="fa fa-star ratingStar"></i>
            {
              checkRating(this.props.movies)
            }
          </div>
        </div></div>

      <div className="offcanvas offcanvas-top container d-flex flex-column align-items-center" tabIndex="-1" id={"offcanvasTop"+ checkId(this.props.movies)} aria-labelledby="offcanvasTopLabel">


          <div className = 'container-fluid me-auto d-flex flex-row justify-content-between align-items-center'>


            {checkName(this.props.movies)}
            <h2>{this.props.movies.id}</h2>


            <button id = 'close-button' type="button" className="btn-close text-reset me-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>

          </div>


        </div>

      </div>

    )
  }

}
export default MoviePage;
