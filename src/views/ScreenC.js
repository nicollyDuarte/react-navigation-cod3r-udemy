import React from 'react'
import MainText from '../components/MainText'

export default props => {
    const r = props.route 
    const number = r && r.params && r.params.number ? props.route.params.number : 0
    return (
        <MainText backColor='#9932cd'>
            Screen C - {number}
        </MainText>
    )
}