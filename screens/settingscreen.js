import React from "react"
import {View,Text,StyleSheet, TextInput, TouchableOpacity} from "react-native"
import {Component}from "react"
import db from "../config"
import firebase from "firebase"
import MyHeader from "../components/MyHeader"
export default class Settingscreen extends Component{
    constructor(){
        super()
        this.state={emailID:"",firstname:"",lastname:"",adress:"",contact:"",docID:""}
    }
 getuserdetail=()=>{
     var email=firebase.auth().currentUser.email
    db.collection("users").where("email_ID","==",email).get().then(snapshot=>{

snapshot.forEach(doc=>{

    var data =doc.data()
    this.setState({emailID:data.email_ID,firstname:data.first_name,lastname:data.last_name,adress:data.address,contact:data.contact,docID:doc.id})
})

    })
    }
    updateuserdetail=()=>{

db.collection("users").doc(this.state.docID).update({

first_name:this.state.firstname,last_name:this.state.lastname,address:this.state.adress,contact:this.state.contact

})
Alert.alert("changes have been done succesfully ")

    }
    componentDidMount(){this.getuserdetail()}
    render(){
        
        return( 
        <View style={styles.container}>
            <MyHeader title="Settings" navigation={this.props.navigation}/>
            <View style={styles.formContainer}>
                <TextInput style={styles.formTextInput}
                placeholder={"firstName"}
                maxLength={10}
                onChangeText={(text)=>{this.setState({firstname:text})}}
                value={this.state.firstname}/>

                 <TextInput style={styles.formTextInput}
                placeholder={"lastname"}
                maxLength={10}
                onChangeText={(text)=>{this.setState({lastname:text})}}
                value={this.state.lastname}/>

<TextInput style={styles.formTextInput}
                placeholder={"contact"}
                maxLength={10}
                keyboardType={"numeric"}
                onChangeText={(text)=>{this.setState({contact:text})}}
                value={this.state.contact}/>

<TextInput style={styles.formTextInput}
                placeholder={"address"}
                multiline={true}
                onChangeText={(text)=>{this.setState({address:text})}}
                value={this.state.adsress}/>

                <TouchableOpacity style={styles.button}
                onPress={()=>{

this.updateuserdetail()

                }}><Text style={styles.buttonText}>save</Text></TouchableOpacity>
                 </View>
             </View>
        )
    
    
    
    
    
    }






}









const styles = StyleSheet.create({ container : { flex:1, alignItems: 'center', justifyContent: 'center' }, 
formContainer:{ flex:1, width:'100%', alignItems: 'center' },
 formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, }, 
 button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000",
  shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 },
   buttonText:{ fontSize:25, fontWeight:"bold", color:"#fff" } })



