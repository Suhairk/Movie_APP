import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, TouchableNativeFeedback, ImageBackground} from 'react-native'
import COLORS from "../constants/COLORS";
import Icon from 'react-native-vector-icons/Ionicons';
import IMAGES from "../constants/IMAGES";
import { useState } from 'react';
import { getPosters } from '../services/GetMovies';
// import Icon from 'react-native-vector-icons/Ionicons';





const MovieCards =({title,lang,vote,voteCount,poster, size,onPress})=>{
//size for reusability
    const [Liked , setLiked] = useState(false)
    const [voteCountvalue , setvoteCountvalue] = useState(voteCount)

    return(
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <ImageBackground style = {{...styles.MovieCardContainer, width:250*size, height:350*size}} source={{uri:getPosters(poster)}} imageStyle = {styles.posterImage}>
            <View style={{...styles.imdbContainer, paddingVertical:3*size,borderTopRightRadius:10*size, borderBottomLeftRadius:10*size}}>
                <Image source={IMAGES.IMDB} resizeMode="cover" style={{...styles.imdbImage, width:50*size, height:20*size}}></Image>
                <Text style = {{...styles.imdbText,marginRight:5*size}}>{vote}</Text>
            </View>
            <TouchableNativeFeedback onPress={()=>{
                    setLiked(!Liked)
                    setvoteCountvalue(Liked ? voteCountvalue - 1 :voteCountvalue+1)
            }}>
                <Icon name = {Liked? "heart":"heart-outline"} size={20*size} 
                color={Liked? "red" :"white"} style={styles.heartIcon}></Icon>
            </TouchableNativeFeedback>
        </ImageBackground >
        <View>
            <Text style ={{...styles.MovieCardTitle,width:250*size}} numberOfLines={3}>{title}</Text>
                <View style ={styles.MovieCardSubContainer}> 
                <Text style ={styles.MovieCardSubTitle}>{lang}</Text>+
                    <View style = {styles.MovieCardTextIconContainer}>
                        <Icon name ="heart" size={15} style = {{...styles.IconStyle,marginRight:5*size}}></Icon>
                        <Text style ={styles.MovieCardSubTitle}>{voteCountvalue}</Text>
                    </View>
                </View>
        </View>
       </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  MovieCardContainer:{
    backgroundColor:COLORS.ACTIVE,
    height:350,
    width:250,
    borderRadius:12,
    elevation:5,
    marginVertical:5

  },
  posterImage:{
    borderRadius:12,
  },
  MovieCardTitle:{
      color:COLORS.BLACK,
      fontSize:15,
      width:250
  },
  MovieCardSubContainer:{
    flexDirection:"row",
    alignItems:"center" ,
    justifyContent:"space-between"
  },
  MovieCardSubTitle:{
    color:COLORS.BLACK,
    fontSize:12,
    fontWeight:"100"
  },
  MovieCardTextIconContainer:{
    color:COLORS.BLACK,
    flexDirection:"row",
    alignItems:"center"
  },
  IconStyle:{
      color:"red",
      marginRight:5
  },
  imdbContainer:{
    flexDirection:"row",
    alignItems:"center",
    alignSelf:"flex-end",
    backgroundColor:"#FFBF00",
    borderBottomLeftRadius:10,
    paddingVertical:3,
    borderTopRightRadius:10
  },
  imdbImage:{
    height:20,
    width:50,
    borderBottomLeftRadius:5,

  },
  imdbText:{
      color:"red",
      marginRight:5,

  },
  heartIcon:{
      position:"absolute",
      bottom:10,
      left:10
  }

})

MovieCards.defaultProps = {
    size:1,
}

export default MovieCards