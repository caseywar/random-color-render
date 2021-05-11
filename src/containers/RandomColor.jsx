import React, { Component } from 'react'
import Display from '../components/app/color/Display'

export default class RandomColor extends Component {
    state = {
        bgColor: '#FF0000'
    };

    render() {
        const { bgColor } = this.setState;
        return (
            <>
            <div>
                <Display bgColor={bgColor} />
            </div>
            </>
        )
    }
}
