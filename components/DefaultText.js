import React from 'react'
import { Text, StyleSheet} from 'react-native'

export default function DefaultText(props) {
    return (
            <Text style = {styles.text}>{props.childern}</Text>
    )
}
const styles = StyleSheet.create({
    text:{
        fontFamily:'open-sans-bold',
    }
})