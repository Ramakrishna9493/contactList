import React from "react"
import { Button, Card, Col, Row } from "antd"
const ShowContact = (props) => {
    const editContact = () => {
        props.editIndex(props.index)
        props.modalVisible(true)
    }
    return (
        <Card style={{ position: "initial" }}>
            <Row justify="space-around">
                <Col>{props.contact.name}</Col>
                <Col>{props.contact.mobileNumber}</Col>
                <Col>{props.contact.eMail}</Col>
                <Col>
                    <Button onClick={() => editContact()}>
                        Edit
                    </Button>
                    <Button onClick={() => props.deleteContact(props.index)}>
                        Delete
                    </Button>
                </Col>
            </Row>
        </Card>
    )
}
export default ShowContact