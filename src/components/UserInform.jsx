import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Gerb from '../media/emblem.svg';
import http from '../services/axios';
import '../All.css';

function UserInform() {
    const [patient, setPat] = useState({});
    const [count, setCount] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        http.get('/patient/' + id)
            .then(res => {
                setPat(res.data);
                setCount(Math.floor(Math.random() * 10000000));
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
                        <h1 style={{ fontSize: "1.8rem" }} className="text-dark fw-light text-start">Patient: {patient.fi}</h1>
                        <div className="flag-border pt-2 px-2 pb-1 pt-lg-5 px-lg-5 pb-lg-2 bg-white">
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
                            <div className="text-start">
                                <div class="my-2">
                                    <h5>
                                        <strong>ID / Номер: </strong>
                                        <span>{count}</span>
                                    </h5>
                                </div>
                                <div class="my-2">
                                    <h5>
                                        <strong>Laboratory (name) / Лаборатория (название):
                                        </strong>
                                        <span>"World Medical Laboratory" LLC</span>
                                    </h5>
                                </div>
                                <div class="my-2">
                                    <h5>
                                        <strong>Place of sampling / Место забора анализа
                                            : </strong>
                                        <span>"World Medical Laboratory" LLC</span>
                                    </h5>
                                </div>
                                <div class="my-2">
                                    <h5>
                                        <strong>Research method / Метод исследования: </strong>
                                        <span>Real-Time Polymerase chain reaction method (Real-Time PCR) / Полимеразная цепная реакция в реальном времени (ПЦР)</span>
                                    </h5>
                                </div>
                                <hr style={{ border: "4px solid #bbb" }} />
                                <div class="my-2">
                                    <h5>
                                        <strong>Passport / Серия и номер паспорта: </strong>
                                        <span>{patient.passport}</span>
                                    </h5>
                                </div>
                                <div class="my-2">
                                    <h5>
                                        <strong>Full name / Полное имя
                                            : </strong>
                                        <span>{patient.fi}</span>
                                    </h5>
                                </div>
                                <div class="my-2">
                                    <h5>
                                        <strong>Birth date / Дата рождения
                                            : </strong>
                                        <span>{patient.birthday}</span>
                                    </h5>
                                </div>
                                <div class="my-2">
                                    <h5>
                                        <strong>Sex / Пол
                                            : </strong>
                                        <span>
                                            {patient.gender === "male" ? "Male / Мужчина" : "Female / Женщина"}
                                        </span>
                                    </h5>
                                </div>
                                <div class="my-2">
                                    <h5>
                                        <strong>Analysis date / Дата сдачи анализа
                                            : </strong>
                                        <span>
                                            {patient.date_registiration}
                                        </span>
                                    </h5>
                                </div>
                                <div class="my-2 d-flex align-items-baseline">
                                    <h5 class="mr-2">
                                        <strong>Test result and date / Результат и дата теста
                                            : </strong>
                                    </h5>
                                    <h4>
                                        <span>Negative / Отрицательный</span>
                                        <strong>({patient.take_date})</strong>
                                    </h4>
                                </div>
                                <div class="row my-2">
                                    <div class="col-md-4"></div>
                                    <div class="col-md-4">
                                        <div id="qrContainer" class="w-100">
                                            <img height="256px" width="256px" src={patient.qr_code} alt="ds" />
                                        </div>
                                    </div>
                                    <div class="col-md-4"></div>
                                </div>
                                <div class="mt-5 mx-auto text-center">
                                    <h6 class="text-uppercase">
                                        <span>Sanitary-epidemiological Welfare and Public Health Service of the Republic of Uzbekistan</span>
                                    </h6>
                                    <h6>
                                        <span>Address: </span>
                                        <span>Tashkent city. Chilanzar district, Bunyodkor street, 46</span>
                                    </h6>
                                    <h6>
                                        <span>Phone: </span>
                                        <a href="tel:998338810900">+998 33 881 09 00</a>
                                    </h6>
                                    <h6>
                                        <span>Email: </span>
                                        <a href="mailto:worldmedicallabaratory@gmail.com">
                                            worldmedicallabaratory@gmail.com
                                        </a>
                                    </h6>
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