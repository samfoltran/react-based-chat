import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import Contacts from './Contacts.js';
import Chat from './Chat.js';

/**
 * Criar funcionalidade de adicionar mensagens
 * (como não há possibilidade, ainda, de interagir om outros users, 
 * adicionar uma mensagem para remetente, e outro destinatario, em sequencia)
 */

class Application extends React.Component{

    constructor(props){
        super(props);

        this.contactChange = this.contactChange.bind(this);

        this.state = {
            contact_key: null
        };
    }

    contactChange(user_key){
        this.setState({
            contact_key: user_key
        });
    }

    render(){
        return(
            <div>
                <Contacts
                    contactChange={this.contactChange}
                    active_user_key={this.state.contact_key}
                />
                <Chat
                    contact_key={this.state.contact_key}
                />
            </div>
        );
    }

}

const application = ReactDOM.createRoot(document.getElementById('root'));
application.render(
    <Application />
);