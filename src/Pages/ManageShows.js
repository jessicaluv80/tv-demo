import React, { Component } from 'react'
import ReactPropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Show from '../Show'
import '../ManageShows.css'

export default class ManageShows extends Component {
    static propTypes = {
        createShow: ReactPropTypes.func.isRequired

    }
    state = {
        show: {
            name: '',
            rating: -1,
            previewImage: '',
        }
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
        this.props.createShow({
            name: this.state.newShowName,
            rating: this.state.newShowRating,
            previewImage: this.state.newShowPreview

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

        
            return this.props.allShows.map((show, i) => {
                return (
                    <Show key={i} name={show.name} rating={show.rating} previewImage={show.previewImage} />
                )
            })
        }

    getAvgRating = () => {
        const sumOfRatings = this.props.allShows.reduce((accumulator, show)=>{
            return show.rating + accumulator

        }, 0) 

        return sumOfRatings / this.props.allShows.length
    }

    hasEnoughKidShows = () => {
        const minRequiredKidShows = 2

        let kidShowCount = 0
        let remainingShows = this.props.allShows.length
        while (kidShowCount <minRequiredKidShows && remainingShows) {
            remainingShows--

            const show = this.props.allSHows[remainingShows]
            
            if (show.rating === 1){
                kidShowCount++
            }

            return (kidShowCount >= minRequiredKidShows).toString()
            
        }
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <div className="manageShows"> </div>
                <section className="viewAllShows">
                    <header><h1> All Shows </h1>
                        <p> Has Enough Kid Shows: {this.getAvgRating()}</p>
                    </header>
                    <div>
                        {this.renderShows()}
                    </div>
                    <Link to="/">View Shows</Link>
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
            </div >

        )
    }
}