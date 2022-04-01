import {GET_CONTACT} from './action.js'

const initialState ={
    data:[]
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
    case GET_CONTACT:
        return{ ...state, data: action.payload};
    default:
        return state}
}

export default reducer;