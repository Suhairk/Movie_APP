import React,{useState} from "react";
import {View, 
    Text, 
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Image
} 
from'react-native';
import Feather from 'react-native-vector-icons/Feather'
import COLORS from "../constants/COLORS";
import IMAGES from "../constants/IMAGES";
import ItemSeprators from "../components/ItemSeprators";
import {loginUser} from '../services/authenticationService'

const {width , height} = Dimensions.get("screen")
const setWidth =(w)=> (width/100)*w
const setHeight = (h)=> (height/100)*h

const LoginScreen =({navigation}) =>{
    const [isShow , setShow]  = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage ,  setErrorMessage] = useState('')
    const [successMessage , setSuccessMessage] = useState('')

    const login = () =>{
        let user = {
            username,
            password
        };
        console.log(user)
        loginUser(user).then((res)=>{
            console.log(res)
            if(!res?.status){
                setErrorMessage(res?.message)
            }else{
                setSuccessMessage(res?.message)
                setTimeout(() =>  navigation.navigate('home'), 1000)
            }
        })
    }
    return(
        <View style={styles.container}>
            <StatusBar style = "auto" 
        translucent={false} 
        backgroundColor="#7393B3"> </StatusBar>
        <ItemSeprators height={30}/>
           <View style= {styles.headerContainer}>
           <Text style={styles.headerText}>Login</Text>
           <Feather name = "chevron-right" size={20} style ={styles.headerIcon} onPress = {()=>navigation.navigate("register")}/>
           </View>
           <ItemSeprators height={20} />
           <Text style = {styles.successText}>{successMessage}</Text>
           <Text style = {styles.mainSubHeaderText}>Welcome</Text>
           <ItemSeprators height={3} />
           <Text style = {styles.subHeaderText}>Enter Your Username and  and Password for Login</Text>
           <ItemSeprators height={30}/>
        <View style = {styles.inputTextContainer}> 
            <View style = {styles.inputSubTextContainer}>
                <Feather name ="user"  size={20} style = {styles.usernameIcon}/>
                <TextInput 
                placeholder="Username"
                placeholderTextColor={"gray"}
                selectionColor={"gray"}
                style = {styles.InputText}
                onChangeText = {text => setUsername(text)}
                />
            </View>
        </View>
        <ItemSeprators height={10}/>

        <View style = {styles.inputTextContainer}> 
            <View style = {styles.inputSubTextContainer}>
                <Feather name ="lock"  size={20} style = {styles.usernameIcon}/>
                <TextInput 
                placeholder="Password"
                secureTextEntry={isShow ? false:true}
                placeholderTextColor={"gray"}
                selectionColor={"gray"}
                style = {styles.InputText}
                onChangeText = {text => setPassword(text)}
                />
                <Feather name ={isShow ?"eye":"eye-off" } size={20} 
                style = {styles.eyIcon} onPress = {()=> setShow(!isShow)}/>
            </View>
        </View>
        <ItemSeprators height={5}/>
        <Text style = {{...styles.errorText , }}>{errorMessage}</Text>
            <TouchableOpacity activeOpacity={0.5} style = {styles.signInButton} onPress={()=>login()}>
                <Text style = {styles.signInButtonText}>Login</Text>
            </TouchableOpacity>
        <View style = {styles.footerContainer}>
            <Text style = {styles.footerText}>Dont have account ?</Text>
            <Text style = {styles.signupFooterText} onPress = {()=>navigation.navigate("register")}>Sign up</Text>
        </View >
        <ItemSeprators height={20} />
        <Text style = {styles.orText}>OR</Text>
        <ItemSeprators height={10} />

        <TouchableOpacity activeOpacity={0.5} style={styles.facebooksocialMediaContainer}>
            <View style = {styles.faceBookContainer}>
                <Image style ={styles.faceBookImage} source ={IMAGES.FACEBOOK} resizeMode="cover"></Image>
                <Text style = {styles.faceBookText}>Connect with facebook</Text>
            </View>
        </TouchableOpacity>
        <ItemSeprators height={10}/>
        <TouchableOpacity activeOpacity={0.5} style={styles.googlesocialMediaContainer}>
            <View style = {styles.faceBookContainer}>
                <Image style ={styles.googleImage} source ={IMAGES.GMAIL} resizeMode="cover"></Image>
                <Text style = {styles.faceBookText}>Connect withGoogle</Text>
            </View>
        </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:COLORS.BASIC_BACKGROUND
        },
        headerContainer:{
            flexDirection:"row",
            alignItems:"center",
            paddingVertical:10,
            paddingHorizontal:20,
        },
        headerText:{
            color:"black",
            textAlign:"center",
            width:setWidth(85),
            fontSize:20,
            fontFamily:"Roboto-Black"
            
        },
        headerIcon:{
            color:"black",
        },
        mainSubHeaderText:{
            color:"black",
            fontSize:15,
            marginHorizontal:20,
            fontFamily:"Roboto-Italic"
        },
        subHeaderText:{
            color:"black",
            fontSize:12,
            marginHorizontal:20,
        },

        inputTextContainer:{
            backgroundColor:"#D3D3D3",
            paddingHorizontal:8,
            marginHorizontal:20,
            borderRadius:10,
            borderColor:"gray",
            borderWidth:2,
            justifyContent:"center"

        },
        inputSubTextContainer:{
            flexDirection:"row",
            alignItems:"center",
            marginHorizontal:10,
            paddingHorizontal:5
        },
        usernameIcon:{
            color:"black",
            marginRight:5
        },
        eyIcon:{
            color:"black",
            marginLeft:setWidth(50)           
        },
        InputText:{
            fontSize:14,
            textAlign:"center",
            color:"black",
            fontStyle:"normal",
            fontSize:12,
            marginLeft:5
            
        },
        signInButton:{
            backgroundColor:"#088F8F",
            paddingVertical:10,
            borderRadius:10,
            marginHorizontal:20,
            marginTop:20,
            justifyContent:"center",
            alignItems:"center"
        },
        signInButtonText:{
            textAlign:"center",
            fontSize:15,
            color:"white"
        },

        footerContainer:{
            flexDirection:"row",
            marginHorizontal:20,
            paddingVertical:5,
            alignItems:"center",
            justifyContent:"center",
            height:40,

        },
        footerText:{
            color:"black",
            fontSize:15,
            marginHorizontal:10
        },
        signupFooterText:{
            color:"#0096FF",
            fontSize:15
        },
        orText:{
            color:"black",
            textAlign:"center",
            fontSize:20,
        },
        facebooksocialMediaContainer:{
            backgroundColor: "#3b5998",
            paddingVertical:15,
            marginHorizontal:20,
            borderRadius:8,
            alignItems:"center",
            justifyContent:"center",
        },
    
        faceBookContainer:{
            flexDirection:"row",
            textAlign:"center",
            fontSize:16,
        },
        faceBookImage:{
            height:20,
            width:40,
            marginHorizontal:10,
            right:setWidth(10)
        },
        faceBookText:{
            color:"white"
        },
        googlesocialMediaContainer:{
            backgroundColor:"#6082B6",
            paddingVertical:15,
            marginHorizontal:20,
            borderRadius:8,
            alignItems:"center",
            justifyContent:"center",
        },
        googleImage:{
            height:20,
            width:30,
            marginHorizontal:10,
            right:setWidth(10)
        },
        errorText:{
            color:"red",
            fontSize:12,
            marginHorizontal:25
        },
        successText:{
            color:"green",
            fontSize:15,
            marginHorizontal:25,
            textAlign:"center",
            shadowColor:"gray",        
        }
})


export default LoginScreen