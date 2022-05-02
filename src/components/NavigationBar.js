import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div id="utama">
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">Freedix</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">TRENDING</Nav.Link>
                        <Nav.Link href="#movie">NEW MOVIE 2022</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar