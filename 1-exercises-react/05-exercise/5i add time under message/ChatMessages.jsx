import { ChatMessage } from './ChatMessage'
import { useAutoScroll } from '../hooks/AutoScroll';
import dayjs from 'dayjs';
import './ChatMessages.css';

function ChatMessages( {chatMessages} ) {

    const chatMessagesRef  = useAutoScroll([chatMessages]);

    
    return (
        <div 
            className="chat-messages-container"
            ref={chatMessagesRef}
        >
            {chatMessages.map((chatMessage) => {
            return (
                <ChatMessage 
                    message={chatMessage.message}
                    sender={chatMessage.sender}
                    key={chatMessage.id}
                    time={chatMessage.time}
                />
            )
            })}
        </div>
    )
}

export default ChatMessages;