import React, { useState } from 'react';
import { Jumbotron, Container, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

function JumbotronComponent(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const pics = props.pcPics;

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === pics.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? pics.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }
    
    const slides = props.pcPics.map((pic) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={pic.id}
            >
                <img className="w-100" src={pic.src} alt={pic.alt} />
                <CarouselCaption captionText={pic.caption} captionHeader={pic.caption} />
            </CarouselItem>
        );
    });
    return (
       <div className="container" id="home">
            <Jumbotron fluid>
                <Container fluid>
                    <h4 className="display-4 text-center">Need Help Building A PC?</h4>
                    <p className="lead text-center">I'm here to help!</p>
                    <div className="row container mx-auto" id="carousel">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                        >
                            <CarouselIndicators items={pics} activeIndex={activeIndex} onClickHandler={goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>
                    </div>
                </Container>
            </Jumbotron>
            <hr />
        </div>
    );
}

export default JumbotronComponent;