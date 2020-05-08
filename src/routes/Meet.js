import React, { Component } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group'
import DelayLink from 'react-delay-link';
import Chris from "../components/Chris";
import Lucy from "../components/Lucy";

export default class Meet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showChars: false,
            fadeOut: false
        };
    }

    componentDidMount() {
        this.setState({showChars:true})
    }
    
    navAction() {
        this.setState({
            fadeOut: true
        });
    }
    

    render() {
        return (
          <div>
            <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
                {(this.state.showChars === true)
                    ? <div className="row">
                        <div className="col-4">
                            <Chris fadeOut={this.state.fadeOut}/>
                        </div>
                        <div className="col-4">
                        </div>
                        <div className="col-4">
                            <Lucy fadeOut={this.state.fadeOut}/>
                        </div>
                    </div>
                    : ''}
            </CSSTransitionGroup>
            <DelayLink delay={3000} to="/engagement" replace={false} clickAction={(context) => this.navAction(context)}>
                <Button primary="true" >
                    Next
                </Button>
            </DelayLink>
          </div>
        );
      }
    }