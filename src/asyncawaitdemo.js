import React, { Component } from 'react'
import './App.css'
import { TIMEOUT } from 'dns';

class App extends Component {
    state = {
        isEvenMessage: 'unknown'
    }

    isEvenAsync = (num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    if (isNaN(num)) {
                        throw new Error()
                    }
                    resolve(num % 2 === 0)
                }
                catch (err) {
                    reject(err)
                }
            }, 2000)
        })
    }
    componentDidMount() {
        this.isEvenAsync(unefined)
            .then((even) => {
                this.setState({
                    isEvenMessage: even ? "It's Even" : "It's Odd"
                })
            })

            .catch((Error) => {
                this.setState({
                    inEvenMessage: "Failed"
                })
            })
    }

    render() {
        return (
            <div className="App">
                {this.state.isEvenMessage()}
            </div>

        );
    }
}
