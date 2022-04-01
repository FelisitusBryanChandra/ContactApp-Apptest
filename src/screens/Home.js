import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';
import { View, Text, Image, TouchableHighlight, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect, useDispatch } from 'react-redux';
import { getContact } from '../redux/action';


class Home extends React.Component{

    dispatch = () =>{
        useDispatch();
    }

    componentDidMount(){
        const dispatch = this.props.dispatch
        dispatch(getContact());
        // console.log(JSON.stringify(this.props.DATA))
    }

    render(){
        return(
            <View style={styles.background}>
                <Text style={styles.header}>Contacts</Text>

                <FlatList
                data={this.props.DATA}
                renderItem={({item}) => (
                    <TouchableOpacity 
                    style={styles.flatlistContainer}
                    onPress={() => this.props.navigation.navigate("ContactDetails",{
                        id:item.id
                    })}
                    >
                        <Image
                        source={{uri:item.photo}}
                        style={styles.image}
                        />
                        <View>
                            <Text style={styles.name}>{item.firstName +" "+ item.lastName}</Text>
                            <Text style={styles.age}>{item.age}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                />
                <TouchableOpacity
                onPress={()=> this.props.navigation.navigate('AddContact')}
                >
                    <Image
                    source={{uri:'https://cdn-icons-png.flaticon.com/512/1828/1828817.png'}}
                    style={styles.addButton}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        padding:20
    },
    header:{
        fontSize:30,
        color:'#000',
        fontWeight:'bold',
        marginBottom:'5%'
    },
    flatlistContainer:{
        flexDirection:'row',
        margin: '2%',
        padding:'3%',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    image:{
        height:80,
        width:80,
        borderRadius:50,
        marginRight:'5%'
    },
    name:{
        fontSize:20,
        color:'#000',
        fontWeight:'bold'
    },
    age:{
        fontSize:18,
        color:'#000'
    },
    addButton:{
        width:70, 
        height:70, 
        position:'absolute', 
        right:-10, 
        bottom:-10}

})

function mapStateToProps(state){
    return{
        DATA: state.data
    }
}

export default connect(mapStateToProps)(Home);