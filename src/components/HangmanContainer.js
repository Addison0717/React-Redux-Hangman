import * as React from 'react'
import { connect } from 'react-redux'
import Hangman from './Hangman'

import { newGame } from '../actions/game'


class HangmanContainer extends React.PureComponent {

  componentDidMount() {

    // FIRE A NEW GAME WITH THESE PARAMETERSs
    this.props.newGame()

  }

  render() {
    console.log(this.props.game.word)
    return (

      <div>
        <Hangman word={this.props.game.word} />
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
export default connect(mapStateToProps, { newGame })(HangmanContainer)
