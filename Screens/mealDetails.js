import React from 'react'
import { ScrollView ,View, Text, Image, StyleSheet, Button } from 'react-native'
import { MEALS } from '../data/dummy-data';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function mealDetails(props) {
    const {mealID} = props.route.params;
    const selectedMeal = MEALS.find(meal=> meal.id === mealID)
    return (
        <ScrollView>
            <Image 
            style = {styles.image}
            source={{uri:selectedMeal.imageURL}}/>
            <View style = {styles.details}>
                <Text style= {styles.text} >{selectedMeal.duration}m</Text>
                <Text style= {styles.text}>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style= {styles.text} >{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style = {styles.title}>Ingridients</Text>
            {selectedMeal.ingredients.map(ingredient =>(
            <View style = {styles.listItem}>
            <Text style={{fontFamily:'open-sans'}} key={ingredient} >{ingredient}</Text>
        </View>
        )
                
            )}
            <Text style = {styles.title}>Steps.......</Text>
            {selectedMeal.steps.map(step =>(
                <View style = {styles.listItem}>
                    <Text style={{fontFamily:'open-sans'}} key={step} >{step}</Text>
                </View>
            )
        )}
        </ScrollView>
        
    )
}
const styles = StyleSheet.create({
    text:{
        fontFamily:'open-sans-bold'
    },
    image:{
        width:'100%',
        height:250,
        borderBottomEndRadius:20
    },
    details:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-around',
        backgroundColor:'#ccc',
    },
    title:{
        textAlign:'center',
        fontFamily:'open-sans-bold',
        fontSize:22,

    },
    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1
    }

})