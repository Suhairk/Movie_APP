import React, {useState} from "react";
import {View, Text, StyleSheet,StatusBar,Image,Dimensions} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import IMAGES from "../constants/IMAGES";


const {width , height} = Dimensions.get("screen")
const setWidth =(w)=> (width/100)*w
const setHeight = (h)=> (height/100)*h

const SplashScreen =({navigation})=>{
    //loader
    const [isLoaded , setIsLoaded]  = useState(false)
        setTimeout(()=>{
            setIsLoaded(true)
    }, 2000)
    isLoaded ? navigation.navigate('login') : null

    return(
        <View style = {styles.splashContainer}>
            <StatusBar style = "auto" 
        translucent={false} 
        backgroundColor="#7393B3"/>
        <TouchableOpacity activeOpacity={0.5}>
        <Image style = {styles.imageContainer} source ={IMAGES.SPLASH_IMAGE}></Image>
            <Text style ={styles.Text}>MOVIE APP</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    splashContainer:{
        flex:1,
        backgroundColor:"#7393B3",
        justifyContent:"center",
        alignItems:"center",

    },
    imageContainer:{
        width:setWidth(50),
        height:setWidth(40),
        marginTop:setHeight(20),
        borderRadius:25,
        marginHorizontal:setWidth(10)       
    },
    Text:{
        marginTop:20,
        color:"white",
        fontSize:30,
        marginHorizontal:setWidth(16),
        fontFamily:"Roboto-Bold"
        
    }
})




export default SplashScreen 