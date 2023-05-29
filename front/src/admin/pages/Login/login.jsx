import { useNavigate } from "react-router-dom"
import "./login.css"
import { useContext, useState } from "react"
import { UserContext } from "../../../context/userContext/userContext"
import login from "../../../api/login"



const LoginPage = () => {

    const navigate = useNavigate()
    const { loginSubmit } = useContext(UserContext)
    const [wrongLogin, setWrongLogin] = useState('')
    const [loginForm,setLoginForm]=useState({
        email: 'admin@gmail.com',
        password: 'admin54321'
    })

    const LoginHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        setLoginForm({
            email: formData.get('email'),
            password: formData.get('password')
        })

        try {
            let loginUser = await login(loginForm);
            if (loginUser.isAdmin) {
                loginSubmit();
                navigate('/admin');
            }
        } catch (error) {
            setWrongLogin(error.message)
        }

    }

    const changeHandler=(e)=>{
       const {name,value}=e.target
       setLoginForm(prev=>({
        ...prev,
        [name]:value
       }))
    }

    return (
        <div>
            <p className="login-title">Admin panel</p>

            <div className="login">
                {
                    wrongLogin && <div className="wrong-login">{wrongLogin}</div>
                }
                <form onChange={changeHandler} onSubmit={LoginHandler}>
                    <div className="login-input">
                        <label>
                            <p>Login</p>
                            <input type="email" name='email' value={loginForm.email}/>
                        </label>
                    </div>
                    <div className="login-input">
                        <label>
                            <p>Password</p>
                            <input type="password" name='password' value={loginForm.password}/>
                        </label>
                    </div>
                    <div className="login-submit">
                        <input type="submit" value='Sign in' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;