import { Form } from "semantic-ui-react";
import { useState } from "react";

export default (props) => {
  const [name, setName] = useState("sdf");
  const [nicname, setNicName] = useState("we");
  const handleSubmit = (e) => {
    props.addUser({ name: name, nickname: nicname });
  };
  return (
    <>
      <h1>Players Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          value={name}
          label="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Form.Input
          value={nicname}
          label="nicname"
          onChange={(e) => {
            setNicName(e.target.value);
          }}
        />
        <Form.Button>add</Form.Button>
      </Form>
    </>
  );
};
