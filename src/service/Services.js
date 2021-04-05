import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class Services extends Component{
    render(){

        let data = [
            {pageLink: '#', img: 'laje-lt12.jpg', iconClass: 'flaticon-002-welding', serviceTitle: 'LAJE LT12', serviceSubtitle: 'A LAJE LT12 é um dos modelos de laje mais utilizados em construções. Ela pode ser aplicada em obras de grande porte a construções pequenas.'},
            {pageLink: '#', img: 'preco-laje-painel-trelicado.jpg', iconClass: 'flaticon-004-walkie-talkie', serviceTitle: 'LAJE PAINEL TRELIÇADO', serviceSubtitle: 'A laje painel treliçado pode ser utilizada sobre qualquer estrutura, entre elas concreto armado, alvenaria estrutural ou estrutura metálica.'},
            {pageLink: '#', img: 'laje-trelicada-bidirecional.jpg', iconClass: 'flaticon-015-cart', serviceTitle: 'LAJE BIDIRECIONAL', serviceSubtitle: 'Com a laje pré moldada bidirecional, o consumidor estará amparado por um tipo de laje resistente, tecnicamente superior e de excelente qualidade.'},
            {pageLink: '#', img: 'laje-pre-moldada-eps.jpg', iconClass: 'flaticon-010-tank-1', serviceTitle: ' LAJE PRÉ MOLDADA EPS', serviceSubtitle: 'A laje pré moldada eps é que, além de ser de fácil manuseio, oferece mais economia quando comparada a outros tipos de lajes.'},
            {pageLink: '#', img: 'laje-pre-moldada-isopor.jpg', iconClass: 'flaticon-004-walkie-talkie', serviceTitle: 'LAJE PRÉ MOLDADA ISOPOR', serviceSubtitle: 'Ela é conhecida por utilizar o isopor em seu preenchimento, proporcionando à laje um material mais leve e barato na hora da montagem.'},
            {pageLink: '#', img: 'laje-trelicada-unidirecional.jpg', iconClass: 'flaticon-002-welding', serviceTitle: 'LAJE PRÉ MOLDADA TRELIÇADA', serviceSubtitle: 'A laje pré moldada treliçada tem em sua constituição uma estrutura em ferro no formato de treliça, o que deu origem a sua nomenclatura.'},
            {pageLink: '#', img: 'lage-volterrana.jpg', iconClass: 'flaticon-002-welding', serviceTitle: 'LAJE VOLTERRANA', serviceSubtitle: 'A laje volterrana oferece uma série de vantagens, se comparada a outros modelos de laje pré-moldadas, como a redução de mão de obra, materiais e praticidade na instalação.'}
        ];

        let Datalist = data.map((val, i) => {
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="service-grid-item">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        {/* <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}> */}
                            <img src={`assets/img/backgrounds/${val.img}`} className="img-fluid" alt="Service Grid"/>
                        {/* </a> */}
                        </div>
                        {/* <div className="icon">
                        <i className={val.iconClass} />
                        </div> */}
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>{val.serviceTitle}</a>
                        </h3>
                        <p className="subtitle">{val.serviceSubtitle}</p>
                        {/* <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`} className="see-more-link">Saiba Mais</a> */}
                    </div>
                    </div>
                </div>
            )
        });

        return(
            <div>

                {/* Navigation bar */}
                <NavBar/>

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Produtos</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>Produtos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  service page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                {/*Service section start*/}
                <div className="service-section">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="service-item-wrapper">
                            <div className="row">
                                {Datalist}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Service section end*/}
                </div>

                {/*====================  End of service page content  ====================*/}


                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}

export default Services;