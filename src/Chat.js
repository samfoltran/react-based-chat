import React from 'react';
import ReactDOM from 'react-dom/client';
import './Chat.css';

import database_users from './database_users.json';

class Message extends React.Component{

    render(){
        let sender = 'other';
        if(this.props.data.myMessage == true){
            sender = 'me';
        }
        return(
            <div className='message-area'>
                <div className={`message sender-${this.props.data.sender}`}>
                    <p>{this.props.data.text}</p>
                    <div className='date'><p>{this.props.data.date}</p></div>
                </div>
            </div>
        );
    }

}

class Chat extends React.Component{

    render(){

        if(this.props.contact_key == null){
            return(
                <div id="chat">
                    <p className='empty-alert'>Não há mensagens selecionadas</p>
                </div>
            );
        }

        /**
         * Percorre o Json e o transforma em um Array
         */
        let chat = [];
        for(let user in database_users.users){
            if(database_users.users[user].key == this.props.contact_key){
                chat.push(database_users.users[user].conversation);
            }
        }

        let messages = [];

        for(let i = 0; i < chat.length; i++){
            let message = chat[i].map((message) => {
                
                message.sender = 'other';
                if(message.myMessage) message.sender = 'me';

                return <Message
                    key={message.key}
                    data={message}
                />
            });
            messages.push(message);
        }
        
        return(
            <div id="chat">
                <ul>
                    <li>
                        <div>
                            <div id='messages-area'>
                                {messages}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
        
    }

}

/*
const messages = ReactDOM.createRoot(document.getElementById('messages'));
messages.render(
    <Messages />
);
*/

export default Chat;