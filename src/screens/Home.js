import React, {Component} from 'react';
import { View, Text, Image, TouchableHighlight, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect, useDispatch } from 'react-redux';
import { getContact } from '../redux/action';
import axios from 'axios'

class Home extends React.Component{

    dispatch = () =>{
        useDispatch();
    }

    componentDidMount(){
        const dispatch = this.props.dispatch
        dispatch(getContact());
    }

    render(){
        return(
            <View style={styles.background}>
                <Text style={styles.header}>Contacts</Text>

                <FlatList
                data={this.props.DATA}
                renderItem={({item}) => (
                    <View style={styles.flatlistContainer}>
                        <Image
                        source={{uri:item.photo}}
                        style={styles.image}
                        />
                        <View>
                            <Text style={styles.name}>{item.firstName +" "+ item.lastName}</Text>
                            <Text style={styles.age}>{item.age}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                />
                {/* <Text style={{fontSize:20, color:'black'}}>{this.props.DATA}</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#2b2b2b',
        flex:1,
        padding:20
    },
    header:{
        fontSize:30,
        color:'#fff',
        fontWeight:'bold',
        marginBottom:'5%'
    },
    flatlistContainer:{
        flexDirection:'row',
        margin: '2%',
        padding:'3%',
        backgroundColor:'#000',
        borderRadius:20
    },
    image:{
        height:80,
        width:80,
        borderRadius:50,
        marginRight:'5%'
    },
    name:{
        fontSize:25,
        color:'#fff'
    },
    age:{
        fontSize:20
    }
})

function mapStateToProps(state){
    return{
        DATA: state.data.data
    }
}

export default connect(mapStateToProps)(Home);