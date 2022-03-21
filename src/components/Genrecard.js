import React from "react";
import {Text, StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import { act } from "react-test-renderer";
import COLORS from "../constants/COLORS";

const {width} = Dimensions.get('screen')
const setWidth = (w)=> (width /100)*w


const Genrecard = ({genName, active, onPress})=>{
    return(
    <TouchableOpacity style = {{...styles.genContainer, 
    backgroundColor:active? COLORS.ACTIVE :COLORS.WHITE}}
    activeOpacity={0.5}
    onPress = {()=> onPress(genName)}>
        
    <Text style ={{...styles.genText , color:active? COLORS.WHITE : COLORS.BLACK}}>{genName}</Text>
        
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    genContainer :{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.WHITE,
        paddingVertical:2,
        marginVertical:8,
        elevation:3,
        width:setWidth(25),
        borderRadius: 10,
        paddingTop:10,
        paddingBottom:10
        
    },

    genText:{
        fontSize:13,
        color:COLORS.TEXT_COLOR
    }
})

export default Genrecard