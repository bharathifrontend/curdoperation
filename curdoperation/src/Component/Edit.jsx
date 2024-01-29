import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "C:/Users/SANTHOSH/React/curdoperation/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Students from "./Students";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
function Edit() {
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [id, setId] = useState("");
  let history = useNavigate();
  var index = Students.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    let a = Students[index];
    a.Name = name;
    a.Batch = batch;
    history("/");
  };
  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setBatch(localStorage.getItem("Batch"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter the Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBatch">
          <Form.Control
            type="text"
            placeholder="Enter the Batch"
            value={batch}
            required
            onChange={(e) => setBatch(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
