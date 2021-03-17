import React from 'react'
import { View, Text } from 'react-native'

export default props => (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.backColor || '#000', 
    }}>
        <Text style={{
            fontSize: 50,
            color: props.textColor || '#fff',
        }}>{props.children}</Text>
    </View>
)