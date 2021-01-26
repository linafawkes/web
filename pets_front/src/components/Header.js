import { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import AuthService from '../services/AuthService'
import { createBrowserHistory } from 'history'


export default class Header extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }
    authservice = new AuthService()

    onClick() {
        this.authservice.logout()
        const history = createBrowserHistory()
        history.push('/login')
        window.location.reload()
    }

    getLoginLink() {
        if (this.authservice.isLogged()) {
            return (<Button
                variant="outline-light"
                onClick={this.onClick}>
                Выйти
            </Button>)
        } else {
            return (<Button variant="primary" href="/login">Войти</Button>)
        }
    }

    render() {

        const logButton = this.getLoginLink()

        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>Луиза</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/main">Главная</Nav.Link>
                    <Nav.Link href="/services">Услуги</Nav.Link>
                    <Nav.Link href="/comments">Отзывы</Nav.Link>
                    <Nav.Link href="/contacts">Контакты</Nav.Link>
                </Nav>
                {logButton}
            </Navbar>
        )
    }
}