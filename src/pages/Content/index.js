import React from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, Image, TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

import comingSoonImage from '../../../assets/coming_soon.png';
import logo from '../../../assets/logo.png';

export default function Content() {
    return (
        <View>
            <View style={styles.header}>
                <Image style={styles.imgLogo} source={logo}></Image>
            </View>
            <ImageBackground source={comingSoonImage} style={styles.imageVideo}>
                <View style={styles.video}>
                    <TouchableOpacity style={styles.buttonVideo}>
                        <Text>ASSISTIR</Text>
                        <MaterialCommunityIcons 
                                    name="play"
                                    size={25}
                                    color="#061B1F"
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={styles.description}>
                <Text style={styles.firstText}>NOME DA COMIC</Text>
                <Text style={styles.secondaryText}>AUTOR | DATA</Text>
                <Text style={styles.thirdText}>Uma breve descrição da obra, além de um pouco da vida do autor no momento da 
                     criação e o que mais for interessante para situar o leitor,
                     recomendando a leitura.
                </Text>
                    <TouchableOpacity style={styles.buttonTrailer}>
                        <Text>VER TRAILER</Text>
                        <MaterialCommunityIcons 
                                    name="play"
                                    size={25}
                                    color="#061B1F"
                        />
                    </TouchableOpacity>
            </View>

        </View>
    )
}