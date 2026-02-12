import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css'

//the export keyword allows so that we can use it in another file
export function ChatInput({chatMessages, setChatMessages}) {
    const [inputText, setInputText] = useState('');

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    function sendMessage() {
        const newChatMessages = [
        ...chatMessages, //... spread operate, takes values from array and copies them in a new array
    
            //after creating a copy then we want to add a new chat msg at the end of the copy
            //b/c we want to send a new msg, as shown below
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }
        ]
        setChatMessages(newChatMessages);

        /*
        states does not update immediately only after the code is finished this could lead to 
        the first msg not geing displayed but only the robot, so one way to fix this is to 
        save the msg into a varible which we did by using "const newChatMessages" and passed to
        setChatMessages() as shown above.
        
        and below instead of making  a copy of chatMessages we make a copy of newChatMessages
        this way it has our msg and the robot's message
        */
       const response = Chatbot.getResponse(inputText);
        setChatMessages([
        ...newChatMessages, //... spread operate, takes values from array and copies them in a new array
    
        //after creating a copy then we want to add a new chat msg at the end of the copy
        //b/c we want to send a new msg, as shown below
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);

        setInputText(''); //this sets the input box empty after user types
    }

    return (
        //we created className chat-input-container so that we can use flex (flex can only we used in div not in fragmented divs)
        <div className="chat-input-container"> 
        <input 
            placeholder="Send a message to Chatbot" 
            size="30"
            onChange={saveInputText} // is an event funcion 
            value={inputText} //we can control the input box, by setting to empty after user sends msg
            className="chat-input"
        />
        <button
            onClick={sendMessage}
            className="send-button" //in react we use className to set the class, this will allow us 
                                //to specificly change the color for this button
        >Send</button>
        </div>
    );
}
