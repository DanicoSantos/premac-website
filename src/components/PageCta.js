import React from 'react';

export default function PageCta() {
    return (
        <>
        <div className="section-space--inner--120 grey-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                    <div className="section-title-area">
                        <h2 className="section-title mb-0">Faça um orçamento</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="contact-form d-flex justify-content-end">
                    <a href="https://api.whatsapp.com/send?phone=%205591993405834" rel="noopener noreferrer" target="_blank" className="text-uppercase mt-0 ht-btn--default">Entre em contato</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}