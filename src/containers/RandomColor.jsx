import React, { Component } from 'react'
import Display from '../components/app/color/Display'

export default class RandomColor extends Component {
    state = {
        bgColor: '#FF0000',
    };

    randomColorArray = () => {
    const colorsArray = [
        '#7b1da3', '#a61c5a', '#4bb31b', '#d8db0f', '#fa9d46'
      ]
        return colorsArray[Math.floor(Math.random() * colorsArray.length)];
    }

    colorChange = () => setInterval(() => {
        this.setState({ bgColor: this.randomColorArray()})
    }, 500);

    componentDidMount = () => {
        this.colorChange();
    }

    render() {
        return (
            <>
            <div>
                <Display bgColor={this.state.bgColor}  />
            </div>
            </>
        )
    }
}
