import React, {Component} from 'react';
import NavBar from './components/NavBar';
import HeroSliderTwo from './components/HeroSliderTwo';
import VideoCta from './components/VideoCta';
import Funfact from './components/Funfact';
import ProjectSliderTwo from './components/ProjectSliderTwo';
import ServiceTab from './components/ServiceTab';
import TestimonialSlider from './components/TestimonialSlider';
import PageCta from './components/PageCta';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

class HomeTwo extends Component{
    render(){
        
        return(
            <div>
                
                {/* Navigation bar */}
                <NavBar/>
                
                {/* Hero slider */}
                <HeroSliderTwo/>
                
                {/* Video CTA */}
                <VideoCta/>

                {/* Fun fact */}
                <Funfact/>

                {/* Project Slider */}
                <ProjectSliderTwo/>

                {/* Service Tab */}
                <ServiceTab/>

                {/* Testimonial Slider */}
                <TestimonialSlider/>

                {/* Page Cta*/}
                <PageCta/>

                {/* Brand logo */}
                {/* <BrandLogoSlider background = "grey-bg" /> */}

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default HomeTwo;