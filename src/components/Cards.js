import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardData";

function Cards() {
  const [data, setData] = useState(Cardsdata);
  console.log(data);

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Card Projects</h2>
      <div className="row d-flex justify-content-center align-items-center">

        {data.map((element, id) => {
          return (
            <>
              <Card style={{ width: "22rem",}} className="mx-2 mt-4 card_style ">
                <Card.Img variant="top" src={element.imgdata} style={{height:"16rem ",cursor:"pointer"}} className="mt-3" />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                    Price : ₹ {element.price}
                  </Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
