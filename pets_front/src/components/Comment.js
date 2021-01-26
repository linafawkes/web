import { Component } from "react";
import ApiService from "../services/ApiService";
import { Container } from "react-bootstrap"
export default class Service extends Component {

    apiservice = new ApiService()

    state = {
        author: "",
        text: "",
        service: "",
    }

    componentDidMount() {
        this.apiservice.getComment(this.props.id)
            .then((data) => {
                console.log(data.service.name)
                try {
                    this.setState({
                        author: data.author,
                        text: data.text,
                        service: data.service.name
                    })
                } catch (e) {}
            })
    }

    render() {
        const { author, text, service } = this.state

        return (
            <Container className="border m-3">
                <p className="h4 m-3">{author}</p>
                <p className="m-3"> Отзыв об услуге {service.toLowerCase()}</p>
                <hr></hr>
                <p className="m-3">{text}</p>
            </Container>

        )

    }

}