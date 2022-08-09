import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header(){
    return(
        <View>
           
            <View style={styles.areaHeader}>
                
                <TouchableOpacity>
                    <Image
                    source={require('../img/logo.png')}
                    style={styles.logo}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                    source={require('../img/send.png')}
                    style={styles.send}
                    />
                </TouchableOpacity>



            </View>
       
       
       
       </View>
    );
}

const styles = StyleSheet.create({
    areaHeader:{
        flexDirection:'row',
        height: 55,
        backgroundColor:'#FFF',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 0.1,
        shadowColor: '#000',
        elevation: 3
    },
    send:{
        height: 23,
        width: 23
    }

})