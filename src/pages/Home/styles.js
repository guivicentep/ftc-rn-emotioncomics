import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFFFF',
        paddingTop: Platform.OS === 'ios' ? 0 : 100,
    },
    header: {
        backgroundColor: '#061B1F',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgLogo: {
        height: 30,
        marginTop: '12%',
    },
    firstImage: {
        width: '100%',
        height: 210,
    },
    firstImageComic:{
        flex: 1,
        resizeMode: 'cover',
        height: 90,
        width: '100%',
        marginTop: 17,

    },
    card: {
        height: '100%',
        width: '100%',
        paddingBottom: 16,
        flexDirection: 'row',
        backgroundColor: 'rgba(6, 27, 31, 0.25)',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    textCard: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 32,
    },
    imgBackground: {
        width: '100%',
        height: 90,
    },
    buttonsCard:{
        justifyContent: 'center',
        flexDirection: 'row',
    },
    iconHeart: {
        marginTop: 10,
        borderRadius: 3,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    buttonLike: {
        marginRight: 10,
    },
    buttonPlay: {
        marginTop: 13,
        width: 90,
        height: 25,
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 28,
    },
    textPlay: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    continue: {
        width: '100%',
        height: 64,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContinue: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    imageCardComingSoon: {
        width: '100%',
        height: 200,
        marginBottom: 40,
    },
    cardComingSoon: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(6, 27, 31, 0.15)',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    firstComingSoonText: {
        marginTop: 160,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 32,
    },
    secondaryComingSoonText: {
        marginTop: 165,
        fontSize: 16,
        color: '#FFFFFF',
        marginRight: 28,
    },
    playFirstForm: {
        paddingHorizontal: 20,
        height: '100%',  
    },
    firstTextForm: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    secondaryTextForm: {
        fontSize: 13,
        marginBottom: 15,
    },
    formEnv: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    input: {
        width: '83%',
        fontSize: 13,
        height: 55,
        backgroundColor: '#C1C1C1',
        borderRadius: 3,
        paddingHorizontal: 15,
        marginRight: 5,
        marginTop: 8,
        marginBottom: 35,
    },
    button: {
        width: '16%',
        height: 55,
        backgroundColor: '#146066',
        alignItems: 'center',
        marginTop: 8,
        borderRadius: 5,
        justifyContent: 'center',

    }
});

export default styles;