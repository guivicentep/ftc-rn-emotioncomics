import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
} from 'react-native';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import imgLogo from '../../../assets/logo_emotioncomics.png';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const loginFirebase = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert('Usuário logado com sucesso!!!');
            navigation.navigate("Home", { idUser: user.uid});
        })
        .catch((error) => {
            setErrorLogin(true)
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    useEffect(() => {

    }, []);

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >   
            <View style={styles.header}>
                <Image source={imgLogo} style={styles.imgLogo} />
            </View>
            <View style={styles.body}>
                <Text styles={styles.textInput}>E-mail</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="fulano@exemplo.com.br"
                    type="text"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Text styles={styles.textInput}>Senha</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="********"
                    type="text"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                {errorLogin === true
                ?
                    <View style={styles.contentAlert}>
                        <MaterialCommunityIcons 
                            name="alert-circle"
                            size={24}
                            color="#ff4040"
                        />
                        <Text style={styles.textWarning}>E-mail ou senha inválidos!</Text>
                    </View>
                :
                    <View />
                }
                <TouchableOpacity style={styles.buttonLogin} onPress={loginFirebase}>
                    <Text 
                        style={styles.textButtonLogin}
                        
                    >Entrar</Text>
                </TouchableOpacity>
                <View style={styles.helpButtonsContainer}>
                    <TouchableOpacity 
                        style={styles.helpButtons}
                        // onPress={() => navigation.navigate("NewUser")}    
                    >
                        <Text style={styles.textHelpButtons}>Esqueci a senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.helpButtons}
                        onPress={() => navigation.navigate("NewUser")}    
                    >
                        <Text style={styles.textHelpButtons}>Cadastro</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                    <Text style={styles.footerBigger}>Emotion Comics | 2022</Text>
                    <Text style={styles.footerLower}>Todos os direitos reservados</Text>
            </View>

            {/* Utilizado para criar um espaçamento entre o formulário e o teclado que irá abrir */ }
            <View style={{height:100}}/>
            
        </KeyboardAvoidingView>
    );
}