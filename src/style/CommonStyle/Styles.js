import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const commonStyle = StyleSheet.create({
    mainContainer: {
        height: 50,
        width: "100%",
        backgroundColor: "white",
    },
    container: {
        padding: 10,
    },
    Input: {
        //flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
    },
    imageContainer: {
        height: 30,
        width: windowWidth * 0.3,
        alignSelf: 'auto',
    },
    todoList: {
        fontSize: 20,
        marginVertical: 30,
        width: windowWidth,
        color: 'purple',
        fontWeight: 'bold',
        textShadowColor: 'purple',
        textShadowRadius: 2,
        textAlign: 'center',
    },
    field: {
        borderColor: 'black',
        borderWidth: 1,
        width: windowWidth * 0.9,
        borderRadius: 15,
        //paddingLeft: 20,
        padding: 15,
    },
    field1: {
        borderColor: 'black',
        borderWidth: 1,
        width: windowWidth * 0.9,
        borderRadius: 15,
        //paddingLeft: 20,
        padding: 15,
        backgroundColor: 'black',
    },
    plusStyle: {
        fontSize: 20,
        textAlign: 'center',
        //marginTop: 10,
        fontWeight: 'bold',
        right: 5,
        color: 'white',
        
    },
    plusStyle1: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '400',
    },
    renderView: {
        borderColor: 'black',
        borderWidth: 1,
        width: "92%",
        borderRadius: 40,
        paddingLeft: 20,
        padding: 15,
        marginTop: 20,
        margin: 10,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: 'pink',
    },
    todo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        marginTop: 30,
    },
    todoText: {
        fontSize: 16,
    },
    swipeButtonStyle: {
        flexDirection: 'row', width: '100%',
        marginVertical: 10,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between',
        height: 60,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    renderContainer: {
        height: 150,
        marginVertical: 20,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        paddingLeft: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    editButton : {
        backgroundColor: 'green', 
        height: 35, 
        width: 100, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 30 
    },
    deleteButton :{
        backgroundColor: 'red', 
        height: 35, 
        width: 100, 
        justifyContent: 'center', 
        alignItems: 'center' ,
        borderRadius: 30,
    },
    textRender :{
        justifyContent: 'space-between',
    },
    buttonStyle : {
       justifyContent: 'space-between',
    },
    TextInputStyle : {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
    },
    buttonText : {
        color: 'white',
    }
})
