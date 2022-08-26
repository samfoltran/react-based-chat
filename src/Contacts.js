import React from 'react';
import ReactDOM from 'react-dom/client';
import './Contacts.css';

import database_users from './database_users.json';

class Contact extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <li>
                <a
                    onClick={() => {this.props.contactChange(this.props.data.key)}}
                    className={this.props.active}
                >
                    <img src={`pictures/${this.props.data.picture}`} />
                    <p>{this.props.data.name}</p>
                    <div className="clear"></div>
                </a>
            </li>
        );
    }

}

class Contacts extends React.Component{

    constructor(props){
        super(props);
    }

    contactChange = (user_key) => {
        this.props.contactChange(user_key);
    }

    render(){

        /**
         * Percorre o Json e o transforma em um Array
         */
        let users = [];
        for(let user in database_users.users){
            users.push(database_users.users[user]);
        }

        /**
         * Percorre o Array e prepara 'contacts' para ser exibido
         */
        const contacts = users.map((contact) => {
            let active = '';
            if(this.props.active_user_key == contact.key) active = 'active';

            return <Contact
                key={contact.key}
                data={contact}
                contactChange={this.contactChange}
                active={active}
            />
        });

        return(
            <div id="contacts">
                <ul>
                    {contacts}
                </ul>
            </div>
        );
    }

}

export default Contacts;