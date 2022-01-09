import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from './mealItem'

export default function MealList(props) {
    const renderMealItem = (itemData) =>{
        return(
            <MealItem 
            title = {itemData.item.title}
            image = {itemData.item.imageURL}
            duration = {itemData.item.duration}
            complexity = {itemData.item.complexity}
            affordability = {itemData.item.affordability}
            onSelectMeal = {()=>{
                props.navigation.navigate("MealDetails",{
                    mealID: itemData.item.id,
                    title: itemData.item.title
                })
            }} />
        )
    } 
    return (
        <View style = {styles.list}>
        <FlatList 
        style = {{width:'100%'}}
        data={props.listData} 
        renderItem ={renderMealItem} 
        keyExtractor={(item, index)=> item.id}/>
        </View>
    )
}
const styles =StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
