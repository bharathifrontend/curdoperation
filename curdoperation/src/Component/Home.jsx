import React, { Fragment, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "C:/Users/SANTHOSH/React/curdoperation/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Students from "./Students";
import { Link, useNavigate } from "react-router-dom";
import Studentmodel from "./Studentmodel";
function Home() {
  const [modal, setModal] = useState(false);
  let history = useNavigate();

  const closeModal = () => {
    setModal(false);
  };

  const handleEdit = (id, name, batch) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Batch", batch);
    localStorage.setItem("Id", id);
  };

  const handleCreate = () => {
    setModal(true);
  };

  const handleDelete = (id) => {
    var index = Students.map(function (e) {
      return e.id;
    }).indexOf(id);
    Students.splice(index, 1);
    history("/");
  };
  return (
    <Fragment>
      <div style={{ marigin: "10rem" }}>
        <Table striped bordered hover size="5m">
          <thead>
            <tr>
              <th>Name</th>
              <th>Batch</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Students && Students.length > 0
              ? Students.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Batch}</td>
                      <td>
                        <Link to={"/edit"}>
                          <Button
                            onClick={() =>
                              handleEdit(item.id, item.Name, item.Batch)
                            }
                          >
                            Edit
                          </Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No data"}
          </tbody>
          <br></br>
          {/* <Link className="d-grid gap-2" to="/create"> */}
          <Link className="d-grid gap-2">
            <Button size="lg" onClick={handleCreate}>
              Create
            </Button>
          </Link>
        </Table>
        <Studentmodel isOpen={modal} onClose={closeModal} />
      </div>
    </Fragment>
  );
}

export default Home;
