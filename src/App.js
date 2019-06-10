import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <div className="navbar navbar-default">
                <a className="navbar-brand">API</a>
                <ul className="nav navbar-nav">
                    <li>
                        <a>Trang chủ</a>
                    </li>
                    <li>
                        <a>Quản lý sản phẩm</a>
                    </li>
                </ul>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="button" className="btn btn-info">
                            Thêm Sản Phẩm
                        </button><br /><br />
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
                            </div>
                            <div className="panel-body">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Mã</th>
                                            <th>Tên</th>
                                            <th>Giá</th>
                                            <th>Trạng Thái</th>
                                            <th>Hành Động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>Iphone 6 Plus</td>
                                            <td>5000000</td>
                                            <td>
                                                <span className="label label-warning">
                                                    Còn Hàng
                                                </span>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-success">
                                                    Sửa
                                                </button>&nbsp;
                                                <button type="button" className="btn btn-danger">
                                                    Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
