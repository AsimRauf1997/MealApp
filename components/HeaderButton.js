import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import {Ionicons} from 'react-native-vector-icons'
import Colors from '../constants/Colors'
import { Platform } from 'react-native';

const CustomHeaderButton = (props) => {
    return <HeaderButton 
            {...props}
            IconComponent = {Ionicons}
            IconSize = {25}
            color = {Platform.OS === 'android' ? 'white': Colors.primaryColor}

            />
};
export default CustomHeaderButton

