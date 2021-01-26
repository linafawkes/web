import { Component } from "react";
import ApiService from "../services/ApiService";
import { Container } from "react-bootstrap"

import Service from "./Service"


export default class ServiceList extends Component {

    apiservice = new ApiService()

    state = {
        data: null
    }

    componentDidMount = () => {
        this.apiservice.getAllServices()
            .then((data) => {
                this.setState({
                    data: data
                })
            })
    }



    renderServices = data => {
        return data.map(item => {
            return <Service id={item.id} />
        }) 
    }

    render() {
        const { data } = this.state
        console.log(data)
        let services = []

        if (data !== null) {
            services = this.renderServices(data)
        }

        return (
            <Container>
                {services}
            </Container>
        )
    }
}