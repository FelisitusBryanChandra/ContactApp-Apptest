export const GET_CONTACT = 'GET_CONTACT';
import axios from 'axios'

const API_URL='https://simple-contact-crud.herokuapp.com/contact'

export const getContact = () => {
    try {
        return async dispatch =>{
            const result = await fetch(API_URL,{
                method:'GET',
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            console.log(JSON.stringify(result) + "Hasil")
            const json = await result.json()
            console.log(JSON.stringify(json) + "JSON")
            if(json){
                dispatch({
                    type: GET_CONTACT,
                    payload: json
                })
                console.log("API called!")
            }else{
                console.log("Unable to get data")
            }
        }
    
    } catch (error) {
        console.log(error + "error! bryan")
    }
}