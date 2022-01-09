import React from 'react'
import { View, 
    Text,
    TouchableOpacity, 
    TouchableNativeFeedback ,
    StyleSheet,
    Platform 
} from 'react-native'
export default function categoryGridTile(props) {
    let TouchableCmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version>= 21 ){
        TouchableCmp = TouchableNativeFeedback;
    } 
    return (
        <View style = {styles.gridItem} >
            <TouchableCmp 
            onPress={props.onSelect}
            >
        <View style = {{ ...styles.container, ...{backgroundColor:props.color}}}>
            
            <Text style = {styles.titleText} numberOfLines={2}>{props.title}</Text>
            
            
            </View>
            </TouchableCmp>
        </View>
        
           
    )
}
const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:20,
        height:150,
        borderRadius:10,
        elevation:5,
       overflow:Platform.OS ==='android'? 'hidden' :'visible'
    },
    titleText:{
        fontFamily: 'open-sans-bold',
        fontSize:20,
       
        
    },
    container:{
        flex:1,
        borderRadius:12,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{widht:0, height:2},
        shadowRadius:10,
        padding:15,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    }
})
