import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

export default function List(props){

    const [logo, setLogo ] = useState(require('../img/like.png'))
    const [curtida, setCurtida] = useState(props.data.likers);

    function Curtir(){
       if (logo === require('../img/like.png')){
        setLogo(require('../img/likeada.png'))
        setCurtida(props.data.likers + 1)
        return;
       }
       if (logo === require('../img/likeada.png')){
        setLogo(require('../img/like.png'))
        setCurtida(curtida - 1)
        return;
       }
    }

    function mostraLikes(likers){
        if (likers === 0){
            return;
        }

        return(
            <Text style={styles.txtCurtida}> {likers} {likers === 1 ? 'curtida': 'curtidas' } </Text>
        );
    }





        return(
        
        
        <View>
           
           
            <View style={styles.viewPerfil}>
                <Image 
                source={ {uri: props.data.imgperfil} }
                style ={styles.fotoPerfil}
                />
                <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
            </View>
            
            <Image
            resizeMode='cover'
            source={ {uri: props.data.imgPublicacao} }
            style={styles.fotoPublicacao}
            />

           
            <View style={styles.areaBtn}>
                <TouchableOpacity onPress={ ()=> Curtir()  } >
                    <Image
                    source={logo}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>
                
                
                <TouchableOpacity style={styles.btnSend}>
                    <Image
                    source={require('../img/comment.png')}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>
               
               
                <TouchableOpacity style={styles.btnSend}>
                    <Image
                    source={require('../img/send.png')}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>
            </View>

           {mostraLikes(curtida)}

            <Text style={styles.nomeRodape}>
                {props.data.nome}
            </Text>

            <Text style={styles.nomeDescricao} >
                {props.data.descricao}
            </Text>

        </View>
    )
}








const styles = StyleSheet.create({
    viewPerfil:{
        flexDirection: 'row',
        flex:1,
        alignItems: 'center',
        padding: 8
    },
    fotoPerfil:{
        padding: 5,
        borderRadius: 25,
        height: 50,
        width: 50
    },
    nomeUsuario:{
        color:'#000',
        fontSize: 22,
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    fotoPublicacao:{
        height: 400,
        alignItems: 'center',
    },
    areaBtn:{
        flexDirection:'row',
        padding: 5

    },
    iconeLike:{
        width: 25,
        height: 25
    },
    btnSend:{
        paddingLeft: 5
    },
    txtCurtida:{
        marginLeft: 5,
        fontWeight:'bold',
        fontSize: 15,
        color:'#000'
    },
    nomeRodape:{
        fontSize: 16,
        color:'#000',
        fontWeight: 'bold',
        marginLeft: 5
    },
    nomeDescricao:{
        fontSize: 14,
        color:'#000',
        marginLeft: 5,
        marginBottom: 10
    }
});