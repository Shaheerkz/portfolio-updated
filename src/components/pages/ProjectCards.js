/* eslint-disable react/jsx-no-undef */
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function ProjectCards(props) {
  return (
    <>
      <div className="">
        <Card className="mx-3">
          <div
            className="card-img-wrapper"
            style={{ height: "300px" , overflowY: "hidden" }}
          >
            <Card.Img variant="top" className="img-fluid" src={props.img} />
          </div>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.content}</Card.Text>
            <a href={props.link} target="_blank" rel="noreferrer">{props.button}</a>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ProjectCards;
