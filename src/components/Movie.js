import { Card, Container, Row, Col, Image } from "react-bootstrap"
import a6Image from "../assets/images/superhero/a6.jpg"
import a5Image from "../assets/images/superhero/a5.jpg"
import a4Image from "../assets/images/superhero/a4.jpg"
import a3Image from "../assets/images/superhero/a3.jpg"
import a2Image from "../assets/images/superhero/a2.jpg"
import a1Image from "../assets/images/superhero/a1.jpg"

const Movie = () => {
    return(
        <div>
            <Container>
                <br />
                <br /> 
                <h1 className="text-black text-center judulMovie mb-4" id="movie">NEW MOVIE 2022</h1>
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={a1Image} alt="MEN" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">MEN</Card.Title>
                                <Card.Text className="text-left">Men adalah film horor rakyat mendatang yang ditulis oleh Alex Garland.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 13 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={a2Image} alt="Encounter" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Encounter</Card.Title>
                                <Card.Text className="text-left">Encounter adalah film drama thriller tahun 2021, Tentang perperangan.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 23 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={a3Image} alt="Downtown Abbey" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Downtown Abbey</Card.Title>
                                <Card.Text className="text-left">A New Era adalah sebuah film drama sejarah tahun 2022..
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 12 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={a4Image} alt="Red Notice" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Red Notice</Card.Title>
                                <Card.Text className="text-left">Red Notice adalah sebuah film komedi laga Amerika Serikat.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 11 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={a5Image} alt="Dog" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">DOG</Card.Title>
                                <Card.Text className="text-left"> Seorang Tentara Angkatan Darat AS ditugaskan untuk membawa Anjing.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 9 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={a6Image} alt="C'mon C'mon" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">C'mon C'mon</Card.Title>
                                <Card.Text className="text-left">Sebuah film drama hitam-putih Amerika tahun 2021.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 32 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <br />
                <br /> 
            </Container>
        </div>
    )
}

export default Movie