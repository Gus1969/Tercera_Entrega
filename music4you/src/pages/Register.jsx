
import React from 'react';
import '../pages/Register.css'
import NavFile from '../common/NavFile';
import { Container} from 'react-bootstrap';
import Footer from '../common/Footer';
import Register_validation from '../Register_validation';
import Validate from '../Validation';

const Register = () => {
  const {handleChange, values, handleSubmit, errors} = Register_validation(Validate);



  return (
    <div>
      <NavFile/>
      <Container className="wrapper">
        <div className="row g-3">
          <div className="col-lg-12 md-12 sm-12">
       <form onSubmit={handleSubmit}>
          <h3 className="form-title">User Registration</h3>

          <div className="form-group p-3">
              <label>First name</label>
              <input type="text" name='nombre' className="form-control" placeholder="First name" value={values.name} onChange={handleChange}/>
              {errors?.name && <p>{errors.name}</p>}
          </div>

          <div className="form-group p-3">
              <label>Last name</label>
              <input type="text" name="last" className="form-control" placeholder="Last name" value={values.last} onChange={handleChange} />
              {errors?.last && <p>{errors.last}</p>}
          </div>

          <div className="form-group p-3">
              <label>Email address</label>
              <input type="email" name="email" className="form-control" placeholder="Enter email" value={values.email}  onChange={handleChange} />
              {errors?.email && <p>{errors.email}</p>}
          </div>

          <div className="form-group p-3">
              <label>Password</label>
              <input type="password" name="password" className="form-control" placeholder="Enter password" value={values.password} onChange={handleChange} />
              {errors?.password && <p>{errors.password}</p>}
          </div>
          <div className="form-group p-3">
              <label>Confirm Password</label>
              <input type="password" name="confirm" className="form-control" placeholder="Enter password" value={values.confirm} onChange={handleChange} />
              {errors?.confirm && <p>{errors.confirm}</p>}
          </div>
            <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
          <div className=" d-flex justify-content-flex-end">
            Already have an account? Log in <a href="../pages/Login">here</a>
          </div>
        
      </form>
      </div>
      </div>
      
      </Container>
      <Footer/>
      
    </div>
  )
}

export default Register


