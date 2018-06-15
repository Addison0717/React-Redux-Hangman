import * as React from 'react'
import { connect } from 'react-redux'
import Homepage from './Homepage'

class HomepageContainer extends React.PureComponent {
  state = {}

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Homepage />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, { })(HomepageContainer)
