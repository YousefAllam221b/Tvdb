import React from 'react';


class MoviePage extends React.Component {

  <div className = "list-group-item list-group-item-action d-flex tester oneResult">
    <img src = {"https://image.tmdb.org/t/p/original" + movie.backdrop_path} className="card-img-top col-3"></img>
    <div className  = 'd-flex flex-column col-9'>
      <h5 className = ''>{movie.title}</h5>
      <h5 className = ''>{movie.original_name}</h5>
      {
        checkProp(movie)
      }
      <div className = 'd-flex'>
        <i className="fa fa-star ratingStar"></i>
        <h6>{movie.vote_average}</h6>
      </div>
    </div>
  </div>
  render() {
    return (
        <div>
          <div class = 'd-flex mt-auto'>
            <div class="list-group-item list-group-item-action d-flex tester oneResultbtn btn-primary ms-auto rounded-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop3" aria-controls="offcanvasTop3">
              <div className = "list-group-item list-group-item-action d-flex tester oneResult">
                <img src = {"https://image.tmdb.org/t/p/original" + movie.backdrop_path} className="card-img-top col-3"></img>
                <div className  = 'd-flex flex-column col-9'>
                  <h5 className = ''>{movie.title}</h5>
                  <h5 className = ''>{movie.original_name}</h5>
                  {
                    checkProp(movie)
                  }
                  <div className = 'd-flex'>
                    <i className="fa fa-star ratingStar"></i>
                    <h6>{movie.vote_average}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="offcanvas offcanvas-top container d-flex flex-column align-items-center" tabindex="-1" id="offcanvasTop3" aria-labelledby="offcanvasTopLabel3">

              <div class = 'container-fluid me-auto d-flex flex-row justify-content-end align-items-center'>

                <h1>{movie.title}</h1>
                <button id = 'close-button' type="button" class="btn-close text-reset me-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            </div>
            </div>
          </div>


        </div>
    )
  }

}
export default MoviePage;
