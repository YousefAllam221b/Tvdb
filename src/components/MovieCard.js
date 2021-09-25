import React from 'react';


class MovieCard extends React.Component {



  render() {
    return (

          <div className = "card-body d-flex flex-column justify-content-between">

              <img src = {"https://image.tmdb.org/t/p/original" + this.props.imgSrc} className="card-img-top"></img>
              <h5 className="card-title">{this.props.title}</h5>

          </div>

    )
  }

}
export default MovieCard;
