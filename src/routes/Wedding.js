import React, { Component, useEffect, useState, useRef } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import useWindowSize from '../lib/useWindowSize';
import useResize from '../lib/effects/useResize';
import Confetti from 'react-confetti';
import Couple from "../images/couple-wedding.png";
import Confetto1 from "../images/confetto-1.png";
import Confetto2 from "../images/confetto-2.png";
import Confetto3 from "../images/confetto-3.png";
import Confetto4 from "../images/confetto-4.png";

export default function Wedding() {
    const { windowWidth, windowHeight } = useWindowSize();
    const componentRef = useRef();
    const { width, height } = useResize(componentRef)
  
    const items = [];
    const confetti = [Confetto1, Confetto2, Confetto3, Confetto4];

    for(var i = 0; i<2; i++) {
        let img = new Image();
        img.src = confetti[i]
        items.push(img);
    } 

    return (
    <div>
        <div style={{
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
        </div>

        <div style={{
            padding: "2em"
        }}>
            <img src={Couple} />
        </div>

        <NesContainer title="2014">
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
  )
}