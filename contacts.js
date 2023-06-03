const {readFile, writeFile} = require('fs').promises;
const path = require('path');

const contactsPath = path.join('db','contacts.json');


async function listContacts() {
    try {
      const readResult = await readFile(contactsPath);         
      console.log(JSON.parse(readResult));
        
    } catch (err) {
      console.log(err);
    }    
}

async function getContactById(contactId) {
  try {
      const readResult = await readFile(contactsPath);         
      const contacts = JSON.parse(readResult);

      contacts.find(contact => {
          if (contact.id === contactId) {
            console.log(contact);
          }
      })
        
    } catch (err) {
      console.log(err);
    } 
}

async function removeContact(contactId) {
  // try {
  //     const readResult = await readFile(contactsPath);         
  //     const contacts = JSON.parse(readResult);

  //     contacts.find(contact => {
  //         if (contact.id === contactId) {
  //           console.log(contact);
  //         }
  //     })
        
  //   } catch (err) {
  //     console.log(err);
  //   } 
}

function addContact(name, email, phone) {
  // ...твій код
}


// listContacts();
// getContactById("rsKkOQUi80UsgVPCcLZZW");

