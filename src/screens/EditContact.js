import React, {Component} from 'react';
import { View, Text, Image, TouchableHighlight, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect, useDispatch } from 'react-redux';
import { getContact, getContactbyId, addContact, editContact } from '../redux/action';

class EditContact extends React.Component{

    constructor(){
        super();
        this.state={
            
        }
    }

    dispatch = () =>{
        useDispatch();
    }


    componentDidMount(){
        const dispatch = this.props.dispatch
        const id = this.props.route.params
        // console.log(id.id + " id")
        // dispatch(getContactbyId(id.contactId));
        console.log(this.props.DATA+"edit contact")
    }

    render(){
        const {contactId, firstName, lastName, age, photo} = this.props.route.params
        return(
            <View style={styles.container}>
                <TouchableOpacity
                onPress={()=> this.props.navigation.navigate('Home')}
                >
                    <Image
                        source={{uri:'https://cdn-icons.flaticon.com/png/512/3114/premium/3114883.png?token=exp=1648814000~hmac=6a05d37d93d12547ed43f427428c206d'}}
                        style={styles.back}
                        />
                </TouchableOpacity>
                    <Text style={styles.subHeader}>First Name</Text>    
                    <TextInput
                    onChangeText={(text) => this.setState({firstName: text})}
                    placeholder={firstName}
                    placeholderTextColor="#969696"
                    style={styles.textInput}
                    />

                    <Text style={styles.subHeader}>Last Name</Text>    
                    <TextInput
                   onChangeText={(text) => this.setState({lastName: text})}
                   placeholder={lastName}                
                    placeholderTextColor="#969696"
                    style={styles.textInput}
                    />

                    <Text style={styles.subHeader}>Age</Text>    
                    <TextInput
                    onChangeText={(text) => this.setState({age: text})}
                    placeholder={JSON.stringify(age)}
                    placeholderTextColor="#969696"
                    style={styles.textInput}
                    />

                    <Text style={styles.subHeader}>Photo (Link)</Text>    
                    <TextInput
                    onChangeText={(text) => this.setState({photo: text})}
                    placeholder={photo}
                    placeholderTextColor="#969696"
                    style={styles.textInput}
                    />                    
                
                    <TouchableOpacity
                    style={styles.save}
                    onPress={()=> {
                        this.props.dispatch(editContact(contactId, this.state.firstName, this.state.lastName, this.state.age, this.state.photo)),
                        this.props.navigation.navigate('Home') 
                    }
                }
                    >
                        <Text style={styles.saveText}>Save</Text>    
                    </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state){
    return{
        DATA: state.data.data
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:30
    },
    back:{
        width:30,
        height:30,
        marginBottom:10,
        // backgroundColor:'blue'
    },
    subHeader:{
        color:'#000',
        fontWeight:'bold',
        fontSize:20,
        marginVertical:8
    },
    textInput:{
        color:'#000',
        backgroundColor:'#c9c9c9',
        padding:10,
        borderRadius:10
    },
    save:{
        alignSelf:'center',
        marginVertical:30,
        backgroundColor:'#000',
        padding:20,
        borderRadius:18
    },
    saveText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    }
})

export default connect(mapStateToProps)(EditContact);