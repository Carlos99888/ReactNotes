import RobotProfileImage from '../assets/robot.png' //this is a default export no {} not needed "import Name from filepath"
import UserProfileImage from '../assets/user.png'   //we use ".." so that it goes out of folder and than look for assets>png

export function ChatMessage({message, sender}){

    // const message = props.message;
    // const sender = props.sender;

    // const {message, sender} = props;


    // if(sender==='robot')
    // {
    //   return(
    //     <div>
    //       <img src="robot.png" width="50" />
    //       {message}
            
    //   </div>
    //   );
    // }

    return(
        //we are using the ternary operator "? :" which is an if else operator
        //value ? value2 : value3 the "?" is if and ":" else 
        <div className={sender === 'user'
                        ? 'chat-message-user' 
                        : 'chat-message-robot'
                        }>
        {sender ==='robot' && (
            <img src={RobotProfileImage}
            className="chat-message-profile"/> //this attribute will allows us to CSS the profile
        )}
        <div className="chat-message-text">
            {message}
        </div>
        {sender === 'user' && (
            <img src={UserProfileImage}
            className="chat-message-profile"/>
        )}
        </div>
    );
}