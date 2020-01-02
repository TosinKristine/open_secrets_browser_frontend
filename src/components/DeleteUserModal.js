import React from "react";
import { Button, Modal } from "semantic-ui-react";

const DeleteUserModal = props => (
  <Modal trigger={<Button>Delete Your Account</Button>}>
    <Modal.Header>Delete your account</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p>Are you sure you want to delete your account?</p>
        <button onClick={props.deleteConfirmation}>I'm Sure</button>        
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default DeleteUserModal;
