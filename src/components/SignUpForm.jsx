import {useState} from 'react'


export default function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit (event) {
        event.preventDefault();
        console.log("hello!!");
    }

    return (
        <>
    <h2> Sign Up </h2>

    <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange = {(e) => setUsername(e.target.value)}/>
        </label>
        <label>
            Password: <input value={password} onChange = {(e)=> setPassword(e.target.value)} />
        <button>Submit</button>
        </label>

    </form>
    </>
    )
}