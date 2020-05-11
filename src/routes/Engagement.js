import React, { Component } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../sass/App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import DelayLink from 'react-delay-link';
import Couple from "../images/Engagement/couple-engagement.gif";
import ExclamationBubble from "../images/Engagement/exclamation-bubble.png";

export default class Engagement extends Component {
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
            }} className={"scene-engagement "+(this.state.showChars ? "pokeFadeIn" : "pokeFadeOut")}>
                <div style={{
                    position: "relative",
                }} className="">
                    <img src={Couple} className={"scene-base couple "+(this.state.stageReady ? "animate" : "")} />
                    <img src={ExclamationBubble} className={"scene-animatable exclamation-bubble "+(this.state.stageReady ? "animate" : "")} />
                </div>

                <NesContainer title="2012" className={"text-caption caption "+(this.state.stageReady ? "animate" : "")}>
                    <p>
                        After 4 years we decided we we're the humans we wanted to spend our lives with.
                    </p>
                </NesContainer>
                <div style={{
                    "text-align": "right",
                    "padding-top": "1em"
                }}
                    className={"cta "+(this.state.stageReady ? "animate" : "")}
                >
                    <DelayLink delay={2000} to="/wedding" replace={false}>
                        <Button primary="true" style={{
                            "margin-right":  "right"
                        }} onClick={() => this.navAction(this)}>
                            Next
                        </Button>
                    </DelayLink>
                </div>                
            </div>
        );
      }
}