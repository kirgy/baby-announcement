import React, { Component, useEffect, useState, useRef } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../sass/App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import useWindowSize from '../lib/useWindowSize';
import useResize from '../lib/effects/useResize';
import Couple from "../images/House/couple-house.png";
import Chimney from "../images/House/chimney.png";

export default function House() {

    return (
    <div className="scene-house">
        <div style={{
            padding: "2em"
        }}>
            <img src={Couple} className="couple" />
            <img src={Chimney} className="chimney" />
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
            <Link to="/now">
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