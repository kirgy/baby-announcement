import React, { Component } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../sass/App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group'
import DelayLink from 'react-delay-link';
import Chris from "../components/Chris";
import Lucy from "../components/Lucy";
import Couple from "../images/Meet/couple-meet.png";
import Spark from "../images/Meet/spark.png";

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
            <div style={{
                padding: "2em"
            }}>
                <div style={{
                    position: "relative"
                }}>
                    <img src={Couple} className="couple" />
                    <img src={Spark} className="spark" />
                </div>

                <NesContainer title="2014" className="text-caption">
                    <p>
                        We met with friends and family, and said "I do"
                    </p>
                </NesContainer>
                <div style={{
                    "text-align": "right",
                    "padding-top": "1em"
                }}>
                    <Link to="/house">
                        <Button primary="true" style={{
                            "margin-right":  "right"
                        }}>
                            Next
                        </Button>
                    </Link>
                </div>                
            </div>
        );
      }
    }