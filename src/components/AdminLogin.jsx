import React, { useRef } from "react";

function AdminLogin({ AdminAuth }) {
    const formRef = useRef();

    const AdminAuthSend = (e) => {
        e.preventDefault();
        AdminAuth(e.target[0].value, e.target[1].value);
        e.target.reset();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 vh-100 d-flex justify-content-center align-items-center">
                    <div className="card">
                        <div className="card-header">
                            <b className="fs-4">Логин</b>
                        </div>
                        <form ref={formRef} onSubmit={(e) => AdminAuthSend(e)}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Логин</label>
                                    <input type="text" id="name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Пароль</label>
                                    <input type="password" id="password" className="form-control" />
                                </div>
                            </div>
                            <div className="card-footer text-end">
                                <button className="btn btn-primary">
                                    Кириш
                                    <i className="bi bi-box-arrow-right ms-1"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin;