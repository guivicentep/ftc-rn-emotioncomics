import React from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, Image, TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
import firstImage from '../../../assets/capa_home.png';
import firstImageComic from '../../../assets/comic_1.png';
import secondImageComic from '../../../assets/comic_2.png';
import terthImageComic from '../../../assets/comic_3.png';
import comingSoonImage from '../../../assets/coming_soon.png';
import logo from '../../../assets/logo.png';


export default function Home({ navigation}) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imgLogo} source={logo}></Image>
            </View>
            <View style={styles.body}>
                <Image style={styles.firstImage} source={firstImage}></Image>
                <ImageBackground source={firstImageComic} style={styles.firstImageComic}>
                    <View style={styles.card}>
                        <Text style={styles.textCard}>LOOP</Text>
                        <View style={styles.buttonsCard}>
                            <TouchableOpacity style={styles.buttonLike}>
                                <MaterialCommunityIcons 
                                    name="cards-heart"
                                    size={25}
                                    color="#FFFFFF"
                                    style={styles.iconHeart}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonPlay} onPress={() => navigation.navigate("Content")}>
                                <Text style={styles.textPlay}>ASSISTIR</Text>
                                <MaterialCommunityIcons 
                                    name="play"
                                    size={24}
                                    color="#061B1F"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground source={secondImageComic} style={styles.firstImageComic}>
                    <View style={styles.card}>
                        <Text style={styles.textCard}>THE AWESOME</Text>
                        <View style={styles.buttonsCard}>
                            <TouchableOpacity style={styles.buttonLike}>
                                <MaterialCommunityIcons 
                                    name="cards-heart"
                                    size={25}
                                    color="#FFFFFF"
                                    style={styles.iconHeart}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonPlay}>
                                <Text style={styles.textPlay}>ASSISTIR</Text>
                                <MaterialCommunityIcons 
                                    name="play"
                                    size={24}
                                    color="#061B1F"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground source={secondImageComic} style={styles.firstImageComic}>
                    <View style={styles.card}>
                        <Text style={styles.textCard}>MEMORIES</Text>
                        <View style={styles.buttonsCard}>
                            <TouchableOpacity style={styles.buttonLike}>
                                <MaterialCommunityIcons 
                                    name="cards-heart"
                                    size={25}
                                    color="#FFFFFF"
                                    style={styles.iconHeart}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonPlay}>
                                <Text style={styles.textPlay}>ASSISTIR</Text>
                                <MaterialCommunityIcons 
                                    name="play"
                                    size={24}
                                    color="#061B1F"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground source={terthImageComic} style={styles.firstImageComic}>
                    <View style={styles.card}>
                        <Text style={styles.textCard}>LEAF</Text>
                        <View style={styles.buttonsCard}>
                            <TouchableOpacity style={styles.buttonLike}>
                                <MaterialCommunityIcons 
                                    name="cards-heart"
                                    size={25}
                                    color="#FFFFFF"
                                    style={styles.iconHeart}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonPlay}>
                                <Text style={styles.textPlay}>ASSISTIR</Text>
                                <MaterialCommunityIcons 
                                    name="play"
                                    size={24}
                                    color="#061B1F"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.continue}>
                    <Text style={styles.textContinue}>VEM POR AÍ...</Text>
                </View>
                <ImageBackground style={styles.imageCardComingSoon} source={comingSoonImage}>
                    <View style={styles.cardComingSoon}>
                        <Text style={styles.firstComingSoonText}>IKIDZUMARI</Text>
                        <Text style={styles.secondaryComingSoonText}>Setembro de 2022</Text>
                    </View>
                </ImageBackground>
               <View style={styles.playFirstForm}>
                    <Text style={styles.firstTextForm}>ASSISTA PRIMEIRO</Text>
                    <Text style={styles.secondaryTextForm}>Inscreva-se no formulário e fique por dentro dos lançamentos antes de todo mundo!</Text>
                    <View style={styles.formEnv}>
                        <TextInput
                            style={styles.input}
                            placeholder="Insira seu e-mail"
                            placeholderTextColor="#061B1F"
                            type="text"
                        ></TextInput>
                        <TouchableOpacity style={styles.button}>
                            <MaterialCommunityIcons 
                                name="arrow-right"
                                size={25}
                                color="#FFFFFF"
                                
                            />
                        </TouchableOpacity>
                    </View>
               </View>
            </View>
        </ScrollView>
    );
}