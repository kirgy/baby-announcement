import React, { Component } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import moment from "moment";


export default class Baby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: null,
            stageDuration: 0,
            stage: 0,
            tickLength: 200,
            stage: {
                intro : {
                    visible: true,
                    duration: 0
                },
                loading : {
                    visible: false,
                    duration: 0,
                    barPosition: 0,
                },
                egg : {
                    visible: false,
                    duration: 0
                }                                
            },
            dueInDays: null
        };
    }

    tick() {
        this.setState({
            stageDuration: this.state.stageDuration+(this.state.tickLength/1000)
        });
        this.renderStage();

    }

    renderStage() {
        this.setState({
            stage: {
                ...this.state.stage,
                intro : {
                    ...this.state.stage.intro,
                    visible: (this.state.stageDuration < 3) 
                },
                loading: {
                    ...this.state.stage.loading,
                    visible: (this.state.stageDuration >=3),// && this.state.stageDuration <=25),
                    barPosition: this.getBarPosition((this.state.stageDuration - 3), (15-3)),
                    textVisible: (this.state.stageDuration <= 15)
                },
                egg: {
                    ...this.state.stage.egg,
                    visible: (this.state.stageDuration > 15),
                }                
            }
        });
    }

    getBarPosition(start, end) {
        let totalProgress = ((start/ end) *100);

        let t = [
            {
                step: 10,
                duration: 10
            },
            {
                step: 20,
                duration: 20
            }            
        ];

        if(totalProgress < 10) {
            return totalProgress;
        }

        if(totalProgress >= 10 && totalProgress <= 15) {
            return 10;
        }

        if(totalProgress >15 && totalProgress <= 25) {
            return totalProgress -5;
        }

        if(totalProgress >25 && totalProgress <= 35) {
            return 20;
        }

        if(totalProgress >35 && totalProgress <= 55) {
            return (20) + ((totalProgress-35)*0.2);
        }        

        if(totalProgress >55 && totalProgress < 65) {
            return 24;
        }

        if(totalProgress >65 && totalProgress < 78) {
            return (24) + ((totalProgress-65)*-2);
        }

        if(totalProgress >= 78 && totalProgress <100) {
            let thisProgress = ((totalProgress - 78)/(100-78))*100;
            const duePercent = ((280-this.state.dueInDays)/280) *100;

            return duePercent * (thisProgress/100);
        }                

        if(totalProgress >= 100) {
            return ((280-this.state.dueInDays)/280) *100;
        }
    }    
    
    componentDidMount() {
        const endDate = moment("2020-11-22T00:00:00+0000")
        var duration = moment.duration(endDate.diff(new Date));
        var days = duration.asDays();
        this.setState({
            "dueInDays" : Math.floor(days)
        });

        this.interval = setInterval(() => this.tick(), this.state.tickLength);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <NesContainer title="2014">
                    {stageIntro(this.state.stage.intro)}
                    {stageLoading(this.state.stage.loading)}
                    {stageEgg(this.state.stage.egg, this.state.dueInDays)}
                </NesContainer>
                <Link to="/house">
                    <Button primary="true">
                        Next
                    </Button>
                </Link>
            </div>
        )
    }
}

function stageIntro(state) {
    if (!state.visible) {
        return;
    }

    return (
        <p>
            ...and now...
        </p>    
    )
}

function stageLoading(state) {
    if (!state.visible) {
        return;
    }    
    
    return (
        <div>
            <progress className="nes-progress is-primary" value={state.barPosition} max="100" style={{"transition" : "width 2s ease"}}></progress>
            {(state.textVisible) ? (<p>
                Loading...
            </p>) : ''}
        </div>
    )
}

function stageEgg(state, dueInDays) {
    if (!state.visible) {
        return;
    }

    return (
        <p>
            {dueInDays} days remaining...
        </p>    
    )
}