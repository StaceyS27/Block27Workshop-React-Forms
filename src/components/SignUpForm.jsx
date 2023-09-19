import {useState} from 'react'
import App from '../App';
import Authenticate from './Authenticate';


export default function SignUpForm({setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    function handleUserNameChange (e) {
        if (e.target.value.length > 8) {
            setError("Username too long");     
        }
        setUsername(e.target.value);
    }


    async function handleSubmit (event) {
        event.preventDefault();
       
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })

            const result = await response.json();
            console.log(result);
            setToken(result.token);
    
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
    <h2> Sign Up </h2>
    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
        <label>
            Username: {" "}
             <input value={username} onChange = {handleUserNameChange}/>
        </label>
        
         <br/>
        <label>
            Password: {" "}
            <input value={password} onChange = {(e)=> setPassword(e.target.value)} />
            <br/>
        <button className='submitButton'>Submit</button>
        </label>

    </form>
    </>
    )
}