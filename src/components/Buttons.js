import React, { PureComponent } from 'react'

export default class Buttons extends PureComponent {

  handleClick = (e) => {

    if (this.props.guesses.includes(e.target.value)) {
      console.log('You already guessed that letter!')
    } else {
      this.props.makeGuess(e.target.value.toLowerCase())
    }
    e.target.setAttribute('disabled', '')

  }

  render() {
     return (

        <div id="guessButtons" >

          <button onClick={this.handleClick} value="A">A</button>
          <button onClick={this.handleClick} value="B">B</button>
          <button onClick={this.handleClick} value="C">C</button>
          <button onClick={this.handleClick} value="D">D</button>
          <button onClick={this.handleClick} value="E">E</button>
          <button onClick={this.handleClick} value="F">F</button>
          <button onClick={this.handleClick} value="G">G</button>
          <button onClick={this.handleClick} value="H">H</button>
          <button onClick={this.handleClick} value="I">I</button>
          <button onClick={this.handleClick} value="J">J</button>
          <button onClick={this.handleClick} value="K">K</button>
          <button onClick={this.handleClick} value="L">L</button>
          <button onClick={this.handleClick} value="M">M</button>
          <button onClick={this.handleClick} value="N">N</button>
          <button onClick={this.handleClick} value="O">O</button>
          <button onClick={this.handleClick} value="P">P</button>
          <button onClick={this.handleClick} value="Q">Q</button>
          <button onClick={this.handleClick} value="R">R</button>
          <button onClick={this.handleClick} value="S">S</button>
          <button onClick={this.handleClick} value="T">T</button>
          <button onClick={this.handleClick} value="U">U</button>
          <button onClick={this.handleClick} value="V">V</button>
          <button onClick={this.handleClick} value="W">W</button>
          <button onClick={this.handleClick} value="X">X</button>
          <button onClick={this.handleClick} value="Y">Y</button>
          <button onClick={this.handleClick} value="Z">Z</button>
        </div>
     )
   }
}
