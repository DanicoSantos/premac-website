import React, { Component } from 'react';
import ModalVideo from 'react-modal-video'

class VideoCta extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <div>
                {/*====================  video cta area ====================*/}
                <div className="video-cta-area section-space--inner--120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="video-cta-content">
                                    <h4 className="video-cta-content__small-title">QUEM SOMOS</h4>
                                    <h3 className="video-cta-content__title">Olá, somos a PREMAC!</h3>
                                    <p className="video-cta-content__text">Empresa especialista na construção de lajes 
                                    pré-moldadas há 24 anos. Cada obra é diferente da outra, então oferecemos soluções 
                                    específicas em cada empreendimento.  Não abrimos mão de boas soluções e boa engenharia! </p>
                                    <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn ht-btn--round">ENTRE EM CONTATO</a>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-md-6">
                                <div className="cta-video-image">
                                    <div className="video-popup">
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='OulHyxDouyc' onClose={() => this.setState({ isOpen: false })} />
                                        <button onClick={this.openModal}>
                                            <div className="cta-video-image__image">
                                                <img src="assets/img/backgrounds/video-cta.gif" className="img-fluid" alt="" />
                                            </div>
                                            <div className="cta-video-image__icon">
                                                <i className="ion-ios-play" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of video cta area  ====================*/}
            </div>
        )
    }
}


export default VideoCta;