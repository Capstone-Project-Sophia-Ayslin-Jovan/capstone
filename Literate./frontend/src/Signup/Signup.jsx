'use client'

import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import { Modal, Button, Text, Input, Row, Checkbox, Spacer } from "@nextui-org/react";

const Signup = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button auto shadow onPress={handler}>
        Open modal
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Register with
            <Text b size={18}> 
            <Spacer/>
              Literate.
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
      <div className='form'>
        <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="First Name"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Last Name"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Username"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Confirm Password"
          />
        </div>
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Signup