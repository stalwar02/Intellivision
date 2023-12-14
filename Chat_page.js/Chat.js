import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios'
import { View } from 'react-native';

const Chat = ({route,navigation}) => {
  const [messages, setMessages] = useState([]);
  const sendMess=async(question)=>{
    try{
      console.log(question)
      const response=await axios.post("http://192.168.1.6:3000/api/v1/ChattingPdf",{
        fileName:route.params.file,
        question:question
      })
      const serverResponse = {
        _id: Math.random(),
        text: response.data.result.text,
        createdAt: new Date(),
        user: {
          _id: 2, // server user ID
          name: 'Server',
        },
        userMessage: false, // Custom property to indicate server message
      };
      setMessages(previousMessages => GiftedChat.append(previousMessages, [serverResponse]));
      }
    catch (err){
      console.log(err.message)
    }
  }
  const onSend = newMessages => {
    
    // Add userMessage flag to indicate client-side messages
    const clientMessages = newMessages.map(message => ({
      ...message,
      userMessage: true,
    }));
    setMessages(previousMessages => GiftedChat.append(previousMessages, clientMessages));
    sendMess(newMessages[0].text)
      


  };

  return (
    <View style={{flex:1,backgroundColor:'black'}}>
    <GiftedChat
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{
        _id: 1, // client user ID
      }}
    />
    </View>
  );
};

export default Chat;
