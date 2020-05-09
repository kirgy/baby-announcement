import React, { Component } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../sass/App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function House() {
  return (
    <div>
        <i className="nes-charmander"></i>
        <i className="nes-squirtle"></i>

        <NesContainer title="2018">
            <p>
                After a lot of hard work, we bought a house. It's a "fixer-upper".
            </p>
        </NesContainer>
        <Link to="/now">
            <Button primary="true">
                Next
            </Button>
        </Link>
    </div>
  )
}