import { Button } from 'antd'
import React from 'react'
import "./index.css"
const HeaderComponent = props => {
    return (
        <div className="container-header">
            Contacts
            <header>
                <Button onClick={() => props.modalVisible(true)} style={{ marginLeft: "100px" }}>Add New Contact</Button>
            </header>
        </div>
    )
}
export default HeaderComponent