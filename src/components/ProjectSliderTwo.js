import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class ServiceGridSlider extends Component{

    constructor(props) {
        super(props)
        this.goNext = this.goNext.bind(this)
        this.goPrev = this.goPrev.bind(this)
        this.swiper = null
      }
    
      goNext() {
        if (this.swiper) this.swiper.slideNext()
      }
    
      goPrev() {
        if (this.swiper) this.swiper.slidePrev()
      }

    render(){
        const params = {
            slidesPerView : 3,
            loop: true,
            speed: 1000,
            watchSlidesVisibility: true,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
            },
            // Responsive breakpoints
            breakpoints: {
                1499:{
                    slidesPerView : 3
                },

                991:{
                    slidesPerView : 2
                },

                767:{
                    slidesPerView : 1
                },

                575:{
                    slidesPerView : 1
                }
            }

        }
        let data = [
            {img: 'obra-edificio.jpg', serviceTitle: 'Edifícios', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service2.jpg', serviceTitle: 'Complexos Esportivos', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
            {img: 'obra-residencia.jpg', serviceTitle: 'Residencias', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
        ];

        let DataList = data.map((val, i)=>{
            return(
                <div className="swiper-slide" key={i}>
                    <div className="service-grid-item service-grid-item--style2">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                            <img src={`assets/img/service/${val.img}`} className="img-fluid" alt="" />
                        </a>
                        </div>
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>{val.serviceTitle}</a>
                        </h3>
                        {/* <p className="subtitle">{val.serviceExcerpt}</p> */}
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`} className="see-more-link text-uppercase">saiba mais</a>
                    </div>
                    </div>
                </div>
            )
        });
        return(
            <div>
                {/*====================  project grid slider area ====================*/}
                <div className="service-slider-title-area grey-bg section-space--inner--top--120 section-space--inner--bottom--285">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="section-title-area text-center">
                            <h2 className="section-title mb-0">Obras com selo Premac</h2>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="service-grid-slider-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="service-slider">
                            <div className="service-slider__container service-slider__container--style2">
                                <Swiper {...params}>
                                    {DataList}
                                </Swiper>
                                <button className="ht-swiper-button-prev ht-swiper-button-nav" onClick={this.goPrev}><i className="ion-ios-arrow-left" /></button>
                                <button className="ht-swiper-button-next ht-swiper-button-nav" onClick={this.goNext}><i className="ion-ios-arrow-forward" /></button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*====================  End of project grid slider area  ====================*/}

            </div>
        )
    }
}


export default ServiceGridSlider;