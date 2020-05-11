import React, { Component, useEffect, useState, useRef } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../sass/App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import useWindowSize from '../lib/useWindowSize';
import useResize from '../lib/effects/useResize';
import Confetti from 'react-confetti';
import Couple from "../images/Wedding/couple-wedding-confetti.gif";
import Confetto1 from "../images/confetto-1.png";
import Confetto2 from "../images/confetto-2.png";
import Confetto3 from "../images/confetto-3.png";
import Confetto4 from "../images/confetto-4.png";

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
        const windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        const items = [];
        const confetti = [Confetto1, Confetto2, Confetto3, Confetto4];
    
        for(var i = 0; i<2; i++) {
            let img = new Image();
            img.src = confetti[i]
            items.push(img);
        }         

        return (
            <div>
                {/* <div style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                }}>
                    <Confetti
                        width={windowWidth}
                        height={windowHeight}
                        gravity={0.05}
                        wind={-0.02}
                        numberOfPieces={50}
                        drawShape={ctx => {
                            var img = items[Math.floor(Math.random() * items.length)];         
        
                            for(let i = 0; i < 22; i++) {                 
                                ctx.drawImage(img, 0, 0);
        
                            }
                        }}            
                    />
                </div> */}
        
                <div style={{
                    padding: "2em"
                }}>
                    <img src={Couple} className="couple" />
                </div>
        
                <NesContainer title="2014" className="text-caption">
                    <p>
                        We met with friends and family, and said "I do"
                    </p>
                </NesContainer>
                <div style={{
                    textAlign: "right",
                    paddingTop: "1em"
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
        )
    }
}