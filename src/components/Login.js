import React from 'react';

function Login() {
return(
    <div className='d-flex justify-content-center align-items-center bg-black vh-100'>
      <div className='bg-white p-3 rounded w-35'>
        <form action ="">
            <div className='mb-3' >
            <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter Email'/>
             
            </div>
            <div className='mb-3' >
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter Password'/>
            </div>
            <center>
            <button className='btn btn-success' >Login </button>
            </center>
            <p>You agree to our terms and conditions</p>
            <button className='btn btn-default border'>Create Account</button>
        </form>
      </div>
    </div>
)
}

export default Login