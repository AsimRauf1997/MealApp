import React from 'react'
import { StyleSheet } from 'react-native'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data';

export default function favoutiteMeal(props) {
    const favMeals = MEALS.filter(
        meal=> meal.id ==='m1' || meal.id ==='m2'
        );
    return (
        <MealList listData = {favMeals} navigation = {props.navigation}/>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})