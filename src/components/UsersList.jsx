// import React from "react";

function UsersList() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 p-2">
                    <div className="card bg-light text-secondary">
                        <div className="card-header">
                            <b className="fs-4">Create User</b>
                        </div>
                        <form id="form" onSubmit={(e) => AddUser(e)}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">FIO</label>
                                    <input type="text" id="fullName" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="birthday" className="form-label">Tug'ilgan sanasi</label>
                                    <input type="date" className="form-control" id="birthday" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <select id="gender" className="form-select">
                                        <option value="----">-----</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="date-reg" className="form-label">Topshirgan sanasi</label>
                                    <input type="datetime-local" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersList;