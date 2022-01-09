import React from 'react'
import { 
    View, 
    Text,
    ImageBackground, 
    StyleSheet,Platform, 
    TouchableOpacity, 
    TouchableNativeFeedback } from 'react-native'


export default function mealItem(props) {
    let TouchableCmp = TouchableOpacity;
    if(Platform.OS=== 'android' && Platform.Version>= 21 ){
        TouchableCmp = TouchableNativeFeedback;
    } 
    return (
        <View style = {styles.mealItem}>
            <TouchableCmp onPress={props.onSelectMeal}>
            <View>
            <View style = {{...styles.mealRow, ...styles.mealHeader}}>
                <ImageBackground
                 source = {{uri: props.image}}
                 style = {styles.bgImage}
                 >
                     <View style = {styles.titleContainer}>
                     <Text style = {styles.title}> {props.title}</Text>
                     </View>
              
              </ImageBackground>
            </View>
            <View style = {{...styles.mealRow, ...styles.mealDetail}}>
                <Text style= {styles.text} >{props.duration}m</Text>
                <Text style= {styles.text}>{props.complexity.toUpperCase()}</Text>
                <Text style= {styles.text} >{props.affordability.toUpperCase()}</Text>
            </View>
       </View>
        </TouchableCmp>
        </View>
        
       
    )
}
const styles = StyleSheet.create({
    mealRow:{
        flexDirection:'row'
    },
    mealItem:{
        height:300,
        marginBottom:10,
        width:'100%',
        backgroundColor:'#ccc',
        overflow:'hidden'

    },
    mealHeader:{
        height:'85%'
    },
    mealDetail:{
        height:'15%',
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        color:'white',
        textAlign:'center'
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingHorizontal:12,
        paddingVertical:5,
    },
    text:{
        fontFamily:'open-sans-bold'
    }
})