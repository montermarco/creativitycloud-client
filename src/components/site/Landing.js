import React, { Component } from 'react';
import { Carousel } from 'antd';


class Landing extends Component {
    render() {
        return (
            <div>
            <Carousel vertical autoplay>
                <div><h3>Creatividad con causa</h3></div>
                <div><h3>Quienes somos</h3></div>
                <div><h3>Que hacemos</h3></div>
                <div><h3>Como lo hacemos</h3></div>
                <div><h3>Como funciona</h3></div>
            </Carousel>,
            </div>
        );
    }
}

export default Landing;