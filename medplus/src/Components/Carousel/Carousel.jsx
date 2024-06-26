import React, { useEffect } from 'react'
import './Carousel.css'


const Carousel = () => {

    useEffect(() => {
        const carousel = document.querySelector('#carouselExampleSlidesOnly');
        const carouselInstance = new window.bootstrap.Carousel(carousel, {
            interval: 5000, // Adjust the interval (in milliseconds) according to your preference
            pause: 'hover', // Pause on hover if desired
            ride: 'carousel' // Autoplay
        });

        // Clean up
        return () => {
            carouselInstance.dispose();
        };
    }, []);

    const goToSlide = (index) => {
        const carousel = document.querySelector('#carouselExampleSlidesOnly');
        const carouselInstance = window.bootstrap.Carousel.getInstance(carousel);
        carouselInstance.to(index);
    };
    return (
        <>
            <div className="demo">
                <div className="carousel">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <a href="#" title='Discount on MedPlus brand Medicines'><img src="https://static2.medplusmart.com/live/bannerImage/Mart/90cf1439fe23523a3557dd7f6f438f69.jpg" className="d-block w-100" alt="First slide" /></a>
                            </div>
                            <div className="carousel-item">
                                <a href='#' title='Flat 20 Percentage off on every medicine'><img src="https://static2.medplusmart.com/live/bannerImage/Mart/6cfeb9eabbbed89686b4a9f398dcb410.jpg" className="d-block w-100" alt="Second slide" /></a>
                            </div>
                            <div className="carousel-item">
                                <a href='#' title='Now Own Your Medplus Franchise'><img src="https://static2.medplusmart.com/live/bannerImage/Mart/79c04d337dd74a0bec690dae2d8a4ba1.jpg" className="d-block w-100" alt="Third slide" /></a>
                            </div>
                            <div className="carousel-item">
                                <a href='#' title='Horlicks'><img src="https://static2.medplusmart.com/live/bannerImage/Mart/0cdd31c722c77d6055e14a81cc17b0e8.jpg" className="d-block w-100" alt="Fourth slide" /></a>
                            </div>
                            <div className="carousel-item">
                                <a href='#' title='Nivea'><img src="https://static2.medplusmart.com/live/bannerImage/Mart/fe7a51bbdf8b8be265d45b71471c0da5.jpg" className="d-block w-100" alt="Fifth slide" /></a>
                            </div>
                            <div className="carousel-item">
                                <a href='#' title='Dove'><img src="https://static2.medplusmart.com/live/bannerImage/Mart/ef6272de480d7d684707aa18de10a5b2.jpg" className="d-block w-100" alt="Sixth slide" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="selector">
                    <p>
                        <ul onClick={() => goToSlide(0)}>
                            <li>50-80% off</li>
                            <li className='smalldd'>Medplus brand</li>
                        </ul>
                    </p>
                    <p>
                        <ul onClick={() => goToSlide(1)}>
                            <li>Flat 20% off</li>
                            <li className='smalldd'>On every medicine</li>
                        </ul>
                    </p>
                    <p>
                        <ul onClick={() => goToSlide(2)}>
                            <li>Now Own Your</li>
                            <li className='smalldd'>Medplus Franchise</li>
                        </ul>
                    </p>
                    <p>
                        <ul onClick={() => goToSlide(3)}>
                            <li>Horlicks</li>
                            <li className='smalldd'>Upto Rs 90 Off</li>
                        </ul>
                    </p>
                    <p>
                        <ul onClick={() => goToSlide(4)}>
                            <li>Nivea</li>
                            <li className='smalldd'>Upto 35% off</li>
                        </ul>
                    </p>
                    <p>
                        <ul onClick={() => goToSlide(5)}>
                            <li>Dove</li>
                            <li className='smalldd'>Upto 33% Off</li>
                        </ul>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Carousel