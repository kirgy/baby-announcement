import React, { Component } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../sass/App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import DelayLink from 'react-delay-link';
import Couple from "../images/Now/couple.png";
import moment from "moment";

export default class Now extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showChars: false,
            stageReady: false,
            dueInDays: 0,
            progressBarDone: false,
            progressBarWidthSet: false
        };
    }

    componentDidMount() {
        const endDate = moment("2020-11-22T00:00:00+0000")
        var duration = moment.duration(endDate.diff(new Date));
        var days = duration.asDays();

        this.setState({
            showChars: true,
            dueInDays: Math.floor(days)
        });
        this.setStageReady();
    }    

    setStageReady() {
        let context = this;
        setTimeout(() => {
            context.setState({
                stageReady: true
            });
        }, 3000);
        setTimeout(() => {
            context.setState({
                progressBarDone: true
            });
        }, 16000);        
        setTimeout(() => {
            context.setState({
                progressBarWidthSet: true
            });
        }, 17000);                
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
            }} className={"scene-now "+(this.state.showChars ? "pokeFadeIn" : "pokeFadeOut")}>
                <div style={{
                    position: "relative",
                }} className="">
                    <img src={Couple} className={"scene-base couple "+(this.state.stageReady ? "animate" : "")} />
                    <div className={"progress-bar-container rest-top "+(this.state.stageReady ? "animate" : "")} >
                        <p className={"loading-title "+(this.state.stageReady ? "animate" : "")} >
                            Loading...<span className={"days-remaining  "+(this.state.stageReady ? "animate" : "")} >{this.state.dueInDays} days remaining</span>
                        </p>
                        <div className={"progress-bar "+(this.state.stageReady ? "animate" : "")} >
                            {(!this.state.progressBarDone) 
                                ? (<div className="progress-meter" />)
                                : <div className="progress-meter-final" style={{
                                    width: (this.state.progressBarWidthSet) ? (((280-this.state.dueInDays)/280) *100)+"%" : "0%",
                                }}/>
                            }
                        </div>
                    </div>
                </div>

                <NesContainer title="November 2020" className={"text-caption caption "+(this.state.stageReady ? "animate" : "")}>
                    <p>
                        We're excited to announce baby McKirgan, hatching November 2020
                    </p>
                </NesContainer>
                <div style={{
                    "text-align": "right",
                    "padding-top": "1em"
                }}
                    className={"cta "+(this.state.stageReady ? "animate" : "")}
                >
                    <div className="button-wrapper float-right">
                        <DelayLink delay={2000} to="/" replace={false}>
                            <Button primary="true" style={{
                                "margin-right":  "left"
                            }} onClick={() => this.navAction(this)}>
                                Replay
                            </Button>
                        </DelayLink>
                    </div>
                    <div className="button-wrapper float-right">
                        <DelayLink delay={2000} to="/" replace={false} className="float-right">
                            <Button primary="true" style={{
                                "margin-right":  "left"
                            }} onClick={() => this.navAction(this)}>
                                Share
                            </Button>
                        </DelayLink>
                    </div>
                </div>                
            </div>
        );
      }
}