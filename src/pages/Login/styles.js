import { Platform, StyleSheet } from "react-native";
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
        marginBottom: 35,
    },
    contentAlert: {
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textWarning: {
        marginLeft: 10,
    },
    buttonLogin: {
        backgroundColor: '#146066',
        height: 60,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButtonLogin: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    helpButtonsContainer: {
        marginTop: 52,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    helpButtons: {
        width: '49%',
        height: 40,
        borderColor: '#146066',
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHelpButtons: {
        fontSize: 13,
        color: '#061B1F',
    },
    footer: {
        width: '95%',
        marginTop: 140,
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