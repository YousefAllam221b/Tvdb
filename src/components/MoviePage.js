import React from 'react';
import OffCanvasPage from './OffCanvasPage.js';

class MoviePage extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
      };
      this._onButtonClick = this._onButtonClick.bind(this);
    }
    _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }
  canvasId = '#'+ this.props.movies.id;
  render() {
    function checkDate(movie)
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
        rate = <h6>{movie.vote_average}/10</h6>
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

        <div onClick={this._onButtonClick} className="d-flex rounded-3" type="button" data-bs-toggle="offcanvas" data-bs-target={"#offcanvasTop"+ checkId(this.props.movies)} aria-controls={"offcanvasTop"+ checkId(this.props.movies)}>
        {
        checkImg(this.props.movies)
        }
        <div className  = 'd-flex flex-column col-9'>
            {
              checkName(this.props.movies)
            }
            {
              checkDate(this.props.movies)
            }
          <div className = 'd-flex'>
            <i className="fa fa-star ratingStar"></i>
            {
              checkRating(this.props.movies)
            }
          </div>
        </div></div>

      <div className="offcanvas offcanvas-top container d-flex flex-column align-items-center" tabIndex="-1" id={"offcanvasTop"+ checkId(this.props.movies)} aria-labelledby="offcanvasTopLabel">



        {this.state.showComponent ?
           <OffCanvasPage movie = {this.props.movies} checkName = {checkName} checkId = {checkId} checkRating = {checkRating} checkDate = {checkDate}/> :
           null
        }






        </div>

      </div>

    )
  }

}
export default MoviePage;
