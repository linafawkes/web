import { Component } from "react";
import ApiService from "../services/ApiService";
import { Container } from "react-bootstrap"

import Comment from "./Comment"


export default class CommentList extends Component {

    apiservice = new ApiService()

    state = {
        data: null
    }

    componentDidMount = () => {
        this.apiservice.getAllComments()
            .then((data) => {
                this.setState({
                    data: data
                })
            })
    }

    renderComments = data => {
        return data.map(item => {
            return <Comment id={item.id} />
        }) 
    }

    render() {
        const { data } = this.state

        let comments = []

        if (data !== null) {
            comments = this.renderComments(data)
        }

        return (
            <Container>
                {comments}
            </Container>
        )
    }
}