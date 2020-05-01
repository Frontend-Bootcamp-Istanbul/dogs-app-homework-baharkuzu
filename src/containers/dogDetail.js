import React from 'react';
import dogs from "../dogsdata";
import "./dogDetail.css";
import { Card, CardBody, Button, CardTitle, CardText, CardImg, CardHeader } from 'reactstrap';

const dogDetail = (props) => {
    const secilenKopek = props.match.params.kopekId;
    console.log(secilenKopek)

    const kopek = dogs.find((dog) => {
        return dog.id === secilenKopek
    })
    console.log(kopek);
    
    return (
        <div>
            <Card className="card" body outline color="secondary">
            <CardImg className="cardImg" src={kopek.image} alt={`${kopek.name} resmi`} />
            <CardBody>
            <CardHeader className="cardHeader">{kopek.name}</CardHeader>
                <CardText>Breed: {kopek.breed}</CardText>
                <CardText>Description: {kopek.description}</CardText>
                <CardText>Age: {kopek.age}</CardText>
            </CardBody>
            </Card>
        </div>
    );
};

export default dogDetail;