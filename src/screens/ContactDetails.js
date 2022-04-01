import React, {Component} from 'react';
import { View, Text, Image, TouchableHighlight, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect, useDispatch } from 'react-redux';
import { getContact, getContactbyId, deleteContact } from '../redux/action';

class ContactDetails extends React.Component{

    dispatch = () =>{
        useDispatch();
    }

    componentDidMount(){
        const dispatch = this.props.dispatch
        const id = this.props.route.params
        console.log(id.id + " id")
        dispatch(getContactbyId(id.id));
        console.log(this.props.DATA.photo +" photo")
    }

    delContact(){
        const id = this.props.route.params.id
        this.props.dispatch(deleteContact(id));
        console.log("Contact Deleted")
        this.props.navigation.navigate('Home')  
    }

    editContact(){
        const navigation = this.props.navigation
        const data = this.props.DATA
        const id = this.props.route.params.id
        navigation.navigate('EditContact',{
            contactId: id,
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age,
            photo: data.photo
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View
                style={styles.containerBox}
                >
                    <Image
                    source={{uri:this.props.DATA.photo}}
                    style={styles.image}
                    />
                    <Text style={styles.name}>{this.props.DATA.firstName +" "+ this.props.DATA.lastName}</Text>
                    <Text style={styles.age}>{"Age: "+this.props.DATA.age}</Text>
                </View>

                <View style={styles.container2}>
                <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Image
                    source={{uri:'https://cdn-icons.flaticon.com/png/512/3114/premium/3114883.png?token=exp=1648814000~hmac=6a05d37d93d12547ed43f427428c206d'}}
                    style={styles.edit}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={() => this.editContact()}
                >
                    <Image
                    source={{uri:'https://cdn-icons-png.flaticon.com/512/1159/1159633.png'}}
                    style={styles.edit}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={()=> this.delContact()}
                >
                    <Image
                    source={{uri:'https://cdn-icons.flaticon.com/png/512/657/premium/657059.png?token=exp=1648813707~hmac=fea78dc8f2946624150dbb36e58a515b'}}
                    style={styles.edit}
                    />
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center'
    },
    containerBox:{
        backgroundColor:"#fff",
        padding:80,
        borderRadius:40,
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
    },
    image:{
        width:200,
        height:200,
        borderRadius:100,
        marginVertical:20,
    },
    name:{
        fontSize:25,
        color:'#000',
        fontWeight:'bold',
        textAlign:'center'
    },
    age:{
        fontSize:20,
        color:'#000',
        textAlign:'center'
    },
    container2:{
        flexDirection:'row',
        marginVertical:50,
        marginHorizontal:100
    },
    edit:{
        width:50,
        height:50,
    },
    button:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:20,
        marginHorizontal:30,
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
    },
    delete:{

    }
})

function mapStateToProps(state){
    return{
        DATA: state.data.data
    }
}

export default connect(mapStateToProps)(ContactDetails);