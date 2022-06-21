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
    imageVideo: {
        width: '100%',
        height: 300,
    },
    
    video: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(6, 27, 31, 0.4)',
        alignItems: 'center',
    },
    buttonVideo: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: 40,
        borderRadius: 3,
        paddingHorizontal: 30,
        marginTop: 240,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textButtonVideo: {
        marginRight: 5,
    },
    description: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    firstText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
    },
    secondaryText: {
        fontSize: 14,
        marginBottom: 30,
    },
    thirdText: {
        fontSize: 14,
        textAlign: 'center',
    },
    buttonTrailer: {
        backgroundColor: '#E5E5E5',
        width: '90%',
        height: 40,
        borderRadius: 3,
        paddingHorizontal: 30,
        marginTop: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },

});

export default styles;