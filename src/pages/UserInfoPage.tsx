import React from 'react';

function UserInfoPage() {
  return (
    <div>
      <h1>User Information</h1>
      <form>
        <fieldset>
          <dl>
            <dt>id</dt>
            <dd>1</dd>
          </dl>
          <dl>
            <dt>name</dt>
            <dd>야옹이</dd>
          </dl>
          <dl>
            <dt>account</dt>
            <dd>imcat</dd>
          </dl>
          <dl>
            <dt>level</dt>
            <dd>1</dd>
          </dl>
          <button>Logout</button>
        </fieldset>
      </form>
    </div>

    // <Card>
    //   <Form>
    //     <UserInfo dt="" dd="" />
    //     <UserInfo dt="" dd="" />
    //     <UserInfo dt="" dd="" />
    //     <UserInfo dt="" dd="" />
    //     <Button>Logout</Button>
    //   </Form>
    // </Card>
  );
}

export default UserInfoPage;
