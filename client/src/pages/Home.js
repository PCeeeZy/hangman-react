import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';

import API from '../services/API';

class Home extends Component {
    state = {
        words: [],
        trueWord: "",
        message: "Hit play to begin!",
        id: "",
        guessedLetters: [],
        wrongGuesses: 0,
        wins: 0,
        losses: 0,
        display: ''
    };

    componentDidMount = () => {
        this.setState({
            words: [],
            message: "Hit play to begin!",
            id: "",
            wins: 0,
            losses: 0
        });
    }

    newGame = () => {
        this.setState({
            guessedLetters: [],
            wrongGuesses: 0,
            trueWord: ''
        })
        this.getNewWords()
    }

    getNewWords = () => {
        API.scrapeWords()
            .then(res => this.setState({
                words: res.data
            }));
        this.selectRandomWord()
    }

    selectRandomWord = () => {
        let randomIndex = Math.floor(Math.random() * this.state.words.length);
        let freshWord = this.state.words[randomIndex];
        this.setState({
            trueWord: freshWord
        });

        this.underscoreDisplay();
    }

    underscoreDisplay = () => {
        let arrWord = this.state.trueWord.split('');
        let displayWord = '';

        for (let i = 0; i < arrWord.length; i++) {
            if (this.state.guessedLetters.includes(arrWord[i])) {
                displayWord += arrWord[i];
            } else {
                displayWord += '_';
            }
        };
        
        this.setState({
            display: displayWord
        });

        if (displayWord === this.state.trueWord) {
            //its a win!
        }

        
    }




    // **UPDATE HERE**

    // beginWordGame = () => {
    //     this.getWords()
    //         .then(
    // };

    // getWords = () => {
    //     API.getWords()
    //         .then(res => {
    //             this.setState({
    //                 words: res.data
    //             })
    //         })
    //         .catch(() => {
    //             this.setState({
    //                 words: [],
    //                 message: "Words weren't able to get retrieved :("
    //             })
    //         });
    // };

    // //**TODO UPDATE BELOW */

    // getWordById = () => {
    //     API.getWordById(this.state.id)
    //         .then(res => {
    //             this.setState({

    //             })
    //         })
    // } 
    
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
                                onClick={() => this.newGame()}
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