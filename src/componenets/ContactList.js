import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

  const ContactList = (props) =>{

     const inputEL = useRef("");
    
    const deleteConactHandler = (id) => {
        props.getContactId(id);
    };

   
    const renderContactList = props.contacts.map((contact) => {
        return (
          <ContactCard
            contact={contact}
            clickHander={deleteConactHandler}
            key={contact.id}
          />
        );
    });

    const  getSearchTerm = () =>{
      props.searchKeyword(inputEL.current.value);

    }

    return(
      <div class = "main">
        <h2>
          Contact List
          <Link to="/add">
          <button className="ui button blue right" style={{float:'right'}}>Add Contact</button>
          </Link>
          
        </h2>
        <div className="ui search">
          <div className="ui icon input">
            <input 
              ref={inputEL}
              type="text" 
              placeholder="Search Contacts" 
              className="Prompt" 
              style ={{width:'1120px' }} 
              value={props.term} 
              onChange={getSearchTerm}
            />
            <i className="search icon"></i>

          </div>

        </div>
        <div className="ui celled list">{renderContactList.length > 0 ? renderContactList:"No contacts available"}</div>
      </div>

    ) ;
    
  };

export default ContactList;
