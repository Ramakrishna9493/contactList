import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'antd';
import HeaderComponent from '../components/header';
import ShowContacts from '../components/showContacts';
import ContactForm from "../components/contactForm"
import ShowContact from '../components/showContacts';

const ContactsComponent = () => {
    const [contactsList, setContactsList] = useState([{ "name": "abc", "mobileNumber": 99999, "eMail": "abc@abc.com" }, { "name": "xyz", "mobileNumber": 99999, "eMail": "xyz@xyz.com" }])
    const [modalVisible, setModalVisible] = useState(false)
    const [showContacts, setShowContacts] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        displayContacts()
    }, [contactsList, modalVisible])

    const addContact = (contact) => {
        console.log(editIndex)
        var contacts = contactsList
        contacts.push(contact)
        setContactsList(contacts)
        setModalVisible(false)
    }

    const updateContact = (contact) => {
        var contacts = contactsList
        contacts[editIndex] = contact
        setContactsList(contacts)
        setModalVisible(false)
        setEditIndex(null)
    }

    const deleteContact = (index) => {
        var contacts = contactsList
        contacts.splice(index, 1)
        setContactsList(contacts)
        displayContacts()
    }

    const displayContacts = () => {
        var contacts = contactsList.map((contact, index) => {
            return (
                <ShowContact
                    contact={contact}
                    index={index}
                    deleteContact={deleteContact}
                    modalVisible={setModalVisible}
                    editIndex={setEditIndex}
                >
                </ShowContact>
            )
        })
        setShowContacts(contacts)
    }

    return (
        <div>
            <HeaderComponent modalVisible={setModalVisible}></HeaderComponent>
            <Card style={{ position: "initial" }}></Card>
            {showContacts}
            <ContactForm
                visible={modalVisible}
                setModalVisible={setModalVisible}
                addContact={addContact}
                updateContact={updateContact}
                editContact={editIndex}
                contactData={editIndex !== null ? contactsList[editIndex] : ""}
            >
            </ContactForm>
        </div>
    )
}
export default ContactsComponent