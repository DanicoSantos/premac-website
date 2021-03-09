import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

class TestimonialSlider extends Component {
    render() {
        const params = {
            slidesPerView: 1,
            loop: true,
            speed: 1000,
            effect: 'fade',
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            renderPagenation: () => (
                <div className="swiper-pagination"></div>
            ),
        }
        let data = [
            { testimonialImage: "1.jpg", testimonialName: "Amilton", testimonialDesignation: "Engenheiro", testimonialText: "Nossa história com a PREMAC começou quando começamos a trabalhar na área, desde aí ela virou uma referência pra mim. A PREMAC possui todo um conhecimento técnico envolvido em cada entrega." },
            { testimonialImage: "3.jpg", testimonialName: "Alexandre", testimonialDesignation: "Engenheiro", testimonialText: "Eu não compro mais em outro lugar, eu conheço o processo, então eu já confio, o melhor da PREMAC é a qualidade técnica, o valor financeiro compensa muito quando comparado a qualidade do material e a qualidade técnica da Premac, esse é o diferencial deles." },
        ];

        let DataList = data.map((val, i) => {
            return (
                <div className="swiper-slide testimonial-slider__single-slide" key={i}>
                    <div className="author">
                        {/* <div className="author__image">
                            <img src={`assets/img/testimonial/${val.testimonialImage}`} alt="" />
                        </div> */}
                        <div className="author__details">
                            <h4 className="name">{val.testimonialName}</h4>
                            <div className="designation">{val.testimonialDesignation}</div>
                        </div>
                    </div>
                    <div className="content">
                        {val.testimonialText}
                    </div>
                </div>
            )
        });

        return (
            <div>
                {/*====================  testimonial slider area ====================*/}
                <div className="testimonial-slider-area testimonial-slider-area-bg section-space--inner--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="testimonial-slider">
                                    <div className="testimonial-slider__container-area">
                                        <Swiper {...params}>
                                            {DataList}
                                        </Swiper>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of testimonial slider area  ====================*/}

            </div>
        )
    }
}

export default TestimonialSlider;