import React, { Component, useEffect, useState, useRef } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../sass/App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Empty from "../images/Virus/empty.png";
import DelayLink from 'react-delay-link';

export default class Virus extends Component {
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
            }} className={"scene-virus "+(this.state.showChars ? "pokeFadeInLight" : "pokeFadeOut")}>
            
                    <img src={Empty} className={"scene-base couple "+(this.state.stageReady ? "animate" : "")} />

                <NesContainer title="March 2020" className={"text-caption caption "+(this.state.stageReady ? "animate" : "")}>
                    <p>
                        As the world locked themselves inside, 
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