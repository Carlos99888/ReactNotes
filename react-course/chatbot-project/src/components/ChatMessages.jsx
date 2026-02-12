import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css'

function ChatMessages({chatMessages}) {
  //create const chatMessagesRef so that we can use in useEffect
  const chatMessagesRef = useRef(null); //creates a ref with contonainters with react features

  //below is a hook, let us insert react features into components (same as useState())
  //this allow us to run some code after the component is created or updated
  useEffect(() => {
    const containerElem = chatMessagesRef.current
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight //the right side is how far from the top should we scroll
                                                            //scrollHeight gives us the height of the elemnt which should
                                                            //scroll all the way down. this will allow us to scroll down
                                                            //automatically if we send a new message in the box
    }
  }, [chatMessages]); //best practive is to give a Dependency Array, to control when useEffect runs
                      //to avoid running it too often
  
  
  return(
    <div className="chat-messages-container"
      ref={chatMessagesRef} //create ref so that we can references so that we can use it in useEffect
    >
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  )
}

export default ChatMessages; //this a default export, useful if you want to export one thing from a file