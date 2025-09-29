import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';
import './ChatInput.css';

export function  ChatInput( { chatMessages, setChatMessages } ) {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    async function sendMessage() {
        if (isLoading || inputText === '') return;

        const userMessage = {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID(),
            time: dayjs().valueOf()
        };

        const loadingMessage = {
            message: <div className="loader"></div>,
            sender: 'bot',
            id: 'loading'
        };

        setIsLoading(true);
        setInputText('');

        // Add user message + loading spinner
        const newChatMessages = [...chatMessages, userMessage, loadingMessage];
        setChatMessages(newChatMessages);

        const response = await Chatbot.getResponseAsync(inputText);

        // Replace loading message with bot response
        const updatedMessages = newChatMessages
            .filter((msg) => msg.id !== 'loading') // remove loading
            .concat({
                message: response,
                sender: 'bot',
                id: crypto.randomUUID()
            });

        setChatMessages(updatedMessages);
        setIsLoading(false);
    }

    function OnKeyDown() {
        if(event.key === 'Enter'){
            sendMessage();
        } else if (event.key === 'Escape'){
            setInputText('');
        }
    }

    function clearMesssages() {
        setChatMessages([]);
    }
        
    return (
        <div className="chat-input-container">
            <input 
                placeholder="Send a message to Chatbot" 
                size="30" 
                onChange={saveInputText}
                value={inputText}
                onKeyDown={OnKeyDown}
                className="chat-input"
            />
            <button 
                onClick={sendMessage}
                className="send-button"
            >Send</button>
            <button
                onClick={clearMesssages}
                className="clear-button"
            >Clear</button>
        </div>
    );
}
