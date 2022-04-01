import {GET_CONTACT, ADD_CONTACT} from './action.js'
import { combineReducers } from 'redux';


const initialState ={
    data:[],
    contactById:'',
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
    case GET_CONTACT:
        return{ ...state, data: action.payload};
    case ADD_CONTACT:
        return{form: action.inputValue,}
    case 'SET_FORM':
        return{
            form:{
                [action.inputType]: action.inputValue
            }
        }
    default:
        return state}
}

export default reducer;