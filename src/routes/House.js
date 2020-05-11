import React, { Component, useEffect, useState, useRef } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../sass/App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import DelayLink from 'react-delay-link';
import Couple from "../images/House/couple-house.gif";
import Chimney from "../images/House/chimney-overlay.png";
import HouseOverlay from "../images/House/house-overlay.png";
import Dot from "../images/House/dot.png";

export default class House extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showChars: false,
            stageReady: false
        };
    }

    componentDidMount() {
        this.setState({showChars:true});
        this.setStageReady();
    }

    setStageReady() {
        let context = this;
        setTimeout(() => {
            context.setState({
                stageReady: true
            });
        }, 2000);
    }    
    
    navAction(context) {
        context.setState({
            showChars: false
        });
    }

    render() {
        return (
            <div style={{
                padding: "2em"
            }} className={"scene-house "+(this.state.showChars ? "pokeFadeIn" : "pokeFadeOut")}>
                <div style={{
                    position: "relative",
                }}>
                    <img src={Couple} className={"scene-base couple "+(this.state.stageReady ? "animate" : "")} />
                    <img src={Chimney} className={"scene-animatable chimney "+(this.state.stageReady ? "animate" : "")} />
                    <img src={HouseOverlay} className={"scene-animatable house-overlay "+(this.state.stageReady ? "animate" : "")} />
                </div>

                <NesContainer title="2018" className={"text-caption caption "+(this.state.stageReady ? "animate" : "")}>
                    <p>
                        After a lot of hard work we bought our very own house to make our home...<span className={"further-text "+(this.state.stageReady ? "animate" : "")}>it's a fixer-upper.</span>
                    </p>
                </NesContainer>
                <div style={{
                    "text-align": "right",
                    "padding-top": "1em"
                }}
                    className={"cta "+(this.state.stageReady ? "animate" : "")}
                >
                    <DelayLink delay={2000} to="/now" replace={false}>
                        <Button primary="true" style={{
                            "margin-right":  "right"
                        }} onClick={() => this.navAction(this)}>
                            Next
                        </Button>
                    </DelayLink>
                </div>     
            </div>
        )
    }

}