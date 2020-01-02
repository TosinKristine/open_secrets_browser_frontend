import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

const LoginModal = props => (
  <Modal trigger={<Button>Log In</Button>}>
    <Modal.Header>Log in to an existing account</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <form onSubmit={props.submitLogin}>
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
        </form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default LoginModal;
