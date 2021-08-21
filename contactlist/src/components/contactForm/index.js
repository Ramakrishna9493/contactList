import React, { useEffect } from 'react';
import { Form, Input, InputNumber, Modal } from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const ContactForm = (props) => {

    const [form] = Form.useForm()

    useEffect(() => {
        if (props.editContact !== null) {
            form.setFieldsValue(props.contactData)
        }
        else {
            form.resetFields()
        }
    })

    const onFinish = (e) => {
        if (props.editContact !== null) {
            props.updateContact(e)
        }
        else {
            props.addContact(e)
        }
    };

    const modalSubmit = () => {
        form.submit()
    }

    return (
        <Modal onOk={modalSubmit} visible={props.visible} onCancel={() => props.setModalVisible(false)}>
            <Form {...layout} form={form} onFinish={(e) => onFinish(e)}>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="mobileNumber"
                    label="mobileNumber"
                    rules={[
                        {
                            required: true,
                            type: 'number',
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    name="eMail"
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ContactForm