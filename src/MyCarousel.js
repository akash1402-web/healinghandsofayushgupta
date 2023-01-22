import React from 'react'
import { CarouselItem,Row,Carousel,Container,Col } from 'react-bootstrap';
import caraousel1 from './images/caraousel1.jpg';
import caraousel2 from './images/caraousel2.jpg';
import caraousel3 from './images/caraousel3.jpg';
const MyCarousel = () => {
  return (
    <>
        <Container>
            <Row>
                <Col>
                    <Carousel fade>
                        <CarouselItem interval={1000}>
                            <img src={caraousel1} className='d-block w-100' style={{height:400,width:1000,borderRadius:"50px"}}/>
                        </CarouselItem>
                        <CarouselItem interval={1000}>
                            <img src={caraousel2} className='d-block w-100 ' style={{height:400,width:1000,borderRadius:"50px"}}/>
                        </CarouselItem>
                        <CarouselItem interval={1000}>
                            <img src={caraousel3} className='d-block w-100 ' style={{height:400,width:1000,borderRadius:"50px"}}/>
                        </CarouselItem>
                    </Carousel>
                </Col>
            </Row>
            </Container>
    </>
  )
}

export default MyCarousel
