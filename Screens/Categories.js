import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/categoryGridTile'

export default function Categories(props) {
    const renderGridItem = (itemData)=>{
        return (
            <CategoryGridTile 
            title = {itemData.item.title}
            color = {itemData.item.color}
            onSelect={()=> 
                props.navigation.navigate("CategoryMeal",{
                    CategoryID: itemData.item.id,
                    title:itemData.item.title
                })}
            />
        )
    }
    return (
            <View>
            <FlatList 
            data = {CATEGORIES} 
            renderItem={renderGridItem} 
            numColumns={2}
            />
            </View>
            
       
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    
})