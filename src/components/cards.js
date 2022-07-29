import React from 'react';
import { Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const pics = [
  {
   id: 1,
   img: require("../images/circle.jpg"),
   title: "Rising Stars",
   text: "For children who are new to learning and excited to learn new concepts. Students will be introduced to things such as (but not limited to) colors, shapes, and numbers through songs and activities."
   
  },
  {
   id: 2,
   img: require("../images/reading.jpg"),
   title: "Shooting Stars",
   text: "For beginner learners. Students will gain more knowledge of the fundamentals while sharpening their basic skills such as receptive and expressive identification of numbers and letters,  phonics sounds, and other new concepts."
  },
  {
    id: 3,
    img: require("../images/group.jpg"),
    title: "Goal Getters",
    text: "For children who have mastered the introductory fundamentals and skills. Students will be introduced to (which is not limited to) simple mathematics, sight words, and writing words and sentences in addition to new concepts."
   },
   {
    id: 4,
    img: require("../images/one.jpg"),
    title: "Goal Setters",
    text: "For children who have a basic understanding of skills such as simple math, reading sight words, and sentence structure. Students will be introduced to (but not limited to) basic science, history, science, and other new concepts."  
   },
   {
    id: 5,
    img: require("../images/tutor.jpg"),
    title: "Tutoring",
    text: " Individual tutoring sessions for any subject. The tutoring will assist children in their misunderstanding or understanding of the skills that they are learning in school or will learn in the upcoming school year."  
   },
 ]

function Cards() {
    return (
        <div className="groupCards">
        <Row xs={1} md={5} className="g-2">
  {pics.map((pic, id, title, text) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={pic.img} />
        <Card.Body>
          <Card.Title>{pic.title}</Card.Title>
          <Card.Text>
            {pic.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>    
        </div>
    );
}

export default Cards;