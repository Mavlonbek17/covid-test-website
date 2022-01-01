import { useEffect } from 'react';
import Gerb from './media/emblem.svg';
import http from './services/axios';

function UserInform() {

    useEffect(() => {
        http.get("icode/client/")
            .then(res => {
                console.log(res);
            })
            .catch(err => alert(err));
    }, []);

    return (
        <div className="">
            <nav className='py-2 px-3 navbar navbar-light border-bottom bg-white navbar-expand'>
                <ul className='navbar-nav'>
                    <li className="nav-item">
                        <a href="#" className='nav-link'>
                            <i className='fas fa-bars'></i>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 px-lg-5 py-lg-3 p-2 p-md-3 text-center">
                        <h1 style={{ fontSize: "1.8rem" }} className="text-dark fw-light text-start">Patient: MAKHAMMADJONOV AZIZBEK MAKHMUDJON UGLI</h1>
                        <div className="flag-border">
                            <div className="row">
                                <div className="col-12 col-md-5 p-md-3 p-lg-5 p-4 d-flex align-items-center">
                                    <div>
                                        <h4 className="fw-light lh-md" style={{ fontSize: "1.4rem" }}>
                                            MINISTRY OF HEALTH OF THE REPUBLIC OF UZBEKISTAN
                                        </h4>
                                        <h4 className="fw-light lh-md" style={{ fontSize: "1.4rem" }}>
                                            CONFIRMATION OF COVID-19 TEST RESULT
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-12 col-md-2 p-md-3 py-lg-5 p-4 text-center">
                                    <img src={Gerb} alt="Image" className="w-100 mx-auto" />
                                </div>
                                <div className="col-12 col-md-5 p-md-3 p-lg-5 p-4 d-flex align-items-center">
                                    <div>
                                        <h4 className="fw-light lh-md" style={{ fontSize: "1.4rem" }}>
                                            МИНИСТЕРСТВО ЗДРАВООХРАНЕНИЯ РЕСПУБЛИКИ УЗБЕКИСТАН
                                        </h4>
                                        <h4 className="fw-light lh-md" style={{ fontSize: "1.4rem" }}>
                                            ПОДТВЕРЖДЕНИЕ РЕЗУЛЬТАТА ТЕСТА COVID-19
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserInform;