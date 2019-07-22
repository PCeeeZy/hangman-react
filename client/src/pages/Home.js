import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';

import API from '../services/API';

class Home extends Component {
    state = {
        words: [],
        message: "Hit play to begin!",
        id: ""
    };

    // **UPDATE HERE**

    beginWordGame = () => {
        this.getWords()
            .then(() => {

            })
    };

    getWords = () => {
        API.getWords()
            .then(res => {
                this.setState({
                    words: res.data
                })
            })
            .catch(() => {
                this.setState({
                    words: [],
                    message: "Words weren't able to get retrieved :("
                })
            });
    };

    //**TODO UPDATE BELOW */

    getWordById = () => {
        API.getWordById(this.state.id)
            .then(res => {
                this.setState({

                })
            })
    } 
    
    // **TODO UPDATE HERE***
    render() {
        return (
            <Container>
                <Row>
                    <Col size='md-12'>
                        <Jumbotron>
                            <h1 className='text-center'>
                                <strong>(React) Hangman</strong>
                            </h1>
                            <h2 className='text-center'>Press Play to Begin a Game of Hangman</h2>
                            <button
                                onClick={() => this.beginWordGame()}
                                className='btn btn-primary ml-2'
                            >
                                Let's Play
                            </button>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }

}