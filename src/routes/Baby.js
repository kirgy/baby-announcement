import React, { Component } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


export default class Baby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: null,
            stage: 0,
            stageOrder: [
                stageIntro(),
                stageLoading(),
                stageEgg(),
            ]
        };
    }

    tick() {
        const stageLength = (this.state.stageOrder.length -1);
        let nextStage = this.state.stage;
        if(this.state.stage < stageLength) {
            nextStage = nextStage+1;
            console.log(nextStage+"!!");
        }        
        this.setState(state => ({
          stage: nextStage
        }));
      }
    
      componentDidMount() {
        this.interval = setInterval(() => this.tick(), 3000);
      }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <NesContainer title="2014">
                    {this.state.stageOrder[this.state.stage]}
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

function stageIntro() {
    return (
        <p>
            ...and now...
        </p>    
    )
}

function stageLoading() {
    return (
        <progress class="nes-progress is-primary" value="80" max="100"></progress>
    )
}

function stageEgg() {
    return (
        <p>
            egg
        </p>    
    )
}