import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact){
  return  <Card

  key={contact.id} // the required key for contact element

  name={contact.name}
  img={contact.imgURL}
  tel={contact.phone}
  email={contact.email}
  />
}



function App() {
  return (
    <div>
      
      <Avatar img="https://media-exp1.licdn.com/dms/image/C4D03AQGJxzFzoam_NA/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=NZcL0ENmX4_DfC3RLO-w14voVjsb-V3RL5WS2bbqDNg" />
      <h1 className="heading">My Contacts</h1>
      
      {contacts.map(createCard)}


      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
