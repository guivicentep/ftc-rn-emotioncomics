import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    Alert
} from 'react-native';
import '../../config/firebase.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import styles from './styles';
import imgLogo from '../../../assets/logo_emotioncomics.png';

export default function NewUser({navigation}) {
    // const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    const registerFirebase = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert('Usuário registrado com sucesso!!!');
            navigation.navigate("Login");
        })
        .catch((error) => {
            console.log("DEU RUIM PAPAI");
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.header}>
                <Image style={styles.imgLogo} source={imgLogo}></Image>
            </View>
            <View style={styles.body}>
                <Text>Nome de usuário</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Fulano da Silva"
                    type="text"
                    // onChangeText={(text) => setUser(text)}
                    // value={user}
                />
                <Text>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="fulano@exemplo.com.br"
                    type="text"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Text>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="*******"
                    secureTextEntry={true}
                    type="text"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <Text>Confirmar senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="*******"
                    secureTextEntry={true}
                    type="text"                    
                    // onChangeText={(text) => setConfirmPassword(text)}
                    // value={confirmPassword}
                />                
            </View>
            <View style={styles.confirmRules}>
                <Text style={styles.textAccept}>Aceito ceder a minha alma para que este 
                    serviço me ofereça 
                    propagandas personalizadas
                </Text>
                <TouchableOpacity 
                    style={styles.buttonRegister}
                    onPress={registerFirebase}
                >
                <MaterialCommunityIcons 
                    size={35}
                    style={styles.iconArrow}
                    name="arrow-right"
                />
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                    <Text style={styles.footerBigger}>Emotion Comics | 2022</Text>
                    <Text style={styles.footerLower}>Todos os direitos reservados</Text>
            </View>
        </KeyboardAvoidingView>
    );
}