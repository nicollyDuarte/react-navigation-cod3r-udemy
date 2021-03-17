import React from 'react'
import { Button, View } from 'react-native'
import MainText from '../components/MainText'

export default props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button
                    title='Open'
                    onPress={() => props.navigation.openDrawer()}
                />
                <Button
                    title='Close'
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                            setInterval(() => {
                                props.navigation.toggleDrawe()
                            }, 1000)
                        }, 3000)
                    }}
                />
            </View>

            <View style={{ flex: 1 }}>
                <MainText backColor='#33fa72' textColor='#000'>
                    Screen D
                </MainText>
            </View>
        </View>

    )
}