import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Screen3 = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>I am screen3</Text>
        </View>
    )
}

export default Screen3

const styles = StyleSheet.create({
    screen:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00000025',
    },
    text:{
        color:'#000',
        fontWeight:'700',
        fontSize:30
    }
})
