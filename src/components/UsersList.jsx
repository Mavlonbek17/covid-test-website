// import React from "react";
import { useEffect, useRef, useState } from 'react';
import http from '../services/axios';
import { saveAs } from "file-saver";

function UsersList() {
    const [patients, setPatients] = useState([]);
    const loader = useRef();

    useEffect(() => {
        http.get("icode/client/")
            .then(response => {
                setPatients(response.data);
            })
            .catch(err => alert(err));
    }, []);

    const AddUser = (e) => {
        e.preventDefault();
        e.target[6].classList.add("d-none");
        loader.current.classList.remove("d-none");
        let patient = {
            fi: e.target[0].value,
            birthday: e.target[2].value,
            gender: e.target[3].value,
            date_registiration: e.target[4].value.replace(/T/, " "),
            take_date: e.target[5].value.replace(/T/, " "),
            passport: e.target[1].value
        };

        http.post("icode/client/add/", JSON.stringify({patient}))
            .then(response => {
                setPatients([...patients, response.data]);
                e.target[6].classList.remove("d-none");
                loader.current.classList.add("d-none");
                e.target.reset();
            })
            .catch(err => alert(err));
    }

    const delete_p = (id, p_name) => {
        let c = window.confirm(`Are you sure to delete ${p_name}'s all info?`);
        if (c) {
            let del_btn = document.getElementById('del_btn_' + id);
            let del_btn_sibling = del_btn.nextElementSibling;
            del_btn.classList.add("d-none");
            del_btn.classList.add("disabled");
            del_btn_sibling.classList.remove("d-none");
            http.delete(`icode/client/${id}/`)
                .then(response => {
                    if (response.data === '') {
                        setPatients(patients.filter(p => p.id !== id));
                    }
                })
                .catch(err => alert(err));
        }
    }

    const saveFile = (imgUrl, p_name) => {
        saveAs(
            imgUrl,
            p_name + ".png"
        );
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-xl-4 offset-xl-0 offset-md-3 py-3">
                    <div className="card text-secondary shadow-sm">
                        <div className="card-header bg-white">
                            <b className="fs-4">Create User</b>
                        </div>
                        <form id="form" onSubmit={(e) => AddUser(e)}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">FIO</label>
                                    <input autoComplete='off' type="text" id="fullName" required className="text-secondary form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="passport" className="form-label">Passport</label>
                                    <input autoComplete='off' type="text" id="passport" required className="text-secondary form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="birthday" className="form-label">Tug'ilgan sanasi</label>
                                    <input autoComplete='off' type="date" required className="text-secondary form-control" id="birthday" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <select id="gender" className="text-secondary form-select">
                                        <option value="----">-----</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="date-reg" className="form-label">Topshirgan sanasi</label>
                                    <input autoComplete='off' type="datetime-local" required className="text-secondary form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="date-take" className="form-label">Olgan sanasi</label>
                                    <input autoComplete='off' type="datetime-local" required className="text-secondary form-control" />
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-end bg-white text-end">
                                <button className="d-flex justify-content-center align-items-center btn btn-primary">
                                    <i className="bi bi-plus"></i>
                                    Create
                                </button>
                                <button ref={loader} className="d-flex d-none justify-content-center align-items-center btn btn-primary disabled">
                                    <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                                    Creating...
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-xl-8 py-3">
                    <div className="table-responsive">
                        <table className="table bg-white table-hover shadow-sm" style={{minWidth: "670px"}}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Ismi</th>
                                    <th>Passport</th>
                                    <th>Gender</th>
                                    <th>Tugilgan Sana</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.map((patient, index) => {
                                    return (
                                        <tr key={patient.id}>
                                            <td>{index + 1}</td>
                                            <td>{patient.fi}</td>
                                            <td>{patient.passport}</td>
                                            <td>{patient.gender}</td>
                                            <td>{patient.birthday}</td>
                                            <td>
                                                <span className='btn-group'>
                                                    <i className='bi bi-pencil-square btn btn-primary custom btn-sm'></i>
                                                    <i onClick={() => delete_p(patient.id, patient.fi)} id={'del_btn_' + patient.id} className='bi bi-trash btn btn-danger custom btn-sm'></i>
                                                    <button className='btn btn-danger disabled btn-sm d-none px-2'>
                                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    </button>
                                                    <i onClick={() => saveFile(patient.qr_code, patient.fi)} className='bi bi-download btn btn-warning custom btn-sm'></i>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersList;