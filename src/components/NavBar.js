import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MobileMenu from './MobileMenu';
class NavBar extends Component{

    constructor(props){
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);

        this.mobileMenuElement = React.createRef();
    }

    activeMobileMenu = () => {
        this.mobileMenuElement.current.toggleMobileMenu();
    }

    handleScroll() {
        if(this.mount){
            this.setState({scroll: window.scrollY});
        }
    }
  
    componentDidMount() {
        this.mount = true;
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentDidUpdate() {
        this.state.scroll > this.state.top ? 
        document.body.style.paddingTop = `${this.state.height}px` :
        document.body.style.paddingTop = 0;
    }

    componentWillUnmount(){
        this.mount = false;
    }

    render(){


        return(
            <div>
                {/*====================  header area ====================*/}
                <div className={`header-area header-sticky header-sticky--default ${this.state.scroll > this.state.top ? "is-sticky" : ""}`}>
                    <div className="header-area__desktop header-area__desktop--default">
                    {/*=======  header top bar  =======*/}
                    <div className="header-top-bar">
                        <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                            {/* top bar left */}
                            <div className="top-bar-left-wrapper">
                                <div className="social-links social-links--white-topbar d-inline-block">
                                <ul>
                                    {/* <li><a href="//facebook.com"><i className="zmdi zmdi-facebook" /></a></li>
                                    <li><a href="//twitter.com"><i className="zmdi zmdi-instagram" /></a></li>
                                    <li><a href="//vimeo.com"><i className="zmdi zmdi-youtube-play" /></a></li>
                                    <li><a href="//linkedin.com"><i className="zmdi zmdi-linkedin-box" /></a></li>
                                    <li><a href="//skype.com"><i className="zmdi zmdi-whatsapp" /></a></li> */}
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8">
                            {/* top bar right */}
                            <div className="top-bar-right-wrapper">
                                <a href="https://api.whatsapp.com/send?phone=%205591993405834" target="_blank" rel="noopener noreferrer" className="ht-btn ht-btn--default d-inline-block">ENTRE EM CONTATO</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*=======  End of header top bar  =======*/}
                    {/*=======  header info area  =======*/}
                    <div className="header-info-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                <div className="header-info-wrapper align-items-center">
                                    {/* logo */}
                                    <div className="logo">
                                        <Link to = {`${process.env.PUBLIC_URL}/`}>
                                            <img src="assets/img/logo/logo.png" className="img-fluid" alt="Logo" />
                                        </Link>
                                    </div>
                                    {/* header contact info */}
                                    <div className="header-contact-info">
                                    <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-smartphone-android" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Fone</h6>
                                        <p className="header-info-single-item__subtitle">91 9 99340-5834</p>
                                        </div>
                                    </div>
                                    <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-pin" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Endereço</h6>
                                        <p className="header-info-single-item__subtitle">R. da Pedreirinha, 777 - Guanabara, Ananindeua - PA</p>
                                        </div>
                                    </div>
                                    </div>
                                    {/* mobile menu */}
                                    <div className="mobile-navigation-icon" id="mobile-menu-trigger" onClick={this.activeMobileMenu}>
                                        <i />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    {/*=======  End of header info area =======*/}
                    {/*=======  header navigation area  =======*/}
                    <div className="header-navigation-area default-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* header navigation */}
                                    <div className="header-navigation header-navigation--header-default position-relative">
                                        <div className="header-navigation__nav position-static">
                                        <nav>
                                            <ul>
                                            <li className="text-uppercase">
                                                <Link to={`${process.env.PUBLIC_URL}/`}> HOME </Link>
                                                
                                            </li>
                                            <li className="text-uppercase"><Link to={`${process.env.PUBLIC_URL}/quem-somos`}>QUEM SOMOS</Link></li>
                                            <li className="text-uppercase"><Link to={`${process.env.PUBLIC_URL}/produtos`}>Produtos</Link></li>
                                            
                                            {/* <li className="has-children has-children--multilevel-submenu text-uppercase">
                                                <Link to={`#`} >PROJETOS</Link>
                                                <ul className="submenu text-capitalize">
                                                <li><Link to={`${process.env.PUBLIC_URL}/`}>Residencias</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/`}>Edifícios</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/`}>Complexos Esportivos</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/`}>Edifícios</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/`}>Igrejas</Link></li>
                                                </ul>
                                            </li> */}
                                            {/* <li className="text-uppercase">
                                                <Link to={`${process.env.PUBLIC_URL}/blog`}>BLOG</Link>                                                
                                            </li> */}
                                            <li className="text-uppercase"><a href="https://api.whatsapp.com/send?phone=%205591993405834" target="_blank" rel="noopener noreferrer">CONTATO</a> </li>
                                            </ul>
                                        </nav>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/*=======  End of header navigation area =======*/}
                    </div>
                </div>
                {/*====================  End of header area  ====================*/}
                
                {/* Mobile Menu */}
                <MobileMenu ref={this.mobileMenuElement} />

            </div>
        )
    }
}


export default NavBar;