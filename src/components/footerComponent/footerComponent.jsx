import React, { Component } from "react";
import { Grid, Row, Column, Button } from 'carbon-components-react';

export default function FooterComponent() {
    return(
        <>
            <Grid>
                <div className="custom-footer">

                    <Row>
                        <Column>
                            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="35" height="35" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.67,4H5.33A1.34,1.34,0,0,0,4,5.33V26.67A1.34,1.34,0,0,0,5.33,28H16.82V18.72H13.7V15.09h3.12V12.42c0-3.1,1.89-4.79,4.67-4.79.93,0,1.86,0,2.79.14V11H22.37c-1.51,0-1.8.72-1.8,1.77v2.31h3.6l-.47,3.63H20.57V28h6.1A1.34,1.34,0,0,0,28,26.67V5.33A1.34,1.34,0,0,0,26.67,4Z"></path></svg>
                            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="35" height="35" viewBox="0 0 32 32" aria-hidden="true"><circle cx="22.406" cy="9.594" r="1.44"></circle><path d="M16,9.8378A6.1622,6.1622,0,1,0,22.1622,16,6.1622,6.1622,0,0,0,16,9.8378ZM16,20a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z"></path><path d="M16,6.1622c3.2041,0,3.5837.0122,4.849.07a6.6418,6.6418,0,0,1,2.2283.4132,3.9748,3.9748,0,0,1,2.2774,2.2774,6.6418,6.6418,0,0,1,.4132,2.2283c.0577,1.2653.07,1.6449.07,4.849s-.0122,3.5837-.07,4.849a6.6418,6.6418,0,0,1-.4132,2.2283,3.9748,3.9748,0,0,1-2.2774,2.2774,6.6418,6.6418,0,0,1-2.2283.4132c-1.2652.0577-1.6446.07-4.849.07s-3.5838-.0122-4.849-.07a6.6418,6.6418,0,0,1-2.2283-.4132,3.9748,3.9748,0,0,1-2.2774-2.2774,6.6418,6.6418,0,0,1-.4132-2.2283c-.0577-1.2653-.07-1.6449-.07-4.849s.0122-3.5837.07-4.849a6.6418,6.6418,0,0,1,.4132-2.2283A3.9748,3.9748,0,0,1,8.9227,6.6453a6.6418,6.6418,0,0,1,2.2283-.4132c1.2653-.0577,1.6449-.07,4.849-.07M16,4c-3.259,0-3.6677.0138-4.9476.0722A8.8068,8.8068,0,0,0,8.14,4.63,6.1363,6.1363,0,0,0,4.63,8.14a8.8068,8.8068,0,0,0-.5578,2.9129C4.0138,12.3323,4,12.741,4,16s.0138,3.6677.0722,4.9476A8.8074,8.8074,0,0,0,4.63,23.8605a6.1363,6.1363,0,0,0,3.51,3.51,8.8068,8.8068,0,0,0,2.9129.5578C12.3323,27.9862,12.741,28,16,28s3.6677-.0138,4.9476-.0722a8.8074,8.8074,0,0,0,2.9129-.5578,6.1363,6.1363,0,0,0,3.51-3.51,8.8074,8.8074,0,0,0,.5578-2.9129C27.9862,19.6677,28,19.259,28,16s-.0138-3.6677-.0722-4.9476A8.8068,8.8068,0,0,0,27.37,8.14a6.1363,6.1363,0,0,0-3.51-3.5095,8.8074,8.8074,0,0,0-2.9129-.5578C19.6677,4.0138,19.259,4,16,4Z"></path></svg>
                            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="35" height="35" viewBox="0 0 32 32" aria-hidden="true"><path d="M11.92,24.94A12.76,12.76,0,0,0,24.76,12.1c0-.2,0-.39,0-.59A9.4,9.4,0,0,0,27,9.18a9.31,9.31,0,0,1-2.59.71,4.56,4.56,0,0,0,2-2.5,8.89,8.89,0,0,1-2.86,1.1,4.52,4.52,0,0,0-7.7,4.11,12.79,12.79,0,0,1-9.3-4.71,4.51,4.51,0,0,0,1.4,6,4.47,4.47,0,0,1-2-.56v.05A4.53,4.53,0,0,0,9.5,17.83a4.53,4.53,0,0,1-2,.08A4.51,4.51,0,0,0,11.68,21,9.05,9.05,0,0,1,6.07,23,9.77,9.77,0,0,1,5,22.91a12.77,12.77,0,0,0,6.92,2"></path></svg>
                            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="35" height="35" viewBox="0 0 32 32" aria-hidden="true"><path d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z"></path></svg>
                        </Column>
                    </Row>

                    <br /><br />

                    <Row>
                        <Column lg={3}>
                            <a href="">
                                Audio and Subtitles
                            </a>
                        </Column>
                        <Column lg={3}>
                            <a href="">
                                Audio Description
                            </a>
                        </Column>
                        <Column lg={3}>
                            <a href="">
                                Help Center
                            </a>
                        </Column>
                        <Column lg={3}>
                            <a href="">
                                Gift Cards
                            </a>
                        </Column>
                    </Row>

                    <br />

                    <Row>
                        <Column lg={3}>
                            <a href="">
                                Media Center
                            </a>
                        </Column>
                        <Column lg={3}>
                            <a href="">
                                Investor Relations
                            </a>
                        </Column>
                        <Column lg={3}>
                            <a href="">
                                Jobs
                            </a>
                        </Column>
                        <Column lg={3}>
                            <a href="">
                                Terms of Use
                            </a>
                        </Column>
                    </Row>

                    <br />

                    <Row>
                        <Column lg={3}>
                            <a href="">
                                Privacy
                            </a>
                        </Column>
                        <Column lg={3}>
                            <a href="">
                                Legal Notices
                            </a>
                        </Column>
                        <Column lg={3}>
                            <a href="">
                                Cookie Preferences
                            </a>
                        </Column>
                        <Column lg={3}>
                            <a href="">
                                Corporate Information
                            </a>
                        </Column>
                    </Row>

                    <br />

                    <Row>
                        <Column lg={3}>
                            <a href="">
                                Contact Us
                            </a>
                        </Column>
                    </Row>

                    <br /><br /><br />

                    <Row>
                        <Column>
                            <span className="service-code">
                                Service Code
                            </span>

                            <br /><br /><br />
                            
                            <p className="copyright">
                                &#169; 1997-2022 Netflix,Inc.
                            </p>
                        </Column>
                    </Row>

                </div>
            </Grid>
        </>
    )
}