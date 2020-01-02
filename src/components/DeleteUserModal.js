import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

const DeleteUserModal = props => (
  <Modal trigger={<Button>Delete Your Account</Button>}>
    <Modal.Header>Delete your account</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p>Are you sure you want to delete your account?</p>
        <button onClick={props.deleteConfirmation}>I'm Sure</button>
        {/* <form onSubmit={props.submitLogin}>
          <label>
            Your email:
            <input
              type="text"
              name="email"
              value={props.loggedInEmail}
              onChange={e => props.loginEmailChange(e)}
            ></input>
          </label>
          <input type="submit" value="Log In"></input>
        </form> */}
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default DeleteUserModal;
