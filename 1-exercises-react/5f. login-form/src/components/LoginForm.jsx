 import { useState } from 'react'
 import './LoginForm.css'
 
 function LoginForm() {
    const [ showPassword, setPasword ] = useState(true);

    function togglePassword() {
        if(showPassword) {
            setPasword(false);
        } else {
            setPasword(true);
        }
    }

    return (
        <>
            <div>
                    <input type="email" placeholder="Email" />
            </div>
            <div>
                    <input type={showPassword ? 'text' : 'password'} placeholder="Password" />
                    <button 
                        onClick={togglePassword}
                        className='show-password'
                    >Hide</button>
            </div>
            <button>Login</button>
            <button>Sign up</button>
        </>
    )
}

export default LoginForm