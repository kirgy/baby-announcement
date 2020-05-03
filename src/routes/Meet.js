import React, { Component } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function Meet() {
  return (
    <div>
        <i className="nes-charmander"></i>
        <i className="nes-squirtle"></i>

        <NesContainer title="2008">
            <p>We met each other online, it took us 6 months to get the courage to meet each other in real life. #swipingRight</p>
        </NesContainer>
        <Link to="/engagement">
            <Button primary="true">
                Next
            </Button>
        </Link>
    </div>
  )
}