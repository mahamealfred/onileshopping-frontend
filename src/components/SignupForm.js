import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/login/01.png'

export default class SignupForm extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <section className="login-content">
                        <div className="container">
                            <div className="row align-items-center justify-content-center height-self-center">
                                <div className="col-lg-8">
                                    <div className="card auth-card">
                                        <div className="card-body p-0">
                                            <div className="d-flex align-items-center auth-content">
                                                <div className="col-lg-7 align-self-center">
                                                    <div className="p-3">
                                                        <h2 className="mb-2">Sign In</h2>
                                                        <p>Login to stay connected.</p>
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="floating-label form-group">
                                                                        <input className="floating-input form-control" type="email" placeholder=" " />
                                                                        <label>Email</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <div className="floating-label form-group">
                                                                        <input className="floating-input form-control" type="password" placeholder=" " />
                                                                        <label>Password</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="custom-control custom-checkbox mb-3">
                                                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                        <label className="custom-control-label control-label-1" for="customCheck1">Remember Me</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <a href="auth-recoverpw.html" className="text-primary float-right">Forgot Password?</a>
                                                                </div>
                                                            </div>
                                                            <button type="submit" className="btn btn-primary">Sign In</button>
                                                            <p className="mt-3">
                                                                Already have account <Link to="/" className="text-primary">Login</Link>
                                                            </p>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 content-right">
                                                    {/* <img src={require('../assets/images/login/01.png')} className="img-fluid image-right" alt="" /> */}
                                                    <img src={logo} className="img-fluid image-right" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}
