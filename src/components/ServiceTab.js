import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class ServiceTabExample extends Component{

    render(){
        
        /* service tab menu */
        let serviceTabMenuData = [
            {iconName: 'flaticon-002-welding', tabMenuName: 'Volterrana'},
            {iconName: 'flaticon-004-walkie-talkie', tabMenuName: 'Treliçada – Unidirecional ou Bidirecional'},
            {iconName: 'flaticon-015-cart', tabMenuName: 'Pré-laje ou Minipainel'},
            {iconName: 'flaticon-010-tank-1', tabMenuName: 'Painel Treliçado'}
        ];

        let serviceTabMenuDatalist = serviceTabMenuData.map((val, i)=>{
            return(
                <Tab key={i}>  <span className="icon"></span> <span className="text">{val.tabMenuName}</span></Tab>
            )
        });

        
        /* service tab content */
        
        let serviceTabContentData = [
            {bgUrl: "lage-volterrana.jpg", contentTitle: 'Volterrana', contentDesc: 'A Laje Volterrana, um dos modelos mais comuns de laje pré-moldada, é usada em construções de portes mais simples.', serviceLink: 'service-details-left-sidebar'},
            {bgUrl: "laje-trelicada-bidirecional.jpg", contentTitle: 'Treliçada – Unidirecional ou Bidirecional', contentDesc: 'A Laje Pré-moldada Treliçada tem em sua constituição uma estrutura em ferro no formato de treliça, o que deu origem a sua nomenclatura.', serviceLink: 'service-details-left-sidebar'},
            {bgUrl: "pre-laje.jpg", contentTitle: 'Pré-laje ou Minipainel', contentDesc: 'A Pré-laje é um elemento estrutural muito utilizado para fazer lajes em qualquer tipo de edificação em substituição as tradicionais lajes maciças moldadas in loco.', serviceLink: 'service-details-left-sidebar'},
            {bgUrl: "preco-laje-painel-trelicado.jpg", contentTitle: 'Painel Treliçado', contentDesc: 'A laje painel treliçado pode ser utilizada sobre qualquer estrutura, entre elas concreto armado, alvenaria estrutural ou estrutura metálica.', serviceLink: 'service-details-left-sidebar'}
        ];

        let serviceTabContentDatalist = serviceTabContentData.map((val, i)=>{
            return(
                <TabPanel key={i}>
                    <div className="service-tab__single-content-wrapper" style={{ backgroundImage: `url(assets/img/backgrounds/${val.bgUrl})` }}>
                        <div className="service-tab__single-content">
                            <h3 className="service-tab__title">{val.contentTitle}</h3>
                            <p className="service-tab__text">{val.contentDesc}</p>
                            <a href={`${process.env.PUBLIC_URL}/${val.serviceLink}`} className="see-more-link">Saiba Mais</a>
                        </div>
                    </div>
                </TabPanel>
            )
        });

        return(
            <div>

                {/*====================  service tab area ====================*/}
                <div className="service-tab-area section-space--inner--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center">
                        <h2 className="section-title section-space--bottom--50">Nossos Produtos</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        {/* service tab wrapper */}
                        
                        <div className="service-tab-wrapper">
                        <Tabs>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <TabList>
                                        <div className="service-tab__link-wrapper">
                                            {serviceTabMenuDatalist}
                                        </div>
                                    </TabList>
                                </div>

                                <div className="col-md-8">
                                    {serviceTabContentDatalist}
                                </div>
                            </div>
                        </Tabs>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====================  End of service tab area  ====================*/}
            </div>
        )
    }
}

export default ServiceTabExample;