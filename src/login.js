import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './login.css'
import { useState } from 'react'
import { Loginperformance } from './connect'
export let Loginpage = () => {

    const [user, setUser] = useState({
        "username": "",
        "password": ""
    })

    const onPerform = (eve) => {
        const { name, value } = eve.target
        setUser((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }

    const onlog = async () => {
        await Loginperformance(user)
        window.location.assign("/");

    }
    return (
        <>
            <div className='container-fluid'>
                <header className="row justify-content-center ms-lg-5 bg-dark" style={{ margin: 'auto' }}>
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
                            <button className=' btn btn-outline-primary'
                            >LOGIN</button>
                        </div>
                    </div>
                </header>
            </div>
            <div className='row justify-content-center mt-5 '>
                <div className='col-4'>
                    <img src={require('./images/logo.jpg')} />
                </div>
                <div className='col-5'>
                    <div className='card '>
                        <h4 className='text-center mt-5'>DEPARTMENT OF COMPUTER SCIENCE</h4>
                        <div className='form-group mx-4 my-2'>
                            <label className='form-label'>USERNAME</label>
                            <input className='form-control'
                                type='text'
                                onChange={onPerform}
                                value={user.username}
                                name="username"
                                placeholder='ADMIN USERNAME' />
                        </div>
                        <div className='form-group mx-4 my-2'>
                            <label className='form-label'>PASSWORD</label>
                            <input className='form-control'
                                type='password'
                                onChange={onPerform}
                                value={user.password}
                                name="password"
                                placeholder='ADMIN PASSWORD' />
                        </div>
                        <div className='row justify-content-center mt-3 mb-1'>
                            <button className='btn btn-outline-primary col-5 '
                                onClick={onlog} >LOGIN</button>
                        </div>
                        <div class="d-flex justify-content-around align-items-center mb-1 mt-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                <label class="form-check-label" for="form1Example3"> Remember me </label>
                            </div>
                            <a href="#!">Forgot password?</a>
                        </div>
                        <div class="d-flex justify-content-center text-center mt-4 pt-1">
                            <a href="#!"><i class="bi bi-facebook  "></i></a>
                            <a href="#!"><i class="bi bi-whatsapp ms-5"></i></a>
                            <a href="#!"><i class="bi bi-github ms-5"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

