import React, { Component } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../sass/App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group'
import DelayLink from 'react-delay-link';
import Couple from "../images/Meet/couple-meet.gif";
import Spark from "../images/Meet/spark.png";
import Monitor from "../images/Meet/monitor-heart.png";

export default class Meet extends Component {
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
            }} className={"scene-meet "+(this.state.showChars ? "pokeFadeIn" : "pokeFadeOut")}>
                <div style={{
                    position: "relative",
                }} className="">
                    <img src={Couple} className={"scene-base couple "+(this.state.stageReady ? "animate" : "")} />
                    <img src={Spark} className={"scene-animatable spark "+(this.state.stageReady ? "animate" : "")} />
                    <img src={Monitor} className={"scene-animatable monitor "+(this.state.stageReady ? "animate" : "")} />
                </div>

                <NesContainer title="2008" className={"text-caption caption "+(this.state.stageReady ? "animate" : "")}>
                    <p>
                        It all started when we met online. It took 6 months before we got the courage to meet up in person. #swipingRight
                    </p>
                </NesContainer>
                <div style={{
                    "text-align": "right",
                    "padding-top": "1em"
                }}
                    className={"cta "+(this.state.stageReady ? "animate" : "")}
                >
                    <DelayLink delay={2000} to="/engagement" replace={false}>
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