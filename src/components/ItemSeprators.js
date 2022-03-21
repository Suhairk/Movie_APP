import React from "react";
import {Text, View} from 'react-native'


const ItemSeprators = ({width, height})=>{
    return <View style ={{width, height}}></View>
}


ItemSeprators.defaultProps = {
    height:0,
    width:0
}


export default ItemSeprators