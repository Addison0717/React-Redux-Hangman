import * as React from 'react'
import { connect } from 'react-redux'
import Hangman from './Hangman'


class HangmanContainer extends React.PureComponent {
  state = {}

  componentDidMount() {

  }

  render() {
    return (

      <div>
        <Hangman />
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

// export default connect(mapStateToProps)(PhotoPageContainer)
export default connect(mapStateToProps, { })(HangmanContainer)
