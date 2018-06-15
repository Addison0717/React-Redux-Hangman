import NEW_GAME from '../actions/game'
import MAKE_GUESS from '../actions/game'


export default (state = initialState, action = {}) => {
  switch(action.type){
  case 'NEW_GAME':
    return action.payload
  case 'MAKE_GUESS':
    // return [
    //   state,
    //   ...action.payload
    // ]
    return state
  default:
    return state
  }


}



const initialState = {
  word: '',
  guesses:[]
}
