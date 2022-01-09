import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, View} from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Colors from '../constants/Colors';
import Categories from '../Screens/Categories';
import favoutiteMeal from '../Screens/favoutiteMeal';
import categoryMeal from '../Screens/categoryMeal'
import mealDetails from '../Screens/mealDetails'
import Filter from '../Screens/Filters'
import HeaderButton from '../components/HeaderButton'
import { CATEGORIES } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { BlurView } from 'expo-blur';
import {Ionicons} from 'react-native-vector-icons'
const Stack = createNativeStackNavigator();
const BottomTab =  Platform.OS==='android' ? createBottomTabNavigator(): createMaterialBottomTabNavigator();
function MealNav(props) {
    return (
      
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: Platform.OS ==='android' ? Colors.primaryColor: '',
              headerShown:false,
            },
            headerTintColor: Colors.accentColor,
          }}
        >
          <Stack.Screen
          name="Categories" 
          component={Categories}
         />
          <Stack.Screen 
          name="CategoryMeal" 
          component={categoryMeal}
          options={
            ({ route }) => ({ title: route.params.title })}
          />
          <Stack.Screen 
          name="MealDetails" 
          component={mealDetails} 
          options={{
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent = {HeaderButton}>
                <Item 
                title = {'Favourite'}
                iconName = 'star'
                iconSize = {25}
                onPress = {()=>{
                  props.navigation.navigate("Favourites")
                }}
                />
              </HeaderButtons>
            ),
          }}
          />
        </Stack.Navigator>
        
     
    );
  }
  function FavStack(){
    return(
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS ==='android' ? Colors.primaryColor: '',
          
        },
        headerTintColor: Colors.accentColor,
      }}
      >
      <Stack.Screen name='Favourite Screen' component = {favoutiteMeal}>
      </Stack.Screen>
      <Stack.Screen name='Meal Detail' component = {mealDetails}>
      </Stack.Screen>      
      </Stack.Navigator>
    )

  }
  function FilterStack({navigation}){
    return(
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS ==='android' ? Colors.primaryColor: '',
          
        },
        headerTintColor: Colors.accentColor,
      }}
      >
      <Stack.Screen
      options={{
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent = {HeaderButton}>
            <Item 
            title = {'Favourite'}
            iconName = 'save-outline'
            iconSize={25}
            onPress = {()=>{
              console.log('Saved Filters')
            }}
            />
          </HeaderButtons>
        ),
      }} 
      name='Filter' component = {Filter}
      
      >
      </Stack.Screen>    
      </Stack.Navigator>
    )
  
  }
  function MealTabNav (){
    return(
        <NavigationContainer>
        <BottomTab.Navigator
        screenOptions={
          
        ({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Meals: 'ios-restaurant',
              Favourites: 'ios-star',
              Filters: 'color-filter-outline'
            }
            return (
              <Ionicons
                name={icons[route.name]}
                color={Colors.iconColor}
                size={30}
              />
            );
          },
          tabBarStyle: {
          backgroundColor:Colors.primaryColor,
          },
         
          tabBarActiveTintColor: Colors.iconColor,
          tabBarInactiveTintColor: Colors.iconColor,
          headerShown:false,
         
        })}
        
        >
        <BottomTab.Screen name='Meals' component = {MealNav}/>
        <BottomTab.Screen name='Favourites' component = {FavStack}/>
        <BottomTab.Screen name='Filters' component = {FilterStack}/>
        </BottomTab.Navigator>
        
        </NavigationContainer>
    )
    
  }
  export default MealTabNav;