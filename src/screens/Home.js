import React, {Component} from 'react';
import { View, Text, Image, TouchableHighlight, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

class Home extends React.Component{

    render(){
        return(
            <View>
                <Text style={{fontSize:20, color:'black'}}>Home Screen</Text>
            </View>
        );
    }
}

function mapStateToProps(state){
    return{
        DATA: state.reducer
    }
}

export default connect(mapStateToProps)(Home);