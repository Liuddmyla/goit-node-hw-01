const { readFile, writeFile } = require('fs').promises;
const path = require('path');
const {nanoid} = require('nanoid');


const contactsPath = path.resolve('db','contacts.json');


async function listContacts() {
    try {
      const readResult = await readFile(contactsPath);         
      console.table(JSON.parse(readResult));
        
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
            console.table(contact);
          }
      })
        
    } catch (err) {
      console.log(err);
    } 
}

async function removeContact(contactId) {
  try {
      const readResult = await readFile(contactsPath);         
      const contacts = JSON.parse(readResult);

      const newContacts = contacts.filter(contact => contact.id !== contactId)
      console.table(newContacts);
    
    } catch (err) {
      console.log(err);
    } 
}

async function addContact(name, email, phone) {
  try {
      const readResult = await readFile(contactsPath);         
      const contacts = JSON.parse(readResult);
     
      const id = `${nanoid()}`;
      const newContact = { id, name, email, phone };
    
      contacts.push(newContact);

      await writeFile(contactsPath, JSON.stringify(contacts));      
      console.table(contacts); 
      
    
    } catch (err) {
      console.log(err);
    } 
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,  
};
