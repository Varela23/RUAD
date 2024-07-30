import React, { useState } from 'react';


const Login = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError]=useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit=async (event)=> {
        event.preventDefault();
        setError('');//limpia errores anteriores

        try{
            const response=await fetch('https://example.com/api/login', { // URL del servidor backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
                
            });
            const data=await response.json();
            if(response.ok){
                //login exitoso
                console.log('login successfull', data)
                // Aquí puedes redirigir al usuario o guardar tokens de autenticación, etc.

            }else{
                //login fallodo
                setError(data.message ||'error de login')

            }
           }catch (error){
            
           
            console.error('Error:',error);
            setError('Error de conección con el servidor');
           }
           
     }

  return (

    <div className='login-container'>
        <form onSubmit={handleSubmit} className='login-form'>
            <h2>Iniciar sesión</h2>
            <div className='form-group'>
                <label htmlFor='email'>Correo Electronico</label>
                <input 
                type='email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                required
                              
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Contraseña </label>
                <input 
                type='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                required
            </div>
            <div>
                <button type='submit' className='login-button'>Iniciar Sesión</button>
                
            </div>
            
        </form>
        
    </div>
  )
}

export default Login