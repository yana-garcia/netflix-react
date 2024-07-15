import React, { Component, Fragment } from "react";
import { Grid, Row, Column, Button } from 'carbon-components-react';

import seriesAdventure from './../../services/series/seriesAdventure.js';

export default function MyListComponent() {
    return(
        <>
            <Grid>
            <div className="card-container">
                    <Row>
                        <Column className="custom-card-padding">
                            <div className="genre-card-holder">
                                <h1>
                                    <strong>
                                        My List
                                    </strong>
                                </h1>
                            </div>
                        </Column>
                    </Row>

                    <br /><br /><br />

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
            </Grid>
        </>
    );
}