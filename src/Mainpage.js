import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './mainpage.css'
import { useNavigate } from 'react-router';
export const Mainpage = () => {

    const navi = useNavigate();

    return (
        <>
            <div className='container-fluid'>
                <header className="row justify-content-center" style={{ margin: 'auto', backgroundColor: '#00005B' }}>
                    <div className="col-lg-3 col-md-5 col-sm-6 col-12 text-center">
                        <img src={require('./images/logo-top.jpg')} className="img-fluid mt-lg-3" alt="Muthayammal College Logo" style={{ height: '130px' }} />
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-6 col-12 text-center mt-3">
                        <div className="mec-title me-lg-5">
                            <h1 className="text-white fw-bold">Thiruvalluvar Government Arts College</h1>
                            <p className="text-white fw-light">Approved by AICTE | Affiliated to Periyar University</p>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='row justify-content-end mt-5'>
                            <button
                                className=' btn btn-outline-primary'
                                onClick={() => {
                                    sessionStorage.removeItem("auth")
                                    window.location.assign("/");
                                }}
                            >LOGOUT</button>
                        </div>
                    </div>
                </header>
            </div>
            <div id='scroll-container'>
                <p className=' mt-2' id='scroll-text'>The Government of Tamil Nadu Periyar University in Salem on 17th September 1997 as per the provisions of the Periyar University Act,1997.</p>
            </div>
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <h3>Welcome to Periyar University</h3>
                    <p>
                        The Government of Tamil Nadu established Periyar University in Salem on 17th September 1997 as per the provisions of the Periyar University Act, 1997. The University covers the area comprising four districts namely Salem, Namakkal, Dharmapuri, and Krishnagiri. The University obtained 12(B) and 2(f) status from the University Grants Commission, New Delhi and it was Accredited by the NAAC with “A++” Grade in 2021. The University secured 59th rank among Indian Universities by MoE NIRF 2023.The University is named after the Great Social Reformer E.V. Ramasamy, affectionately called as “Thanthai Periyar”. The University aims at developing knowledge in various fields to realize the maxim inscribed in the logo “Arival Vilayum Ulagu” (Wisdom Maketh the World). “Holistic development of the students” is the primary objective of the University.
                    </p>
                </div>
                <div className='col-3'>
                    <img src={require('./images/main access.png')} />
                </div>
            </div>
            <div className='row justify-content-center'>
                <h4 className='text-center mt-5 fst-italic fs-1 col-9'>
                    DIGITAL ACTIONS(PUBLICATIONS)
                </h4>
            </div>
            <div class='body'>
                <div style={{ display: 'block', width: 700, padding: 30 }}>
                    <Carousel>
                        <Carousel.Item interval={15000}>
                            <img
                                className="d-block w-100"
                                style={{ height: '300px' }}
                                src={require('./images/journalist-logo.jpg')}
                                alt="Image One"
                            />
                            <Carousel.Caption style={{ color: 'black', fontFamily: 'cursive' }}>
                                <p>A journalist is a person whose job is to collect news, and write about it in newspapers or magazines or talk about it on television or radio.
                                    <br />
                                    <button><a href='listalljournalist'>CLICK!</a></button>
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={15000}>
                            <img
                                className="d-block w-100"
                                src="https://www.bethstilborn.com/wp-content/uploads/2017/09/Fotolia_103101048_XS.jpg"
                                alt="Image Two"
                                style={{ height: '300px' }}
                            />
                            <Carousel.Caption style={{ color: 'black', fontFamily: 'cursive' }}>
                                <p>There are so many fabulous writing conferences and workshops out there!
                                    <button><a href='listallconference'>CLICK!</a></button>
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={15000}>
                            <img
                                className="d-block w-100"
                                src={require('./images/seminar.jpg')}
                                alt="Image Two"
                                style={{ height: '300px' }}
                            />
                            <Carousel.Caption style={{ color: 'black', fontFamily: 'cursive' }}>
                                <p>“Knowing is not enough; we must apply. Willing is not enough we must do.”
                                    <button><a href='listallseminar'>CLICK!</a></button>
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={15000}>
                            <img
                                className="d-block w-100"
                                src={require('./images/workshop.jpg')}
                                alt="Image Two"
                                style={{ height: '300px' }}
                            />
                            <Carousel.Caption style={{ color: 'black', fontFamily: 'cursive' }}>
                                <p>“You are braver than you believe, stronger than you seem and smarter than you think.”<button>CLICK!</button>
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={15000}>
                            <img
                                className="d-block w-100"
                                src={require('./images/book.png')}
                                alt="Image Two"
                                style={{ height: '300px' }}
                            />
                            <Carousel.Caption style={{ color: 'black', fontFamily: 'cursive' }}>
                                <p>“To learn to read is to light a fire; every syllable that is spelled out is a spark.”
                                    <button><a href='listallbooks'>CLICK!</a></button>
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={require('./images/faculty_dep.png')}
                                alt="Image Two"
                                style={{ height: '300px' }}
                            />
                            <Carousel.Caption style={{ color: 'black', fontFamily: 'cursive' }}>
                                <p>"Education is the most powerful weapon which you can use to change the world."
                                    <button>CLICK!</button>
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    );
}