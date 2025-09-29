import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import { Chatbot } from 'supersimpledev';
import ChatMessages from './components/ChatMessages';
import './App.css'

 function App() {
            //more destructured
            const [chatMessages, setChatMessages] =  useState([]);
           // const chatMessages = array[0]; current state
            //const setChatMessages = array[1]; function to update state
           // const [chatMessages, setChatMessages] = array; shorthand

            useEffect(() => {
                Chatbot.addResponses({
                    'tangina': 'tangina mo rin',
                    'gago': 'gago ka rin'
                });
            }, []);

            return (
                <div className="app-container">
                    {chatMessages.length === 0 && 
                        <p className="welcome-text"> 
                            Welcome to the chatbot project! Send a message using the textbox below.
                        </p>
                    }
                    <ChatMessages 
                        chatMessages={chatMessages}
                    />
                    <ChatInput 
                        chatMessages={chatMessages}
                        setChatMessages={setChatMessages}
                    />
                </div>
            );
        }      

export default App
