import React, { Component, Fragment, useState } from "react";
import { Grid, Row, Column, Button } from "carbon-components-react";
import { ExpandableSearch } from "@carbon/react";

import TrailerVid from "./../../assets/trailer/words-bubble-up-like-soda-pop-trailer.mp4";
import SpyLogo from "./../../assets/words-bubble-up-like-soda-pop-logo.png";

import moviesData from "./../../services/movieService.js";

// import movieAction from './../../services/movie/movieAction.js';
// import movieAdventure from './../../services/movie/movieAdventure.js';
// import movieChildren from './../../services/movie/movieChildren.js';

// import movieComedy from './../../services/movie/movieComedy.js';

// import movieDrama from './../../services/movie/movieDrama.js';
// import movieLife from './../../services/movie/movieLife.js';
// import movieMusic from './../../services/movie/movieMusic.js';

// import movieMystery from './../../services/movie/movieMystery.js';

// import movieRomance from './../../services/movie/movieRomance.js';
// import movieSciFi from './../../services/movie/movieSciFi.js';

// import movieSports from './../../services/movie/movieSports.js';

export default function MoviesComponent() {
  // const [moviesData, setMoviesState] = React.useState(movies);

  // const [filter, setFilter] = useState('');
  // const searchText = (event) => {
  //     setFilter(event.target.value);
  // }

  // let dataSearch = MoviesData.filter(item => {
  //     return Object.keys(item).some(key =>
  //         item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
  //         )
  // });

  //   FINAL ~~~~~~
  //   const handleGenreFiltering = (selectedGenre) => {
  //     const allMovies = moviesData.filter((item) => item.category === "movie");

  //     const filteredMovieGenre = allMovies.filter((x) => {
  //       return x.genre.some((ng) => ng.genreName === {selectedGenre});
  //     });

  //     console.log(filteredMovieGenre);
  //     return filteredMovieGenre.map((itemName, index) => {
  //       return (
  //         <div key={itemName._id}>
  //           <h1>SAMPLE</h1>
  //           <h1>{itemName.title}</h1>
  //         </div>
  //       );
  //     });
  //   };

  const allMovies = moviesData.filter((item) => item.category === "movie");

// For Action
    const movieGenreAction = allMovies.filter((x) => {
        return x.genre.some((ng) => ng.name === "Action");
    });

// For Adventure
    const movieGenreAdventure = allMovies.filter((x) => {
        return x.genre.some((ng) => ng.name === "Adventure");
    });

// For Children & Family
    const movieGenreChildrenFamily = allMovies.filter((x) => {
        return x.genre.some((ng) => ng.name === "Children & Family");
    });

// For Comedies
    const movieGenreComedies = allMovies.filter((x) => {
        return x.genre.some((ng) => ng.name === "Comedies");
    });

// For Dramas
    const movieGenreDramas = allMovies.filter((x) => {
        return x.genre.some((ng) => ng.name === "Dramas");
    });

// For Music
    const movieGenreMusic = allMovies.filter((x) => {
        return x.genre.some((ng) => ng.name === "Music");
    });

// For Mystery
    const movieGenreMystery = allMovies.filter((x) => {
        return x.genre.some((ng) => ng.name === "Mystery");
    });

// For Romance
    const movieGenreRomance = allMovies.filter((x) => {
        return x.genre.some((ng) => ng.name === "Romance");
    });

// For Sci-Fi
    const movieGenreSciFi = allMovies.filter((x) => {
        return x.genre.some((ng) => ng.name === "Sci-Fi");
    });

// For Slice of Life
    const movieGenreSliceOfLife = allMovies.filter((x) => {
        return x.genre.some((ng) => ng.name === "Slice of Life");
    });

// For Sports
    const movieGenreSports = allMovies.filter((x) => {
        return x.genre.some((ng) => ng.name === "Sports");
    });



  return (
    <>
      {/* <div className="header-container">
                <video className="trailer-video" autoPlay="autoplay" muted controls loop >
                    <source src={TrailerVid} type="video/mp4"/>
                </video>

                <div className="header-info">
                    <Grid>
                        <Row>
                            <Column lg={6}>
                            <h1>
                                    <strong>
                                        Movies
                                    </strong>
                                </h1>

                                <br /><br /><br />

                                <img src={SpyLogo} alt="header-logo" className="header-logo" />
                                <br /> <br />

                                <p>
                                    After meeting one bright, sunny day, a shy boy who
                                    expresses himself through haiku and a bubbly but self-
                                    conscious girl share a brief, magical summer.
                                </p>
                                <Button type="button" className="btn-header btn-play">
                                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="30" height="30" viewBox="0 0 32 32" aria-hidden="true"><path d="M7,28a1,1,0,0,1-1-1V5a1,1,0,0,1,1.4819-.8763l20,11a1,1,0,0,1,0,1.7525l-20,11A1.0005,1.0005,0,0,1,7,28Z"></path></svg>
                                    <span className="btn-lbl"><strong>Play</strong></span>
                                </Button>
                                <Button className="btn-header btn-more-info">
                                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="30" height="30" viewBox="0 0 32 32" aria-hidden="true"><path d="M17 22L17 14 13 14 13 16 15 16 15 22 12 22 12 24 20 24 20 22 17 22zM16 8a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0016 8z"></path><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"></path></svg>
                                    <span className="btn-lbl"><strong>More Info</strong></span>
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
                </div>

                <div className="header-video-details">
                    <Row className="custom-no-margin">
                        <Column>
                            <button className="btn-header-toggle-mute">
                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="30" height="30" viewBox="0 0 32 32" aria-hidden="true"><path d="M31 12.41L29.59 11 26 14.59 22.41 11 21 12.41 24.59 16 21 19.59 22.41 21 26 17.41 29.59 21 31 19.59 27.41 16 31 12.41zM18 30a1 1 0 01-.71-.3L9.67 22H3a1 1 0 01-1-1H2V11a1 1 0 011-1H9.67l7.62-7.7a1 1 0 011.41 0A1 1 0 0119 3V29A1 1 0 0118 30zM4 20h6a1.17 1.17 0 01.79.3L17 26.57V5.43L10.79 11.7A1.17 1.17 0 0110 12H4z"></path>
                                </svg>
                            </button>
                        </Column>
                        <Column className="custom-no-padding">
                            <div className="header-rating">
                                7+
                            </div>
                        </Column>
                    </Row>
                </div>

            </div> */}

        <Grid>
            <Row>
                {movieGenreSliceOfLife.map((itemName, index) => {
                    return (
                        <Column key={itemName._id} className="custom-card-padding" lg={3}>
                                            
                                                        
                            <div className="custom-card">
                                <div className="custom-card-details">
                                    <div className="custom-card-thumbnail">
                                        <div className="thumbnail" style={{backgroundImage: `url(${itemName.thumbnail})`}}></div>
                                    </div>

                                    <div className="custom-card-content">
                                        <Row>
                                            <Column>
                                                <button className="btn-custom-card btn-custom-card-play">
                                                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M7,28a1,1,0,0,1-1-1V5a1,1,0,0,1,1.4819-.8763l20,11a1,1,0,0,1,0,1.7525l-20,11A1.0005,1.0005,0,0,1,7,28Z"></path>
                                                    </svg>
                                                </button>
                                                <button className="btn-custom-card btn-custom-card-secondary">
                                                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path>
                                                        <title>Add to My List</title>
                                                    </svg>
                                                </button>
                                                <button className="btn-custom-card btn-custom-card-secondary">
                                                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,12H20V6a3.0033,3.0033,0,0,0-3-3H14.8672a2.0094,2.0094,0,0,0-1.98,1.7173l-.8453,5.9165L8.4648,16H2V30H23a7.0078,7.0078,0,0,0,7-7V16A4.0045,4.0045,0,0,0,26,12ZM8,28H4V18H8Zm20-5a5.0057,5.0057,0,0,1-5,5H10V17.3027l3.9578-5.9365L14.8672,5H17a1.0008,1.0008,0,0,1,1,1v8h8a2.0025,2.0025,0,0,1,2,2Z"></path>
                                                        <title>I like this</title>
                                                    </svg>
                                                </button>
                                                <button className="btn-custom-card btn-custom-card-more">
                                                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path>
                                                        <title>More info</title>
                                                    </svg>
                                                </button>
                                            </Column>
                                        </Row>
                                        <br />
                                        
                                        <h4>{itemName.title}</h4>
                                        <p>
                                            <span className="content-year">{itemName.year}</span> &nbsp;&nbsp;
                                            <span className="content-rating">&nbsp; {itemName.rating} &nbsp;</span>
                                        </p>
                                        <p>
                                            <span className="content-episode">{itemName.episode}</span> &nbsp;|&nbsp;
                                            <span className="content-duration">{itemName.duration}</span>
                                        </p>
                                        <p>
                                            {itemName.genre.map(genreData => (
                                            <Fragment key={genreData._id}>
                                                {genreData.name} &nbsp;
                                            </Fragment>
                                            ))}
                                        </p>
                                    </div>

                                </div>
                            </div>
                            

                        </Column>
                    );
                })}
            </Row>
        </Grid>

      {/* 












       */}

      {/* <Grid>

                <div className="card-container">
                    <Row>
                        <Column className="custom-card-padding">
                            <div className="genre-card-holder">
                                <h4 className="genre-title">
                                    <strong>
                                        Action
                                    </strong>
                                </h4>
                            </div>
                        </Column>
                    </Row>

                    <br />

                    <Row>
                        
                        {
                            movieAction.map((netflixData, index) => {
                                return(
                                    <Column key={netflixData._id} className="custom-card-padding" lg={3}>
                                    
                                                
                                        <div className="custom-card">
                                            <div className="custom-card-details">
                                                <div className="custom-card-thumbnail">
                                                    <div className="thumbnail" style={{backgroundImage: `url(${netflixData.thumbnail})`}}></div>
                                                </div>

                                                <div className="custom-card-content">
                                                    <Row>
                                                        <Column>
                                                            <button className="btn-custom-card btn-custom-card-play">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M7,28a1,1,0,0,1-1-1V5a1,1,0,0,1,1.4819-.8763l20,11a1,1,0,0,1,0,1.7525l-20,11A1.0005,1.0005,0,0,1,7,28Z"></path>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path>
                                                                    <title>Add to My List</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,12H20V6a3.0033,3.0033,0,0,0-3-3H14.8672a2.0094,2.0094,0,0,0-1.98,1.7173l-.8453,5.9165L8.4648,16H2V30H23a7.0078,7.0078,0,0,0,7-7V16A4.0045,4.0045,0,0,0,26,12ZM8,28H4V18H8Zm20-5a5.0057,5.0057,0,0,1-5,5H10V17.3027l3.9578-5.9365L14.8672,5H17a1.0008,1.0008,0,0,1,1,1v8h8a2.0025,2.0025,0,0,1,2,2Z"></path>
                                                                    <title>I like this</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-more">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path>
                                                                    <title>More info</title>
                                                                </svg>
                                                            </button>
                                                        </Column>
                                                    </Row>
                                                    <br />
                                                    
                                                    <h4>{netflixData.title}</h4>
                                                    <p>
                                                        <span className="content-year">{netflixData.year}</span> &nbsp;&nbsp;
                                                        <span className="content-rating">&nbsp; {netflixData.rating} &nbsp;</span>
                                                    </p>
                                                    <p>
                                                        <span className="content-episode">{netflixData.episode}</span> &nbsp;|&nbsp;
                                                        <span className="content-duration">{netflixData.duration}</span>
                                                    </p>
                                                    <p>
                                                        {netflixData.genre.map(genreData => (
                                                        <Fragment key={genreData._id}>
                                                            {genreData.name} &nbsp;
                                                        </Fragment>
                                                        ))}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        

                                    </Column>
                                )
                            })
                        }

                    </Row>
                </div>


                <div className="card-container">
                    <Row>
                        <Column className="custom-card-padding">
                            <div className="genre-card-holder">
                                <h4 className="genre-title">
                                    <strong>
                                        Adventure
                                    </strong>
                                </h4>
                            </div>
                        </Column>
                    </Row>

                    <br />

                    <Row>
                        
                        {
                            movieAdventure.map((netflixData, index) => {
                                return(
                                    <Column key={netflixData._id} className="custom-card-padding" lg={3}>
                                    
                                                
                                        <div className="custom-card">
                                            <div className="custom-card-details">
                                                <div className="custom-card-thumbnail">
                                                    <div className="thumbnail" style={{backgroundImage: `url(${netflixData.thumbnail})`}}></div>
                                                </div>

                                                <div className="custom-card-content">
                                                    <Row>
                                                        <Column>
                                                            <button className="btn-custom-card btn-custom-card-play">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M7,28a1,1,0,0,1-1-1V5a1,1,0,0,1,1.4819-.8763l20,11a1,1,0,0,1,0,1.7525l-20,11A1.0005,1.0005,0,0,1,7,28Z"></path>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path>
                                                                    <title>Add to My List</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,12H20V6a3.0033,3.0033,0,0,0-3-3H14.8672a2.0094,2.0094,0,0,0-1.98,1.7173l-.8453,5.9165L8.4648,16H2V30H23a7.0078,7.0078,0,0,0,7-7V16A4.0045,4.0045,0,0,0,26,12ZM8,28H4V18H8Zm20-5a5.0057,5.0057,0,0,1-5,5H10V17.3027l3.9578-5.9365L14.8672,5H17a1.0008,1.0008,0,0,1,1,1v8h8a2.0025,2.0025,0,0,1,2,2Z"></path>
                                                                    <title>I like this</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-more">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path>
                                                                    <title>More info</title>
                                                                </svg>
                                                            </button>
                                                        </Column>
                                                    </Row>
                                                    <br />
                                                    
                                                    <h4>{netflixData.title}</h4>
                                                    <p>
                                                        <span className="content-year">{netflixData.year}</span> &nbsp;&nbsp;
                                                        <span className="content-rating">&nbsp; {netflixData.rating} &nbsp;</span>
                                                    </p>
                                                    <p>
                                                        <span className="content-episode">{netflixData.episode}</span> &nbsp;|&nbsp;
                                                        <span className="content-duration">{netflixData.duration}</span>
                                                    </p>
                                                    <p>
                                                        {netflixData.genre.map(genreData => (
                                                        <Fragment key={genreData._id}>
                                                            {genreData.name} &nbsp;
                                                        </Fragment>
                                                        ))}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        

                                    </Column>
                                )
                            })
                        }

                    </Row>
                </div>


                <div className="card-container">
                    <Row>
                        <Column className="custom-card-padding">
                            <div className="genre-card-holder">
                                <h4 className="genre-title">
                                    <strong>
                                        Children &#38; Family
                                    </strong>
                                </h4>
                            </div>
                        </Column>
                    </Row>

                    <br />

                    <Row>
                        
                        {
                            movieChildren.map((netflixData, index) => {
                                return(
                                    <Column key={netflixData._id} className="custom-card-padding" lg={3}>
                                    
                                                
                                        <div className="custom-card">
                                            <div className="custom-card-details">
                                                <div className="custom-card-thumbnail">
                                                    <div className="thumbnail" style={{backgroundImage: `url(${netflixData.thumbnail})`}}></div>
                                                </div>

                                                <div className="custom-card-content">
                                                    <Row>
                                                        <Column>
                                                            <button className="btn-custom-card btn-custom-card-play">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M7,28a1,1,0,0,1-1-1V5a1,1,0,0,1,1.4819-.8763l20,11a1,1,0,0,1,0,1.7525l-20,11A1.0005,1.0005,0,0,1,7,28Z"></path>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path>
                                                                    <title>Add to My List</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,12H20V6a3.0033,3.0033,0,0,0-3-3H14.8672a2.0094,2.0094,0,0,0-1.98,1.7173l-.8453,5.9165L8.4648,16H2V30H23a7.0078,7.0078,0,0,0,7-7V16A4.0045,4.0045,0,0,0,26,12ZM8,28H4V18H8Zm20-5a5.0057,5.0057,0,0,1-5,5H10V17.3027l3.9578-5.9365L14.8672,5H17a1.0008,1.0008,0,0,1,1,1v8h8a2.0025,2.0025,0,0,1,2,2Z"></path>
                                                                    <title>I like this</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-more">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path>
                                                                    <title>More info</title>
                                                                </svg>
                                                            </button>
                                                        </Column>
                                                    </Row>
                                                    <br />
                                                    
                                                    <h4>{netflixData.title}</h4>
                                                    <p>
                                                        <span className="content-year">{netflixData.year}</span> &nbsp;&nbsp;
                                                        <span className="content-rating">&nbsp; {netflixData.rating} &nbsp;</span>
                                                    </p>
                                                    <p>
                                                        <span className="content-episode">{netflixData.episode}</span> &nbsp;|&nbsp;
                                                        <span className="content-duration">{netflixData.duration}</span>
                                                    </p>
                                                    <p>
                                                        {netflixData.genre.map(genreData => (
                                                        <Fragment key={genreData._id}>
                                                            {genreData.name} &nbsp;
                                                        </Fragment>
                                                        ))}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        

                                    </Column>
                                )
                            })
                        }

                    </Row>
                </div>


                <div className="card-container">
                    <Row>
                        <Column className="custom-card-padding">
                            <div className="genre-card-holder">
                                <h4 className="genre-title">
                                    <strong>
                                        Dramas
                                    </strong>
                                </h4>
                            </div>
                        </Column>
                    </Row>

                    <br />

                    <Row>
                        
                        {
                            movieDrama.map((netflixData, index) => {
                                return(
                                    <Column key={netflixData._id} className="custom-card-padding" lg={3}>
                                    
                                                
                                        <div className="custom-card">
                                            <div className="custom-card-details">
                                                <div className="custom-card-thumbnail">
                                                    <div className="thumbnail" style={{backgroundImage: `url(${netflixData.thumbnail})`}}></div>
                                                </div>

                                                <div className="custom-card-content">
                                                    <Row>
                                                        <Column>
                                                            <button className="btn-custom-card btn-custom-card-play">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M7,28a1,1,0,0,1-1-1V5a1,1,0,0,1,1.4819-.8763l20,11a1,1,0,0,1,0,1.7525l-20,11A1.0005,1.0005,0,0,1,7,28Z"></path>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path>
                                                                    <title>Add to My List</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,12H20V6a3.0033,3.0033,0,0,0-3-3H14.8672a2.0094,2.0094,0,0,0-1.98,1.7173l-.8453,5.9165L8.4648,16H2V30H23a7.0078,7.0078,0,0,0,7-7V16A4.0045,4.0045,0,0,0,26,12ZM8,28H4V18H8Zm20-5a5.0057,5.0057,0,0,1-5,5H10V17.3027l3.9578-5.9365L14.8672,5H17a1.0008,1.0008,0,0,1,1,1v8h8a2.0025,2.0025,0,0,1,2,2Z"></path>
                                                                    <title>I like this</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-more">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path>
                                                                    <title>More info</title>
                                                                </svg>
                                                            </button>
                                                        </Column>
                                                    </Row>
                                                    <br />
                                                    
                                                    <h4>{netflixData.title}</h4>
                                                    <p>
                                                        <span className="content-year">{netflixData.year}</span> &nbsp;&nbsp;
                                                        <span className="content-rating">&nbsp; {netflixData.rating} &nbsp;</span>
                                                    </p>
                                                    <p>
                                                        <span className="content-episode">{netflixData.episode}</span> &nbsp;|&nbsp;
                                                        <span className="content-duration">{netflixData.duration}</span>
                                                    </p>
                                                    <p>
                                                        {netflixData.genre.map(genreData => (
                                                        <Fragment key={genreData._id}>
                                                            {genreData.name} &nbsp;
                                                        </Fragment>
                                                        ))}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        

                                    </Column>
                                )
                            })
                        }

                    </Row>
                </div>


                <div className="card-container">
                    <Row>
                        <Column className="custom-card-padding">
                            <div className="genre-card-holder">
                                <h4 className="genre-title">
                                    <strong>
                                        Music
                                    </strong>
                                </h4>
                            </div>
                        </Column>
                    </Row>

                    <br />

                    <Row>
                        
                        {
                            movieMusic.map((netflixData, index) => {
                                return(
                                    <Column key={netflixData._id} className="custom-card-padding" lg={3}>
                                    
                                                
                                        <div className="custom-card">
                                            <div className="custom-card-details">
                                                <div className="custom-card-thumbnail">
                                                    <div className="thumbnail" style={{backgroundImage: `url(${netflixData.thumbnail})`}}></div>
                                                </div>

                                                <div className="custom-card-content">
                                                    <Row>
                                                        <Column>
                                                            <button className="btn-custom-card btn-custom-card-play">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M7,28a1,1,0,0,1-1-1V5a1,1,0,0,1,1.4819-.8763l20,11a1,1,0,0,1,0,1.7525l-20,11A1.0005,1.0005,0,0,1,7,28Z"></path>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path>
                                                                    <title>Add to My List</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,12H20V6a3.0033,3.0033,0,0,0-3-3H14.8672a2.0094,2.0094,0,0,0-1.98,1.7173l-.8453,5.9165L8.4648,16H2V30H23a7.0078,7.0078,0,0,0,7-7V16A4.0045,4.0045,0,0,0,26,12ZM8,28H4V18H8Zm20-5a5.0057,5.0057,0,0,1-5,5H10V17.3027l3.9578-5.9365L14.8672,5H17a1.0008,1.0008,0,0,1,1,1v8h8a2.0025,2.0025,0,0,1,2,2Z"></path>
                                                                    <title>I like this</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-more">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path>
                                                                    <title>More info</title>
                                                                </svg>
                                                            </button>
                                                        </Column>
                                                    </Row>
                                                    <br />
                                                    
                                                    <h4>{netflixData.title}</h4>
                                                    <p>
                                                        <span className="content-year">{netflixData.year}</span> &nbsp;&nbsp;
                                                        <span className="content-rating">&nbsp; {netflixData.rating} &nbsp;</span>
                                                    </p>
                                                    <p>
                                                        <span className="content-episode">{netflixData.episode}</span> &nbsp;|&nbsp;
                                                        <span className="content-duration">{netflixData.duration}</span>
                                                    </p>
                                                    <p>
                                                        {netflixData.genre.map(genreData => (
                                                        <Fragment key={genreData._id}>
                                                            {genreData.name} &nbsp;
                                                        </Fragment>
                                                        ))}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        

                                    </Column>
                                )
                            })
                        }

                    </Row>
                </div>


                <div className="card-container">
                    <Row>
                        <Column className="custom-card-padding">
                            <div className="genre-card-holder">
                                <h4 className="genre-title">
                                    <strong>
                                        Romance
                                    </strong>
                                </h4>
                            </div>
                        </Column>
                    </Row>

                    <br />

                    <Row>
                        
                        {
                            movieRomance.map((netflixData, index) => {
                                return(
                                    <Column key={netflixData._id} className="custom-card-padding" lg={3}>
                                    
                                                
                                        <div className="custom-card">
                                            <div className="custom-card-details">
                                                <div className="custom-card-thumbnail">
                                                    <div className="thumbnail" style={{backgroundImage: `url(${netflixData.thumbnail})`}}></div>
                                                </div>

                                                <div className="custom-card-content">
                                                    <Row>
                                                        <Column>
                                                            <button className="btn-custom-card btn-custom-card-play">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M7,28a1,1,0,0,1-1-1V5a1,1,0,0,1,1.4819-.8763l20,11a1,1,0,0,1,0,1.7525l-20,11A1.0005,1.0005,0,0,1,7,28Z"></path>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path>
                                                                    <title>Add to My List</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,12H20V6a3.0033,3.0033,0,0,0-3-3H14.8672a2.0094,2.0094,0,0,0-1.98,1.7173l-.8453,5.9165L8.4648,16H2V30H23a7.0078,7.0078,0,0,0,7-7V16A4.0045,4.0045,0,0,0,26,12ZM8,28H4V18H8Zm20-5a5.0057,5.0057,0,0,1-5,5H10V17.3027l3.9578-5.9365L14.8672,5H17a1.0008,1.0008,0,0,1,1,1v8h8a2.0025,2.0025,0,0,1,2,2Z"></path>
                                                                    <title>I like this</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-more">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path>
                                                                    <title>More info</title>
                                                                </svg>
                                                            </button>
                                                        </Column>
                                                    </Row>
                                                    <br />
                                                    
                                                    <h4>{netflixData.title}</h4>
                                                    <p>
                                                        <span className="content-year">{netflixData.year}</span> &nbsp;&nbsp;
                                                        <span className="content-rating">&nbsp; {netflixData.rating} &nbsp;</span>
                                                    </p>
                                                    <p>
                                                        <span className="content-episode">{netflixData.episode}</span> &nbsp;|&nbsp;
                                                        <span className="content-duration">{netflixData.duration}</span>
                                                    </p>
                                                    <p>
                                                        {netflixData.genre.map(genreData => (
                                                        <Fragment key={genreData._id}>
                                                            {genreData.name} &nbsp;
                                                        </Fragment>
                                                        ))}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        

                                    </Column>
                                )
                            })
                        }

                    </Row>
                </div>


                <div className="card-container">
                    <Row>
                        <Column className="custom-card-padding">
                            <div className="genre-card-holder">
                                <h4 className="genre-title">
                                    <strong>
                                        Sci-Fi
                                    </strong>
                                </h4>
                            </div>
                        </Column>
                    </Row>

                    <br />

                    <Row>
                        
                        {
                            movieSciFi.map((netflixData, index) => {
                                return(
                                    <Column key={netflixData._id} className="custom-card-padding" lg={3}>
                                    
                                                
                                        <div className="custom-card">
                                            <div className="custom-card-details">
                                                <div className="custom-card-thumbnail">
                                                    <div className="thumbnail" style={{backgroundImage: `url(${netflixData.thumbnail})`}}></div>
                                                </div>

                                                <div className="custom-card-content">
                                                    <Row>
                                                        <Column>
                                                            <button className="btn-custom-card btn-custom-card-play">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M7,28a1,1,0,0,1-1-1V5a1,1,0,0,1,1.4819-.8763l20,11a1,1,0,0,1,0,1.7525l-20,11A1.0005,1.0005,0,0,1,7,28Z"></path>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path>
                                                                    <title>Add to My List</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,12H20V6a3.0033,3.0033,0,0,0-3-3H14.8672a2.0094,2.0094,0,0,0-1.98,1.7173l-.8453,5.9165L8.4648,16H2V30H23a7.0078,7.0078,0,0,0,7-7V16A4.0045,4.0045,0,0,0,26,12ZM8,28H4V18H8Zm20-5a5.0057,5.0057,0,0,1-5,5H10V17.3027l3.9578-5.9365L14.8672,5H17a1.0008,1.0008,0,0,1,1,1v8h8a2.0025,2.0025,0,0,1,2,2Z"></path>
                                                                    <title>I like this</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-more">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path>
                                                                    <title>More info</title>
                                                                </svg>
                                                            </button>
                                                        </Column>
                                                    </Row>
                                                    <br />
                                                    
                                                    <h4>{netflixData.title}</h4>
                                                    <p>
                                                        <span className="content-year">{netflixData.year}</span> &nbsp;&nbsp;
                                                        <span className="content-rating">&nbsp; {netflixData.rating} &nbsp;</span>
                                                    </p>
                                                    <p>
                                                        <span className="content-episode">{netflixData.episode}</span> &nbsp;|&nbsp;
                                                        <span className="content-duration">{netflixData.duration}</span>
                                                    </p>
                                                    <p>
                                                        {netflixData.genre.map(genreData => (
                                                        <Fragment key={genreData._id}>
                                                            {genreData.name} &nbsp;
                                                        </Fragment>
                                                        ))}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        

                                    </Column>
                                )
                            })
                        }

                    </Row>
                </div>


                <div className="card-container">
                    <Row>
                        <Column className="custom-card-padding">
                            <div className="genre-card-holder">
                                <h4 className="genre-title">
                                    <strong>
                                        Slice of Life
                                    </strong>
                                </h4>
                            </div>
                        </Column>
                    </Row>

                    <br />

                    <Row>
                        
                        {
                            movieSciFi.map((netflixData, index) => {
                                return(
                                    <Column key={netflixData._id} className="custom-card-padding" lg={3}>
                                    
                                                
                                        <div className="custom-card">
                                            <div className="custom-card-details">
                                                <div className="custom-card-thumbnail">
                                                    <div className="thumbnail" style={{backgroundImage: `url(${netflixData.thumbnail})`}}></div>
                                                </div>

                                                <div className="custom-card-content">
                                                    <Row>
                                                        <Column>
                                                            <button className="btn-custom-card btn-custom-card-play">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M7,28a1,1,0,0,1-1-1V5a1,1,0,0,1,1.4819-.8763l20,11a1,1,0,0,1,0,1.7525l-20,11A1.0005,1.0005,0,0,1,7,28Z"></path>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path>
                                                                    <title>Add to My List</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-secondary">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,12H20V6a3.0033,3.0033,0,0,0-3-3H14.8672a2.0094,2.0094,0,0,0-1.98,1.7173l-.8453,5.9165L8.4648,16H2V30H23a7.0078,7.0078,0,0,0,7-7V16A4.0045,4.0045,0,0,0,26,12ZM8,28H4V18H8Zm20-5a5.0057,5.0057,0,0,1-5,5H10V17.3027l3.9578-5.9365L14.8672,5H17a1.0008,1.0008,0,0,1,1,1v8h8a2.0025,2.0025,0,0,1,2,2Z"></path>
                                                                    <title>I like this</title>
                                                                </svg>
                                                            </button>
                                                            <button className="btn-custom-card btn-custom-card-more">
                                                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path>
                                                                    <title>More info</title>
                                                                </svg>
                                                            </button>
                                                        </Column>
                                                    </Row>
                                                    <br />
                                                    
                                                    <h4>{netflixData.title}</h4>
                                                    <p>
                                                        <span className="content-year">{netflixData.year}</span> &nbsp;&nbsp;
                                                        <span className="content-rating">&nbsp; {netflixData.rating} &nbsp;</span>
                                                    </p>
                                                    <p>
                                                        <span className="content-episode">{netflixData.episode}</span> &nbsp;|&nbsp;
                                                        <span className="content-duration">{netflixData.duration}</span>
                                                    </p>
                                                    <p>
                                                        {netflixData.genre.map(genreData => (
                                                        <Fragment key={genreData._id}>
                                                            {genreData.name} &nbsp;
                                                        </Fragment>
                                                        ))}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        

                                    </Column>
                                )
                            })
                        }

                    </Row>
                </div>
            
                
            </Grid> */}

      {/* <Grid>
                <Row>
                    <Column> */}
      {/* <input 
                        type="text" 
                        placeholder="SEARCH"
                        value={filter}
                        onChange={searchText.bind(this)} /> */}
      {/* </Column>
                </Row>
                        
                <div className="card-container">
                    <Row> */}

      {/* {
                            MoviesData.filter(category => category.includes('movie')).map(filteredData => (
                                {filteredData}
                            ))

                        } */}

      {/* {
                            dataSearch.map((netflixData, index) => {
                                return(
                                    <Column key={netflixData._id} className="custom-card-padding" lg={3}>
                                       
                                                
                                        <div className="custom-card">
                                            <div className="custom-card-details">
                                                <div className="custom-card-thumbnail">
                                                    <div className="thumbnail" style={{backgroundImage: `url(${netflixData.thumbnail})`}}></div>
                                                </div>

                                                <div className="custom-card-content">
                                                    
                                                    <h4>{netflixData.title}</h4>
                                                    <p>
                                                        <span className="content-year">{netflixData.year}</span> &nbsp;&nbsp;
                                                        <span className="content-rating">&nbsp; {netflixData.rating} &nbsp;</span>
                                                    </p>
                                                    <p>
                                                        <span className="content-episode">{netflixData.episode}</span> &nbsp;|&nbsp;
                                                        <span className="content-duration">{netflixData.duration}</span>
                                                    </p>
                                                    <p>
                                                        {netflixData.genre.map(genreData => (
                                                        <Fragment key={genreData._id}>
                                                            {genreData.name} &nbsp;
                                                        </Fragment>
                                                        ))}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        

                                    </Column>
                                )
                            })
                        } */}

      {/* {moviesData && moviesData.map(({_id, title, year, thumbnail, rating, duration, episode, genre}) => (
                            <Column key={_id} className="custom-card-padding" lg={3}>
                                <div className="custom-card">
                                    <div className="custom-card-details">
                                        <div className="custom-card-thumbnail">
                                            <img src={thumbnail} alt="thumbnail" className="thumbnail" />
                                        </div>

                                        <div className="custom-card-content">
                                            <h4>{title}</h4>
                                            <p>
                                                <span className="content-year">{year}</span> &nbsp;&nbsp;
                                                <span className="content-rating">&nbsp; {rating} &nbsp;</span>
                                            </p>
                                            <p>
                                                <span className="content-episode">{episode}</span> &nbsp;|&nbsp;
                                                <span className="content-duration">{duration}</span>
                                            </p>
                                            <p>
                                                {genre.map((name, _id) => (
                                                <Fragment key={_id}>
                                                    {name.name} &nbsp;
                                                </Fragment>
                                                ))}
                                            </p>
                                        </div>

                                    </div>

                                    
                                </div>
                            </Column>
                        ))} */}

      {/* </Row>
                </div>
            </Grid> */}
    </>
  );
}
