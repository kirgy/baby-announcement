import React, { Component } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../sass/App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function Engagement() {
  return (
    <div>
        <i className="nes-charmander"></i>
        <i className="nes-squirtle"></i>

        <NesContainer title="2012">
            <p>
                We decided that we were the humans we wanted to spend the rest of our lives with
            </p>
        </NesContainer>
        <Link to="/wedding">
            <Button primary="true">
                Next
            </Button>
        </Link>
    </div>
  )
}