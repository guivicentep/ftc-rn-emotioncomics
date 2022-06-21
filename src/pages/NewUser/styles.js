import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 26,
        width: '100%',
        backgroundColor: '#FFFFFF',
        paddingTop: Platform.OS === 'ios' ? 100 : 100,
    },
    header: {
        width: '95%',
        alignItems: 'center',
    },
    imgLogo: {
        resizeMode: "contain", 
        height: 120, 
        width: 100,
    },
    body: {
        marginTop: 10,
        textAlign: 'left',
        width: '95%',
    },
    textInput: {
        fontSize: 13,
    },
    input: {
        fontSize: 13,
        height: 48,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        paddingHorizontal: 15,
        marginTop: 8,
        marginBottom: 25,
    },
    confirmRules: {
        width: '95%',
        flexDirection: 'row',
    },
    textAccept: {
        width: '54%',
        fontSize: 12,
        textAlign: 'left'
    },
    buttonRegister: {
        backgroundColor: '#146066',
        height: 60,
        width: '45%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 8,
    },
    iconArrow: {
        color: "#FFFFFF"
    },
    footer: {
        width: '95%',
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerBigger: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#061B1F'
    },
    footerLower: {
        fontSize: 11,
        color: '#061B1F'
    },


});

export default styles;