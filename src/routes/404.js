import React, { Component } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../sass/App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Game from 'react-dinosaur-game';

export default class ErrorNotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                padding: "2em"
            }}>
                <div style={{
                    position: "relative"
                }}>
                    <Game/>
                </div>
            </div>
        );
      }
    }