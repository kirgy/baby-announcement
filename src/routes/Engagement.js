import React, { Component } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../sass/App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Couple from "../images/Engagement/couple-engagement.png";

export default function Engagement() {
  return (
    <div style={{
        padding: "2em"
    }}>
        <div style={{
            position: "relative"
        }}>
            <img src={Couple} className="couple" />
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
            <Link to="/wedding">
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