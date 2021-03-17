import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenA from '../views/ScreenA'
import ScreenB from '../views/ScreenB'
import ScreenC from '../views/ScreenC'
import StackSteps from '../components/StackSteps'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="ScreenA"
        screenOptions={{ headerShown: true }}>

        <Stack.Screen name="ScreenA"
            options={{ title: 'Initial Informations' }}>
            {props => (
                <StackSteps {...props} next="ScreenB">
                    <ScreenA />
                </StackSteps>
            )}
        </Stack.Screen>

        <Stack.Screen name="ScreenB" >
            {props => (
                <StackSteps {...props} next="ScreenC" previous  nextParams={{number: 1007}}>
                    <ScreenB />
                </StackSteps>
            )}
        </Stack.Screen>

        <Stack.Screen name="ScreenC" >
            {props => (
                <StackSteps {...props} previous next="ScreenC">
                    <ScreenC {...props}/>
                </StackSteps>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)