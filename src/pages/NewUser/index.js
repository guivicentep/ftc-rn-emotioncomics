import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

export default function NewUser() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.header}>
                <Image></Image>
            </View>
            <View style={styles.body}>
                <Text>Nome de usuário</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Fulano da Silva"
                    type="text"
                    onChangeText={(text) => setUser(text)}
                    value={user}
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
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                />                
            </View>
            <View style={styles.confirmRules}>
                <Text>Aceito ceder a minha alma para que este 
                    serviço me ofereça 
                    propagandas personalizadas
                </Text>
                <TouchableOpacity style={styles.buttonRegister}>
                <MaterialCommunityIcons 
                            name="arrow-right"
                            size={24}
                            color="#FFFFFF"
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