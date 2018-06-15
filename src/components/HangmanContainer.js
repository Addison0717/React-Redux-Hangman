import * as React from 'react'
import { connect } from 'react-redux'
import Hangman from './Hangman'

import { getPhotosByAlbum } from '../actions/photos'

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

// const mapStateToProps = (state) => {
//   return {
//     photos: state.photos
//   }
// }

// export default connect(mapStateToProps)(PhotoPageContainer)
export default connect(mapStateToProps, { getPhotosByAlbum })(PhotoPageContainer)
