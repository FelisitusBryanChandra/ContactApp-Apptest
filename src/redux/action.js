export const GET_CONTACT = 'GET_CONTACT';
export const ADD_CONTACT = 'ADD_CONTACT';
export const DEL_CONTACT = 'DEL_CONTACT';


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
                    payload: json.data
                })
                console.log("API called!")
            }else{
                console.log("Unable to get data")
            }
        }
    
    } catch (error) {
        console.log(error + "error!")
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
        console.log(error + "error!")
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

export const deleteContact = (id) => {
    try {
        return async dispatch =>{
            const result = await fetch(API_URL + `/${id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            // console.log(JSON.stringify(result) + "Hasil")
            const json = await result.json()
            console.log(JSON.stringify(json) + "JSON")
            if(json){
                dispatch({
                    type: DEL_CONTACT,
                    payload: json
                })
                console.log("API called / deleted!")
            }else{
                console.log("Unable to get data")
            }
        }
    
    } catch (error) {
        console.log(error + "error!")
    }
}

export const editContact = (id, firstName, lastName, age, photo) => {
    try {
        return async dispatch =>{
            const result = await fetch(API_URL + `/${id}`,{
                method:'PUT',
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
                console.log("API editted!")
            }else{
                console.log("Unable to get data")
            }
        }
    
    } catch (error) {
        console.log(error + "error!")
    }
}