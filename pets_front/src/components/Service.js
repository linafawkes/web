import { Component } from "react";
import ApiService from "../services/ApiService";
import { Container } from "react-bootstrap"
export default class Service extends Component {

    apiservice = new ApiService()

    state = {
        name: "",
        text: "",
        cost: "",
        image: "",
        tags: [],
    }

    componentDidMount() {
        this.apiservice.getService(this.props.id)
            .then((data) => {
                try {
                    this.setState({
                        name: data.name,
                        text: data.text,
                        price: data.price,
                        image: data.image,
                        tags: data.tags
                    })
                } catch (e) {}
            })
    }

    renderTags(tags) {
        return tags.map(item => {
            return <span className="badge bg-info text-light mr-2">{item.label}</span>
        })
    }

    render() {
        const { name, text, image, price, tags } = this.state
        
        let tagsComponent = null

        if (tags != null){
            tagsComponent = this.renderTags(tags)
        }

        return (
            <Container classNam="mt-1 mb-4">
                <h1 className="display-6">{name}</h1>
                <hr></hr>
                <p align="justify"> {text} </p>
                <img src={image} className="img-fluid" alt="" />
                <div className="mt-1"> {tagsComponent} </div>
                <p>Стоимость: {price}</p>
            </Container>

        )

    }

}