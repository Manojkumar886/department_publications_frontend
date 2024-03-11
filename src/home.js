import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from 'react-router';

export let Home = () => {

  const navigate = useNavigate();

  const NavigateLogin = () => {
    navigate('/login')
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
                onClick={NavigateLogin}
              >LOGIN</button>
            </div>
          </div>
        </header>
      </div>
    </>
  );

}