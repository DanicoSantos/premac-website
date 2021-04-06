import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
class Footer extends Component {


    constructor(props) {
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    handleScroll() {
        if (this.mount) {
            this.setState({ scroll: window.scrollY });
        }
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    componentDidMount() {
        this.mount = true;
        const el = document.querySelector('nav');
        this.setState({ top: el.offsetTop, height: el.offsetHeight });
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate() {
        this.state.scroll > this.state.top ?
            document.getElementById("scroll-top").classList.add("show") :
            document.getElementById("scroll-top").classList.remove("show");
    }

    componentWillUnmount() {
        this.mount = false;
    }

    render() {
        return (
            <div>
                {/*====================  footer area ====================*/}
                <div className="footer-area footer-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="footer-content-wrapper section-space--inner--100">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-md-12">
                                            {/* footer intro wrapper */}
                                            <div className="footer-intro-wrapper">
                                                <div className="footer-logo">
                                                    <a href={`${process.env.PUBLIC_URL}/`}>
                                                        <img src="assets/img/logo/logo-light.png" className="img-fluid" alt="" />
                                                    </a>
                                                </div>
                                                <div className="footer-desc">
                                                    
                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                            {/* footer widget */}
                                            <div className="footer-widget">
                                                <h4 className="footer-widget__title text-uppercase">Sobre</h4>
                                                <ul className="footer-widget__navigation">
                                                    <li><a href={`${process.env.PUBLIC_URL}/quem-somos`}>Quem Somos</a></li>
                                                    <li><a href={`${process.env.PUBLIC_URL}/`}>Produtos</a></li>
                                                    <li><a href={`${process.env.PUBLIC_URL}/`}>Projetos</a></li>
                                                    <li><a href={`${process.env.PUBLIC_URL}/blog`}>Blog</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                            {/* footer widget */}
                                            <div className="footer-widget">
                                                <h4 className="footer-widget__title text-uppercase">Redes</h4>
                                                <ul className="footer-widget__navigation">
                                                    <li><a href="https://www.facebook.com/premaclajes/"><i className="zmdi zmdi-facebook" /> Facebook</a></li>
                                                    <li><a href="https://www.instagram.com/premaclajes"><i className="zmdi zmdi-instagram" /> Instagram</a></li>
                                                    <li><a href="https://api.whatsapp.com/send?phone=%205591993405834"><i className="zmdi zmdi-whatsapp" /> Whatsapp</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                            {/* footer widget */}
                                            <div className="footer-widget mb-0">
                                                <h4 className="footer-widget__title text-uppercase">contato</h4>
                                                <div className="footer-widget__content">
                                                    <p className="address">R. da Pedreirinha, 777 - Guanabara, Ananindeua - PA</p>
                                                    <ul className="contact-details">
                                                        <li>91 9 99340-5834</li>
                                                        <li>contatopremac@premac.com</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright-wrapper">
                        <div className="footer-copyright text-center">
                            © 2021 PREMAC. Todos os direitos reservados
                        </div>
                    </div>
                </div>
                {/*====================  End of footer area  ====================*/}
                {/*====================  scroll top ====================*/}
                <button className="scroll-top" id="scroll-top" onClick={this.scrollToTop}>
                    <i className="ion-android-arrow-up" />
                </button>
                {/*====================  End of scroll top  ====================*/}
            </div>
        )
    }
}


export default Footer;