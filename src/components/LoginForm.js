import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import logo from '../assets/images/login/01.png'
import { loginAction } from '../redux/actions/loginAction'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        email: '',
        password: ''};
      }
    handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        await this.props.loginAction(data)
    }
    handleChange=(e)=> {
        this.setState({[e.target.name]: e.target.value});
      }
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
                                                        <form  onSubmit={(e)=>this.handleSubmit(e)} method="post">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="floating-label form-group">
                                                                        <input className="floating-input form-control" type="email" placeholder=" " name="email" value={this.state.email} onChange={this.handleChange}/>
                                                                        <label>Email</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <div className="floating-label form-group">
                                                                        <input className="floating-input form-control" type="password" placeholder=" "name="password" value={this.state.password} onChange={this.handleChange}/>
                                                                        <label>Password</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="custom-control custom-checkbox mb-3">
                                                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                        <label className="custom-control-label control-label-1" for="customCheck1">Remember Me</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="alert alert-danger" role="alert">
                                                                This is a danger alert—check it out!
</div>
                                                            <button type="submit" className="btn btn-primary">Sign In</button>
                                                            <p className="mt-3">
                                                                Create an Account <Link to="/signup" className="text-primary">Sign Up</Link>
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

const mapStateToProps = (state) => {
    return {
        loginState: state.login,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: (data) =>
            dispatch(loginAction(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)



