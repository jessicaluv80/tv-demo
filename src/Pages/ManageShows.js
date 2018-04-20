import React, { Component } from 'react'
import Show from '../Show'

export default class ManageShows extends Component {
    state = {
        show: {
            name: '',
            rating: -1,
            previewImage: '',
        },
        shows: [
            {
                name: 'Dead Files',
                rating: 3,
                previewImage: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/29683803_2048628898498234_7034297162045851476_n.jpg?_nc_cat=0&oh=2e9aa27bae43d10bfe4efa77330ff2c1&oe=5B595C8F',
            }
        ]
    }

    handleOnChange = (e) => {
        if (e.target.id === "nameInput") {
            this.setState({
                newShowName: e.target.value
            })
        } else if (e.target.id === "ratingInput") {
            this.setState({
                newShowRating: Number(e.target.value)
            })
        } else if (e.target.id === "previewInput") {
            this.setState({
                newShowPreview: e.target.value
            })
        }
    }

    handleOnClick = () => {
        this.setState((previousState) => {
            const existingShows = previousState.shows
            existingShows.push({
                name: previousState.newShowName,
                rating: previousState.newShowRating,
                previewImage: previousState.newShowPreview,
            })

            return {
                shows: existingShows
            }
        })
    }

    renderShows = () => {
        // const showComponents = []

        // // for (const show of this.state.shows) {
        // //     showComponents.push(
        // //         <Show key={0} name={show.name} rating={show.rating} previewImage={show.previewImage} />

        // //     )
        // // }

        // for (let i = 0; i < showComponents.length; i++) {
        //     const show = showComponents[i];

        //     showComponents.push(
        //         <Show key={i} name={show.name} rating={show.rating} preview={show.previewImage} />
        //     )

        //     return showComponents

        return this.state.shows.map((show, i) => {
            return (
                <Show key={i} name={show.name} rating={show.rating} previewImage={show.previewImage} />
            )
        })
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <section className="viewAllShows">
                    <header><h1> All Shows </h1></header>
                    <div>
                        {this.renderShows()}
                    </div>
                </section>
                <section className="createShow">
                    <header><h1> New Show </h1></header>
                    <div>
                        <div><label>Name:</label><input id="nameInput" onChange={this.handleOnChange} /></div>
                        <div><label>Rating:</label><input id="ratingInput" onChange={this.handleOnChange} /></div>
                        <div><label>Preview Image:</label><input id="previewInput" onChange={this.handleOnChange} /></div>
                        <button onClick={this.handleOnClick}>Create</button>
                    </div>
                </section>
            </div>
        )
    }
}