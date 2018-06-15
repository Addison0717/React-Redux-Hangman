import * as React from 'react'
import { connect } from 'react-redux'
import Hangman from './Hangman'

import { newGame } from '../actions/game'
import { makeGuess } from '../actions/game'


class HangmanContainer extends React.PureComponent {

  componentDidMount() {
    // FIRE A NEW GAME WITH THESE PARAMETERS
    this.props.newGame()
  }

  render() {
    // console.log(this.props)
    return (

      <div>
        <Hangman word={this.props.game.word} makeGuess={this.props.makeGuess}/>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}


// export default connect(mapStateToProps)(PhotoPageContainer)
export default connect(mapStateToProps, { newGame, makeGuess })(HangmanContainer)
