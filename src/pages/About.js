import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import PageCta from '../components/PageCta'
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import ModalVideo from 'react-modal-video'
class About extends Component {

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

                {/* Navigation bar */}
                <NavBar />

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Quem Somos</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>Quem Somos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                <div className="page-wrapper section-space--inner--top--120">
                    {/*About section start*/}
                    <div className="about-section section-space--inner--bottom--120">
                        <div className="container">
                            <div className="row row-25 align-items-center">
                                <div className="col-lg-6 col-12 mb-30">
                                    <div className="about-image-two">
                                        <img src="assets/img/backgrounds/video-cta.gif" alt="" />
                                        <span className="video-popup">
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='OulHyxDouyc' onClose={() => this.setState({ isOpen: false })} />
                                            <button onClick={this.openModal}>
                                                <i className="ion-ios-play-outline" />
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 mb-30">
                                    <div className="about-content-two">
                                        <h3>Olá, somos a PREMAC.</h3>
                                        <h1>São 24 anos de experiência no mercado.</h1>
                                        <h4>Oferecemos soluções específicas para cada empreendimento. Não abrimos mão de boas soluções e boa engenharia!</h4>
                                        <p>Possuímos a única fábrica de Lajes pré-moldadas da região norte automatizada, produzimos em grande quantidade, em um curto espaço de tempo e com o máximo de tecnologia. Isso possibilita com que seus pedidos sejam entregues sempre no prazo, não atrasando o andamento da sua obra.</p>
                                        <a href="produtos" className="ht-btn--default ht-btn--default--dark-hover section-space--top--20">Nossos Produtos</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*About section end*/}

                </div>

                {/* Page Cta*/}
                <PageCta/>


                {/* Footer */}
                <Footer />

                {/* Mobile Menu */}
                <MobileMenu />

            </div>
        )
    }
}


export default About;