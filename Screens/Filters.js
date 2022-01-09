import React, {useState, useCallback, useEffect} from 'react'
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

export default function Filters({navigation}) {
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const saveFilter = useCallback(() =>{
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            Vegan: isVegan,
            Vegetarian: isVegetarian
        }
        console.log(appliedFilters)
    
    },[isGlutenFree,isLactoseFree, isVegan, isVegetarian])
    useEffect(()=>{
        navigation.setParams({save: saveFilter})
    },[saveFilter])
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Avialable Filters/Restrictions</Text>
            <FilterSwitch 
            label = 'Gluten-Free'
            state = {isGlutenFree}
            onChange = {(newval)=> setIsGlutenFree(newval)}
            /> 
            <FilterSwitch 
            label = 'Lactose-Free'
            state = {isLactoseFree}
            onChange = {(newval)=> setIsLactoseFree(newval)}
            /> 
            <FilterSwitch 
            label = 'Vegan'
            state = {isVegan}
            onChange = {(newval)=> setIsVegan(newval)}
            /> 
            <FilterSwitch 
            label = 'Vegetarian'
            state = {isVegetarian}
            onChange = {(newval)=> setIsVegetarian(newval)}
            /> 
            <TouchableOpacity onPress={saveFilter} style = {styles.savebtn}>
                <Text style = {styles.btnText}>Save Filters</Text>
            </TouchableOpacity>
        </View>
    )
}
const FilterSwitch = props =>(
    <View style = {styles.FilterContainer}>
        <Text style = {{fontFamily:'open-sans-bold'}}>{props.label}</Text>
        <Switch 
                trackColor={{true:Colors.primaryColor,
                
                }}
                thumbColor={Colors.primaryColor}
                value= {props.state}
                onValueChange={props.onChange}
                />
    </View>
)
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
        
    },
    FilterContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'80%',
        marginVertical:20,

    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        margin:20,
        textAlign:'center',
        
    },
    savebtn:{
        width:'40%',
        height:50,
        backgroundColor:Colors.primaryColor,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,

    },
    btnText:{
        fontFamily:'open-sans-bold',
        fontSize:15,
    }
})