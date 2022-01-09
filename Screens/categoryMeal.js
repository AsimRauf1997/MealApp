import React from 'react'
import { View, Text, StyleSheet,  } from 'react-native'
import {  MEALS } from '../data/dummy-data';
import MealList from '../components/MealList'
export default function categoryMeal(props) {
    
    const {CategoryID}  = props.route.params;
    const displayMeals = MEALS.filter(
        meal=> meal.categoryIds.indexOf(CategoryID)>=0
        );
    return (
        <MealList 
        listData = {displayMeals} 
        navigation = {props.navigation}/>
    )
}
const styles = StyleSheet.create({
    
})