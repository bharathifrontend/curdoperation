import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "C:/Users/SANTHOSH/React/curdoperation/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Students from "./Students";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueId = ids.slice(0, 9);
    let a = name,
      b = batch;
    Students.push({ id: uniqueId, Name: a, Batch: b });

    history("/");
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter the Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBatch">
          <Form.Control
            type="text"
            placeholder="Enter the Batch"
            required
            onChange={(e) => setBatch(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Add;
