import React, { Component } from "react";
import { Grid, Row, Column, Button } from 'carbon-components-react';

export default function ErrorComponent() {
    return(
        <>
            <Grid>
                <Row>
                    <Column>
                        <div class="error-page">
                            {/* <h1>Oops! We can't find this page.</h1> */}
                            <h1>Lost your way?</h1>
                            <br /><br />
                            <p>Sorry, we can't find that  page. You'll find lots to explore on the home page.</p>
                        </div>
                    </Column>
                </Row>
            </Grid>
            
        </>
    );
}