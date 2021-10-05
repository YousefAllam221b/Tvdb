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
  canvasId = '#'+ this.props.movie.id;
  render() {
    function checkDate(movie)
    {
      var date = '';;
      if (movie.first_air_date != undefined)
      {
        date = <h6 className = 'forSearch'>{movie.first_air_date.split('-')[0]}</h6>
      }
      else if (movie.release_date != undefined)
      {
        date = <h6 className = 'forSearch'>{movie.release_date.split('-')[0]}</h6>
      }
      return date;
    }

    function checkImg(movie)
    {

      var img = '';;

      if (movie.backdrop_path != undefined)
      {
        img = <img src = {"https://image.tmdb.org/t/p/original" + movie.backdrop_path} className="card-img-top col-3 forSearch"></img>
      }
      else if (movie.poster_path != undefined)
      {
        img = <img src = {"https://image.tmdb.org/t/p/original" + movie.poster_path} className="card-img-top col-3 forSearch"></img>
      }
      return img;
    }

    function checkName(movie)
    {
      var name = '';;

      if (movie.title != undefined)
      {
        name = <h5 className = 'forSearch'>{movie.title}</h5>
      }
      else if (movie.original_name != undefined)
      {
        name = <h5 className = 'forSearch'>{movie.original_name}</h5>
      }
      return name;
    }

    function checkRating(movie)
    {
      var rate = '';

      if (movie.vote_average != undefined)
      {
        rate = <h6 className = 'forSearch'>{movie.vote_average}/10</h6>
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
    function nameId(movie)
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
    return (

      <div className = 'd-flex mt-auto forSearch'>

        <div onClick={this._onButtonClick} className="d-flex rounded-3 forSearch" type="button" data-bs-toggle="offcanvas" data-bs-target={"#offcanvasTop"+ checkId(this.props.movie)} aria-controls={"offcanvasTop"+ checkId(this.props.movie)}>
          {
          checkImg(this.props.movie)
          }
          <div className  = 'd-flex flex-column col-9 forSearch'>
              {
                checkName(this.props.movie)
              }
              {
                checkDate(this.props.movie)
              }
            <div className = 'd-flex forSearch'>
              <i className="fa fa-star ratingStar forSearch"></i>
              {
                checkRating(this.props.movie)
              }
            </div>
          </div>
        </div>

        <div className="offcanvas offcanvas-top container d-flex flex-column align-items-center forSearch" tabIndex="-1" id={"offcanvasTop"+ checkId(this.props.movie)} aria-labelledby="offcanvasTopLabel">

           <OffCanvasPage key = {nameId(this.props.movie) + ' OffCanvas'} movie = {this.props.movie} checkName = {checkName} checkId = {checkId} checkRating = {checkRating} checkDate = {checkDate} />

        </div>

      </div>

    )
  }

}
export default MoviePage;
