import { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

export default class Contacts extends Component {

    render() {
        return (
            <Container>
                <Container>

                            <img className="img-fluid my-4" 
                                src="http://localhost:8000/media/E%3A/git/pets/pets_back/media/map.jpg"></img>

                            <p>Наш адрес: г.Москва, обл. Московская, ул.Лесная, 1</p>
                            <p>график работы: с 10:00 до 21:00</p>
                            <p>телефон: 8 (920) 333-33-33</p>
                            <p>По вопросам сотрудничества обращаться на почку: salon_luiza_pets@mail.ru</p>

                </Container>
            </Container>
        )
    }
}