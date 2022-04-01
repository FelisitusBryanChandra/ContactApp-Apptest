export const GET_CONTACT = 'GET_CONTACT';
export const ADD_CONTACT = 'ADD_CONTACT';


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
            const json = await result.json()
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

export const getContactbyId = (id) => {
    try {
        return async dispatch =>{
            const result = await fetch(API_URL + `/${id}`,{
                method:'GET',
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            // console.log(JSON.stringify(result) + "Hasil")
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

export const addContact = (firstName, lastName, age, photo) => {
    try {
        return async dispatch =>{
            const result = await fetch(API_URL,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: `${firstName}`,
                    lastName: `${lastName}`,
                    age: `${age}`,
                    photo: `${photo}`
                })
            });
            console.log(JSON.stringify(result) + "Hasil")
            const json = await result.json()
            console.log(JSON.stringify(json) + "JSON")
            if(json){
                dispatch({
                    type: ADD_CONTACT,
                    payload: json
                })
                console.log("API posted!")
            }else{
                console.log("Unable to get data")
            }
        }
    
    } catch (error) {
        console.log(error + "error!")
    }
}