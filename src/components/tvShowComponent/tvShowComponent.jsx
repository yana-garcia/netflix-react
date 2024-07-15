import React, { Component, Fragment, useState } from "react";
import { Grid, Row, Column, Button } from 'carbon-components-react';

import TrailerVid from "./../../assets/trailer/tokyo-revengers-trailer.mp4";
import TrLogo from "./../../assets/tokyo-revengers-logo.png";

import CardComponent from "./../cardComponent/index";

// import MoviesData from './../../services/movieService.js';

import seriesAction from './../../services/series/seriesAction.js';
import seriesAdventure from './../../services/series/seriesAdventure.js';
import seriesChildren from './../../services/series/seriesChildren.js';
import seriesComedy from './../../services/series/seriesComedy.js';
import seriesDrama from './../../services/series/seriesDrama.js';
import seriesLife from './../../services/series/seriesLife.js';
import seriesMusic from './../../services/series/seriesMusic.js';
import seriesMystery from './../../services/series/seriesMystery.js';
import seriesRomance from './../../services/series/seriesRomance.js';
import seriesSciFi from './../../services/series/seriesSciFi.js';
import seriesSports from './../../services/series/seriesSports.js';

export default function TvShowComponent() {

    // const [item, setItem] = useState(MoviesData);
    // const menuItems = [...new Set(MoviesData.map((Val) => Val.category))];

    // const filterMovie = () => {
    //     const newItem = MoviesData.filter((newVal) => {
    //         return newVal.category === "movie";
    //     });
    //     let categoryItem;
    //     categoryItem(newItem);
    //     console.log("item | "+newItem);
    // };

    return(
        <>
            <div className="header-container">
                <video className="trailer-video" autoPlay="autoplay" muted controls loop >
                    <source src={TrailerVid} type="video/mp4"/>
                </video>

                <div className="header-info">
                    <Grid>
                        <Row>
                            <Column lg={6}>
                                <h1>
                                    <strong>
                                        TV Shows
                                    </strong>
                                </h1>

                                <br /><br /><br />

                                <img src={TrLogo} alt="header-logo" className="header-logo" />
                                <br /> <br />

                                <p>
                                    Hanagaki Takemichi lives an unsatisfying life right up until his 
                                    death. Waking up 12 years in the past, he reckons with the eventual 
                                    fate of his friends and tries to prevent an unfortunate future.
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
                                18+
                            </div>
                        </Column>
                    </Row>
                </div>
                
            </div>

            <Grid>

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
                            seriesAction.map((netflixData, index) => {
                                return(
                                    <Column key={netflixData._id} className="custom-card-padding" lg={3}>
                                    
                                                
                                        <div className="custom-card">
                                            <div className="custom-card-details">
                                                <div className="custom-card-thumbnail">
                                                    {/* <img src={netflixData.thumbnail} alt="thumbnail" className="thumbnail" /> */}
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
                            seriesAdventure.map((netflixData, index) => {
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
                            seriesChildren.map((netflixData, index) => {
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
                                        Comedies
                                    </strong>
                                </h4>
                            </div>
                        </Column>
                    </Row>

                    <br />

                    <Row>
                        
                        {
                            seriesComedy.map((netflixData, index) => {
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
                            seriesDrama.map((netflixData, index) => {
                                return(
                                    <Column key={netflixData._id} className="custom-card-padding" lg={3}>
                                    
                                                
                                        <div className="custom-card">
                                            <div className="custom-card-details">
                                                <div className="custom-card-thumbnail">
                                                    {/* <img src={netflixData.thumbnail} alt="thumbnail" className="thumbnail" /> */}
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
                            seriesMusic.map((netflixData, index) => {
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
                                        Mystery
                                    </strong>
                                </h4>
                            </div>
                        </Column>
                    </Row>

                    <br />

                    <Row>
                        
                        {
                            seriesMystery.map((netflixData, index) => {
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
                            seriesRomance.map((netflixData, index) => {
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
                            seriesSciFi.map((netflixData, index) => {
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
                            seriesSciFi.map((netflixData, index) => {
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
                                        Sports
                                    </strong>
                                </h4>
                            </div>
                        </Column>
                    </Row>

                    <br />

                    <Row>
                        
                        {
                            seriesSports.map((netflixData, index) => {
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








                        {/* {MoviesData.map((Val, id) => {
                            return (
                                <div key={id}>
                                    {Val}
                                </div>
                            )
                        })} */}

                        {
                            // MoviesData.filter((newVal) => {
                                // const movieCard = newVal.category === "movie";
                                //     console.log(movieCard.title);
                                // if (newVal.category === "movie") {
                                //     console.log("movie ito")
                                //     return (
                                //         <>
                                //         <div key={MoviesData._id}>
                                //         <h4>{MoviesData.title}</h4>

                                //         </div>
                                //         </>
                                //     )
                                // }

                            // })
                        }

                        {/* <Column>
                            <CardComponent item={item} />
                        </Column> */}
                        
                        {/* {
                            MoviesData.map((netflixData, index) => {
                                return(
                                    <Column key={netflixData._id} className="custom-card-padding" lg={3}>
                                       
                                                
                                        <div className="custom-card">
                                            <div className="custom-card-details">
                                                <div className="custom-card-thumbnail">
                                                    <img src={netflixData.thumbnail} alt="thumbnail" className="thumbnail" />
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
                    
                    
            </Grid>

        </>
    );
}