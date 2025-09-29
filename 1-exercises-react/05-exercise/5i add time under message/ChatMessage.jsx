import './ChatMessage.css';
import dayjs from 'dayjs';

export function ChatMessage({ message, sender, time }) {
    // const { message, sender } = props;
    return (
        <div className={
            sender === 'user' 
            ? 'chat-message-user' 
            : 'chat-message-bot'
        }>
            {
            sender === 'bot' &&  (
                <i className="fa-solid fa-robot fa-3x"></i>
            )}
            <div className="chat-message-text">
                {message}
                {
                    <div className="message-time">
                        {dayjs(time).format('h:mma')}
                    </div>
                }
            </div>
            {sender === 'user' && (
                <i className="fa-solid fa-circle-user fa-3x"></i>
            )}
        </div>
    );
}