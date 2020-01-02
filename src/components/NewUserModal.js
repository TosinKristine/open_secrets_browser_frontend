import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

const NewUserModal = props => (
  <Modal trigger={<Button>New User</Button>}>
    <Modal.Header>Create a new account</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <form onSubmit={props.submitLogin}>
          <label>
            Your name:
            <input
              type="text"
              name="name"
              value={props.newUserName}
              onChange={e => props.usernameChange(e)}
            ></input>
          </label>
          <label>
            Your email:
            <input
              type="text"
              name="email"
              value={props.newUserEmail}
              onChange={e => props.emailChange(e)}
            ></input>
          </label>
          <input type="submit" value="Create Account"></input>
        </form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default NewUserModal;
