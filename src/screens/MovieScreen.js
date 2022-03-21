import { Dimensions, ImageBackground, StatusBar,ScrollView ,Image,TouchableOpacity, Linking,FlatList, Share} from 'react-native'
import React ,{useEffect, useState}from 'react'
import { Text, View, StyleSheet } from 'react-native'
import COLORS from '../constants/COLORS';
//import { ScrollView } from 'react-native-gesture-handler';
import { getMovieById,getPosters,getVideos} from '../services/GetMovies';
import ItemSeprators from '../components/ItemSeprators';
import Icon from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons'
import { APPEND_RESPONSE } from '../constants/URLS';
import Castcard from '../components/Castcard'
import MovieCards from '../components/MovieCards';

const {width , height} = Dimensions.get("screen")
const setWidth =(w)=> (width/100)*w
const setHeight = (h)=> (height/100)*h


const Moviescreen= ({route, navigation}) => {
  const {movieId} = route.params;
  const [movieid, setMovieid] =useState({})

  useEffect(()=>{
    getMovieById(movieId, `${APPEND_RESPONSE.VIDEOS},${APPEND_RESPONSE.CREDITS},${APPEND_RESPONSE.RECOMMENDATIONS}`).then((res)=>{
      setMovieid(res.data)
    })
  },[])
 // console.log("similar movies",movieid?.recommendations?.results)
  //console.log("movie title ",movieid.title)
  //console.log("movie title ",movieid)  //videos": {"results": [[Object], [Object], ]
    return (
        <ScrollView contentContainerStyle = {styles.container}>
          <StatusBar style = "auto" 
        translucent={false} 
        backgroundColor="#7393B3"/> 
        <View style = {styles.imageBackgroundContainer}> 
          <Image style = {styles.imageBackground} resizeMode="cover" 
          source={{uri:getPosters(movieid.backdrop_path)}}/>
        </View>
        <View style ={styles.headerContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.goBack()}>
          <Icon name = "chevron-left" size={30}/>
        </TouchableOpacity>
        
        <TouchableOpacity activeOpacity={0.5} onPress = {()=> Share.share({message:`${movieid?.title} "  " ${movieid?.homepage}`})}>
        <View style = {styles.shareContainer}>
          <Text style ={styles.headerText}>Share</Text>
          <Ionic name = "share-outline" size={20}/>
        </View>
        </TouchableOpacity>
        
        </View>
        <TouchableOpacity style = {styles.playCircleContainer} 
        onPress = {()=>Linking.openURL(getVideos(movieid.videos.results[0].key))}>
        <Ionic name = "play-circle" size={60} color={"#C0C0C0"}></Ionic>
        </TouchableOpacity>
        <ItemSeprators height={setHeight(32)}></ItemSeprators>
        <View style={styles.mainContainer}>
          <Text style={styles.movieNameText} numberOfLines={2}>{movieid.original_title}</Text>
          <View style = {styles.movieRatingContainer}>
            <Ionic name ="heart" size={22} style = {styles.iconContainer}/>
            <Text style={styles.movieRatingContainerText}>{movieid.vote_average}</Text>
          </View>
        </View>
        <Text style= {styles.genresText}>{movieid?.genres?.map((genre) => genre?.name)?.join(", ")} | {" "} 
        {movieid.runtime} Min </Text>
        <Text style= {styles.genresText}>{movieid.original_language}</Text>

        <ItemSeprators height={setHeight(1)}></ItemSeprators>
        <View style={styles.overViewContainer}>
          <Text style = {styles.overViewTitle}>Overview</Text>
          <Text style = {styles.overViewText}>{movieid?.overview}</Text>
        </View>
        <ItemSeprators height={setHeight(1)}></ItemSeprators>
        <View>
          <Text style = {styles.castText}>Cast</Text>
          
          <FlatList data={movieid?.credits?.cast} 
          horizontal
          keyExtractor = {(item)=> item?.id.toString()}
          ItemSeparatorComponent = {()=><ItemSeprators width = {1}/>}  //b/w
          ListHeaderComponent = {()=> <ItemSeprators width={15}/>}  //left
          ListFooterComponent = {()=> <ItemSeprators width={15}/>}  //right
          renderItem = {({item}) => (
          <Castcard  name = {item?.name} 
                      characterName = {item?.character}
                      castImage = {item.profile_path}
          />) }
          />
        </View>
        <View>
          <Text style = {styles.castText}>Crew</Text>
          <FlatList data={movieid?.credits?.crew} 
          horizontal
          keyExtractor = {(item)=> item?.id.toString()}
          ItemSeparatorComponent = {()=><ItemSeprators width = {1}/>}  //b/w
          ListHeaderComponent = {()=> <ItemSeprators width={15}/>}  //left
          ListFooterComponent = {()=> <ItemSeprators width={15}/>}  //right
          renderItem = {({item}) => (
          <Castcard  name = {item?.name} 
                      characterName = {item?.job}
                      castImage = {item.profile_path}
          />) }
          />
        </View>
        <View style = {styles.recommendedContainer}> 
        <Text style = {styles.castText}>Recommended Movies</Text>
        <FlatList
        data={movieid?.recommendations?.results}
        keyExtractor={(item) =>  item?.id?.toString()}
        horizontal
        ListHeaderComponent={() => <ItemSeprators width={20}/>}
        ItemSeparatorComponent={() => <ItemSeprators width={20} />}
        ListFooterComponent={() => <ItemSeprators width={20} />}
        renderItem={({ item }) => (
         <MovieCards title ={item.title} lang ={item.original_language}
          vote = {item.vote_average} voteCount= {item.vote_count} poster ={item.poster_path} size={0.6} 
          />
        )}
      />
      <ItemSeprators height={setHeight(2)}></ItemSeprators>
        </View>
        

        </ScrollView>
    )
  }

const styles = StyleSheet.create({

  container:{
    flexGrow: 1,
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
  imageBackgroundContainer:{
      width:setWidth(120),
      height:setHeight(30),
      alignItems:"center",
      position:"absolute",
      borderBottomLeftRadius:250,
      borderBottomRightRadius:250,
      elevation:5,
      left: -35,
      top: 0,

  },
  imageBackground:{
    width:setWidth(120),
    height:setHeight(30),
    borderBottomLeftRadius:250,
    borderBottomRightRadius:250
  },
  headerContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    position:"absolute",
    right:0,
    left:0,
    elevation:10,
    paddingHorizontal:15,
    paddingVertical:15,
      },
  headerText:{
    fontSize:20,
    fontWeight:"bold",
    marginRight:5

  },
  shareContainer:{
    flexDirection:"row",
    alignItems:"center",
  },
  playCircleContainer:{
    position:"absolute",
    top:100,
    left:setWidth(45),
  },
  mainContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:10,
  },
  movieNameText:{
      color:"black",
      fontSize:18,
      fontWeight:"bold",
      width:setWidth(65)
  },
  movieRatingContainer:{
    flexDirection:"row",
    alignItems:"center",
    marginHorizontal:5
  },
  movieRatingContainerText:{
    color:"black",
    fontSize:18,
    marginLeft:3
  },
  iconContainer:{
    color:"red",
    marginRight:5
  },
  subTectContainer:{
    backgroundColor:"blue"
  },
  genresText:{
    color:"gray",
    fontSize:15,
    marginLeft:10
  },
  overViewContainer:{
    backgroundColor:"#DCDCDC",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
  },
  overViewTitle:{
    color:COLORS.ACTIVE,
    fontSize:18,
    fontWeight:"bold",
    marginVertical:3

  },
  overViewText:{
    color:COLORS.BLACK,
    fontSize:14,
    fontWeight:"bold",
    textAlign:"justify"
  },
  castText:{
    color:"black",
    fontSize:18,
    marginLeft:10,
    fontWeight:"bold",
    marginBottom:5
  },
  recommendedContainer:{
    backgroundColor:"#DCDCDC"
  }

})




export default Moviescreen
