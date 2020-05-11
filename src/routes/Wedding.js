import React, { Component, useEffect, useState, useRef } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../sass/App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Couple from "../images/Wedding/couple-wedding.gif";
import Confetti from "../images/Wedding/confetti.gif";
import DelayLink from 'react-delay-link';

export default class Wedding extends Component {
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
            }} className={"scene-wedding "+(this.state.showChars ? "pokeFadeIn" : "pokeFadeOut")}>
                <div style={{
                    position: "relative",
                }} className="">
                    <img src={Couple} className={"scene-base couple "+(this.state.stageReady ? "animate" : "")} />
                    <img src={Confetti} className={"scene-animatable confetti "+(this.state.stageReady ? "animate" : "")} />
                </div>
        
                <NesContainer title="2014" className={"text-caption caption "+(this.state.stageReady ? "animate" : "")}>
                    <p>
                        We met with friends and family, and said "I do"
                    </p>
                </NesContainer>
                <div style={{
                    "text-align": "right",
                    "padding-top": "1em"
                }}
                    className={"cta "+(this.state.stageReady ? "animate" : "")}
                >
                    <DelayLink delay={2000} to="/house" replace={false}>
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