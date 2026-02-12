//vite let us import any file even a CSS, img etc....
import { useState } from 'react'
import { ChatInput } from './components/ChatInput' //no need to add .jsx, vite will add it automatically
import './App.css' //./ means current folder
import ChatMessages from './components/ChatMessages'; //this is a defaul export since we didnt use {}


function App() {  

                //React.useState will update the chat msg in the html
        //React.useState (since we are importing we can just use useState) returns an array and it returns 2 values 
        //we are directly array destructuring as shown below as well
        const [chatMessages, setChatMessages] = useState([{
          //by having the const (set)chatMessages inside App is called lifting the state up
          //this allows for the const (set)chatMessages to be used by ChatInput
          message: 'hello chat',
          sender: 'user',
          id: 'id1'
        }, {
          message: 'this is bot msg',
          sender: 'robot',
          id: 'id2'
        }]);
      
        //const [chatMessages, setChatMessages] = array; //array destructuring does the same as the code below

        /*
        const chatMessages = array[0]; //gets the current value that we get from array of React.useState
        const setChatMessages = array[1]; // we use "set" as naming convetion to update the data AKA updater function
                                          //React.useState 2nd value it return is a function that updates the data
        */

        return(
        <div className="app-container">
          
          <ChatMessages 
            chatMessages={chatMessages}
          />
          <ChatInput //this allows ChatInput to use (set)chatMessages this would all need to be passed to the function
            chatMessages={chatMessages}
            setChatMessages = {setChatMessages}
          />

        </div>
        );
      }

export default App
