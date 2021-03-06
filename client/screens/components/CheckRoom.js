import React, {Component} from 'react';
import{
    AppRegistry, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions, TextInput
} from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import InputBar from "./InputBar";

var screen = Dimensions.get('window');
 class CheckRoom extends Component{
    construtor(){
        //super();
    }
    showAddModal=()=>{
        this.refs.myModal.open();
    }
    render(){
        //const { navigation } = this.props; 
        //console.log(navigate);
        return(
            <Modal
            ref={"myModal"}
            style={{
                justifyContent:'center',
                backgroundColor:'#fff8dc',
                borderRadius: Platform.OS === 'ios'?30:0,
                shadowRadius:10,
                width:screen.width-80,
                height:160
            }}
            position='center'
            backdrop={true}
            onClosed={()=>{
                //alert(this.state.roomCode)
            }}
            >
            <Text style={{
                fontSize:16,
                fontWeight:'bold',
                textAlign:'center',
                marginTop:30
            }}>
                Enter Room Code
            </Text>
            <TextInput
               style={{
                   height:40,
                   borderBottomColor:'gray',
                   marginLeft:30,
                   marginRight:30,
                   marginTop:10,
                   marginBottom:10,
                   borderBottomWidth:1
               }} 
               onChangeText={(text)=>this.setState({roomCode:text})}
               placeholder="Plz enter the room's code"
               //value={this.state.roomCode}
               >
            
            </TextInput>        
            <Button
            style={{fontSize:18,color:'white'}}
            containerStyle={{
                padding:8,
                marginLeft:70,
                marginRight:70,
                height:40,
                borderRadius:6,
                backgroundColor:'#ffd700'
            }}
            onPress={() => {
                {this.props.rightCode == this.state.roomCode ? (
                    //alert("Matched")
                    this.props._CallOn()
                 // this._onPressAdd()
                ) : (
                alert("incorred")
                )}
                this.refs.myModal.close();
              }
            }
            >
                Submit
            </Button>

            </Modal>
        )
     }
}
export default CheckRoom;