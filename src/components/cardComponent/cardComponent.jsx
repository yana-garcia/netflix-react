import React, { Component, Fragment } from "react";
import { Grid, Row, Column, Button } from 'carbon-components-react';

import movies from './../../services/movieService.js';

const CardComponent = ({item}) => {
    // const [moviesData, setMoviesState] = React.useState(movies);
    return (
        <>

            <div className="card-container">
                <Row>
                    
                    {
                        item.map((Val) => {
                            return(
                                <Column key={Val._id} className="custom-card-padding" lg={3}>
                                    
                                            
                                    <div className="custom-card">
                                        <div className="custom-card-details">
                                            <div className="custom-card-thumbnail">
                                                <img src={Val.thumbnail} alt="thumbnail" className="thumbnail" />
                                            </div>

                                            <div className="custom-card-content">
                                                
                                                <h4>{Val.title}</h4>
                                                <p>
                                                    <span className="content-year">{Val.year}</span> &nbsp;&nbsp;
                                                    <span className="content-rating">&nbsp; {Val.rating} &nbsp;</span>
                                                </p>
                                                <p>
                                                    <span className="content-episode">{Val.episode}</span> &nbsp;|&nbsp;
                                                    <span className="content-duration">{Val.duration}</span>
                                                </p>
                                                <p>
                                                    {Val.genre.map(genreData => (
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



            {/* <div className="custom-card">
                {moviesData && moviesData.map(({_id, title, year, thumbnail, genre}) => (
                    <div key={_id}>
                        <h6>{title}</h6>
                        <p>{year}</p>
                        <p>
                            {genre.map((name, _id) => (
                               <Fragment key={_id}>
                                   {name.name} &nbsp;
                               </Fragment>
                            ))}
                        </p>
                        <img src={thumbnail} alt="thumbnail" className="thumbnail" />
                        <br/><br/>
                    </div>

                ))}

            </div> */}
        </>
    );
}

export default CardComponent;