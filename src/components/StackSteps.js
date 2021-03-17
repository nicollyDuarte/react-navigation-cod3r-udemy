import React from 'react'
import { View, Button } from 'react-native'

export default props => (
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {props.previous ? <Button
                title='Previous'
                onPress={() => {
                    props.navigation.goBack()
                }} /> : false}

            {props.next ? <Button
                title='Next'
                onPress={() => {
                    props.navigation.navigate(props.next, props.nextParams)
                }}
            />
                : false}
        </View>
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    </View>
)