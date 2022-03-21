import React from "react";
import {View, Text, StyleSheet, Image,Dimensions,TouchableOpacity} from 'react-native'
import COLORS from "../constants/COLORS";
import { getPosters } from "../services/GetMovies";

import NO_IMAGE from "../constants/IMAGES";

const {width , height} = Dimensions.get("screen")
const setWidth =(w)=> (width/100)*w
const setHeight = (h)=> (height/100)*h
const Castcard =({name,characterName, castImage})=>{
    return(
        <TouchableOpacity style = {styles.castContainer} activeOpacity={0.5}>
            <Image style = {styles.castImage} source={castImage ? {uri :getPosters(castImage)}:NO_IMAGE} 
            resizeMode="cover"/>
            <Text style = {styles.castRealNameText} numberOfLines={2}>{name}</Text>
            <Text style = {styles.castCharacterNameText} numberOfLines={2}>{characterName}</Text>
            <Text></Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    castContainer:{
        flex:1,
        backgroundColor:COLORS.BASIC_BACKGROUND,
    },
    castImage:{
        height:150,
        width:120,
        borderRadius:15,
    },
    castRealNameText:{
        color:COLORS.BLACK,
        fontSize:15,
        width:setWidth(35)
    },
    castCharacterNameText:{
        color:COLORS.BLACK,
        fontSize:15,
        width:setWidth(35)
    },
})


export default Castcard