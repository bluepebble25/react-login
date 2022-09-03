import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <fieldset>
          <input placeholder="ID" />
          <FontAwesomeIcon icon={faUser} />
          <input placeholder="Password" />
          <FontAwesomeIcon icon={faLock} />
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <p>Incorrect ID or password</p>
          <button type="submit">Login</button>
        </fieldset>
      </form>
    </div>

    // <Card>
    //   <Form>
    //     <Input placeholder="ID" onChange={} />
    //     <Input placeholder="Password" onChange={} />
    //     { error && <ErrorMessage /> }
    //     <Button>Login</Button>
    //   </Form>
    // </Card>
  );
}

export default LoginPage;
