import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Grid, Row, Column } from 'carbon-components-react';
import { ExpandableSearch } from '@carbon/react';

import HomeComponent from "./../homeComponent";
import MoviesComponent from "./../moviesComponent";
import MyListComponent from "./../myListComponent";
import TvShowComponent from "./../tvShowComponent";
import ErrorComponent from "./../errorComponent";

import NetflixLogo from "./../../assets/netflix-logo.png";

export default function NavigationComponent() {
    return (
        <>
            <Router>
                <div id="netflix-nav" className="navbar-container">
                    <Grid>
                        <Row>
                            <Column lg={2}>
                                <div className="title">
                                    <img src={NetflixLogo} className="netflix-logo" alt="netflix-logo" />
                                </div>
                            </Column>

                            <Column lg={7}>
                                <div className="navbar-link-holder">
                                    <Row>
                                        <Link to="/" className="navbar-link txt-white">
                                            Home
                                        </Link>

                                        <Link to="/tvshow" className="navbar-link txt-white">
                                            TV Shows
                                        </Link>

                                        <Link to="/movies" className="navbar-link txt-white">
                                            Movies
                                        </Link>

                                        <Link to="/mylist" className="navbar-link txt-white">
                                            My List
                                        </Link>
                                    </Row>
                                </div>
                            </Column>
                            
                            <Column lg={3}>
                                <ExpandableSearch
                                closeButtonLabelText="Clear search input"
                                id="navbar-search-input"
                                labelText="Search"
                                onChange={function noRefCheck(){}}
                                onKeyDown={function noRefCheck(){}}
                                size="lg"
                                placeholder="Titles, people, genres"
                                className="navbar-search txt-white"
                                />
                            </Column>
                        </Row>
                    </Grid>
                </div>

                <div className="custom-container">
                    <Routes>
                        <Route path="/" element={<HomeComponent/>} />
                        <Route path="/tvshow" element={<TvShowComponent/>} />
                        <Route path="/movies" element={<MoviesComponent/>} />
                        <Route path="/mylist" element={<MyListComponent/>} />
                        <Route path="*" element={<ErrorComponent/>} />
                    </Routes>
                </div>
                                
            </Router>
        </>
    );
}