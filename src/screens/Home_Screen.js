import { FlatList, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import COLORS from '../constants/COLORS'
import Genrecard from '../components/Genrecard'
import ItemSeprators from '../components/ItemSeprators'
import FONTS from '../constants/FONTS'
import MovieCards from '../components/MovieCards'
import {getNowPlaying,getComingMovie,getGenres} from '../services/GetMovies'


const Exgenres = ["All","Action","Comedy","Romance","Horror"]
const url= "http://api.themoviedb.org/3/movie/now_playing?api_key=927a9fecedacc69fd484c32f4d86e62f"

const HomeScreen = ({navigation}) => {
  const [activeGenre , setActivegenre] = useState("All")
  const [nowPlaying, setNowPlaying] = useState({});

  //upcoming
  const [upcoming, setupcoming] = useState({});
  ///genres
  // const [genres, setGenres] = useState([{ id: 10110, name: "All" }]);
  //calll before rendering
  useEffect(() => {
    getNowPlaying().then((res) =>{
      setNowPlaying(res.data)
    });
    getComingMovie().then((res) =>{
      setupcoming(res.data)
    });
  }, []);

  //console.log("data are",nowPlaying)
  //console.log("genres" , genres)
    return (
      <ScrollView contentContainerStyle = {styles.container}>
        <StatusBar style = "auto" 
        translucent={false} 
        backgroundColor="#7393B3"> </StatusBar>
        <View style= {styles.headerContainer}>
          <Text style={styles.headerStyle}>Now playing</Text>
          <Text style={styles.subHeaderStyle}>View all</Text>
        </View>

        <View>
          <FlatList data={Exgenres} 
          horizontal
          keyExtractor = {(item)=> item}
          ItemSeparatorComponent = {()=><ItemSeprators width ={15}/>}
          ListHeaderComponent = {()=> <ItemSeprators width={15}/>}
          ListFooterComponent = {()=> <ItemSeprators width={15}/>}
          renderItem = {({item}) => (
          <Genrecard genName={item}
          active = {item === activeGenre? true : false}
          onPress = {(genName)=> setActivegenre(genName)}
          />)  
          }
          />
        </View>

        <View>
        <FlatList data={nowPlaying.results} 
          horizontal
          keyExtractor = {(item)=> item.id.toString()}
          ItemSeparatorComponent = {()=><ItemSeprators width = {15}/>}
          ListHeaderComponent = {()=> <ItemSeprators width={15}/>}
          ListFooterComponent = {()=> <ItemSeprators width={15}/>}
          renderItem = {({item}) => (
          <MovieCards title ={item.title} lang ={item.original_language}
          vote = {item.vote_average} voteCount= {item.vote_count} poster ={item.poster_path} 
          onPress={()=>navigation.navigate("movie" ,{movieId : item.id})}
          />)  
          }
          />
        </View>
        {/* coming soon section */}
        <View style= {styles.headerContainer}>
          <Text style={styles.headerStyle}>Coming soon</Text>
          <Text style={styles.subHeaderStyle}>View all</Text>
        </View>
        <View>
        <FlatList data={upcoming.results} 
          horizontal
          keyExtractor = {(item)=> item.id.toString()}
          ItemSeparatorComponent = {()=><ItemSeprators width = {15}/>}
          ListHeaderComponent = {()=> <ItemSeprators width={15}/>}
          ListFooterComponent = {()=> <ItemSeprators width={15}/>}
          renderItem = {({item}) => (
          <MovieCards title ={item.title} lang ={item.original_language}
          vote = {item.vote_average} voteCount= {item.vote_count} poster ={item.poster_path} size={0.5} 
          onPress={()=>navigation.navigate("movie" , {movieId : item.id})}
          />)  
          }
          />
        </View>
      </ScrollView>
    )
  }

const styles = StyleSheet.create({

  container:{
    // flex:1,
    backgroundColor:COLORS.BASIC_BACKGROUND,
    flexGrow: 1
  },
  text:{
    color:"red",
    backgroundColor:"white"
  },
  headerContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20,
    paddingVertical:10
  },
  headerStyle:{
    color:COLORS.TEXT_COLOR,
    fontSize:25,
    fontFamily:"Roboto-Regular.ttf"
  },
  subHeaderStyle:{
    color:COLORS.ACTIVE,
    fontSize:15,
    fontFamily:"Roboto-Bold.ttf'"
}
  
})




export default HomeScreen
 