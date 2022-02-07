import { View, Text, Button, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const styles = StyleSheet.create({
    logoContainer: {
        // flex: 1,
        marginTop: 80,
        flexDirection: 'row',
        // backgroundColor: '#022436',
        justifyContent: 'center',
        // alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // elevation: 2,
        // position: 'relative'
    },
    logo: {
        // flex: 1,
        // resizeMode: 'contain',
        height: 98,
        width: 374,
        // left: ',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
    container: {
        // flex:1,
        // backgroundColor:'red'
        // alignItems:'center',
        // justifyContent:'center'
    },
    container2: {
        // flex:1,
        // height:'40%',
        // backgroundColor:'red'
        // alignItems:'center',
        // justifyContent:'center'
    },
    item: {
        margin: 10,
        paddingLeft: 20,
        // flex:1,
        // paddingVertical:25,
        // paddingHorizontal:15,
        // flexDirection:'row',
        // justifyContent:'space-between',
        // borderBottomWidth:1,
        // borderBottomColor:'white',
    },
    name: {
        // flexShrink:1
    },
    title: {
        fontWeight: 'bold',
        margin: 10,
    },
    buttonContainer: {
        // width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
        // alignSelf:'center',
    },
    buttonWrapper: {
        width: 135,
    },
    inputContainer: {
        flexDirection: 'row',
        // backgroundColor:'red',
        // alignItems:'center'
        justifyContent: 'space-between',
        padding: 0,
        margin: 10
        // width: '70%',
    },
    textInput: {
            // flex:0,
        width: '50%',
        height: 50,
        maxWidth: 500,
        // textAlignVertical: 'center',
        // backgroundColor: '#022436',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 12,
        // width: '30%',
        // marginBottom: 20,
        paddingLeft: 10,
        //     // maxWidth: 834,
    },
    textField: {
        //     // flex:0,
        //     // width:440,
        // textAlignVertical: 'center',
        // backgroundColor: '#022436',
        // borderBottomWidth: 1,
        // borderColor: '#1F7AF8',
        //     width:'100%',
        // marginBottom: 20,
        // paddingLeft: 10,
        //     // maxWidth: 834,
    },
    formContainer: {
        // marginBottom: 50,
    },
    formRow: {
        //     // flex:0,
        //     // width:440,
        // flexDirection: 'row',
        // justifyContent:'space-around',
        alignItems: 'center',
        // textAlignVertical: 'center',
        // backgroundColor: '#022436',
        // borderBottomWidth: 2,
        // borderColor:'#1F7AF8',
        // width:'100%',
        // marginLeft: 20,
        // paddingLeft: 10,
        //     // maxWidth: 834,
    },
    markdownContainer: {
        paddingHorizontal: 10,
        // margin:0,
        // paddingTop:
        // borderBottomWidth: 2,
        // borderColor: '#1F7AF8',
    },
    textArea: {
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius:12,
        margin: 10,
        paddingLeft: 10,
        width: '50%',

    },
    thumbnail: {
        width: 300,
        height: 240,
        resizeMode: "contain"
    }
})