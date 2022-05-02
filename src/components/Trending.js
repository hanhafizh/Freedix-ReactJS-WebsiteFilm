import { Card, Container, Row, Col, Image } from "react-bootstrap"
import a6Image from "../assets/images/trending/a6.jpg"
import a5Image from "../assets/images/trending/a5.jpg"
import a4Image from "../assets/images/trending/a4.jpg"
import a3Image from "../assets/images/trending/a3.jpg"
import a2Image from "../assets/images/trending/a2.jpg"
import a1Image from "../assets/images/trending/a1.jpg"

const Trending = () => {
    return(
        <div>
            <Container>
                <br />
                <br /> 
                <h1 className="text-white text-center judulTrending mb-4" id="trending">TRENDING MOVIES</h1>
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={a1Image} alt="All The Old Knives" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">All The Old Knives</Card.Title>
                                <Card.Text className="text-left">Knives adalah film thriller mata-mata Amerika tahun 2022.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 13 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={a2Image} alt="Umma" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Umma</Card.Title>
                                <Card.Text className="text-left">Amanda dihantui oleh ketakutan untuk berubah menjadi ibunya.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 23 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={a3Image} alt="Secret Dumbledore" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Secret Dumbledore</Card.Title>
                                <Card.Text className="text-left">Profesor Albus Dumbledore mengetahui penyihir Gelap.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 12 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={a4Image} alt="The Bubble" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">The Bubble</Card.Title>
                                <Card.Text className="text-left">The Bubble adalah film komedi Amerika Serikat tahun 2022.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 11 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={a5Image} alt="The North Man" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">The North Man</Card.Title>
                                <Card.Text className="text-left">The Northman adalah film sejarah epos, yang memiliki cerita dan makna
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 9 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={a6Image} alt="Memory" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Memory</Card.Title>
                                <Card.Text className="text-left">Memory adalah film thriller aksi Amerika 2022, yang menunjukan beberapa aksi memukau.
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

export default Trending