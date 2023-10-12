import React from 'react'
import axios from 'axios'
export default function ForTesting() {
    const loginToOdoo = async () => {
        const url = 'http://localhost:8069/web/login';
        const username = 'admin';
        const password = 'admin';
        
        try {
          const response = await axios.post(url, {
            jsonrpc: '2.0',
            method: 'call',
            params: {
              db: 'AddiS-Test',
              login: username,
              password: password
            }
          });
          
          // Handle the response, check for successful login, and perform further actions
          console.log(response.data);
        } catch (error) {
          // Handle any errors that occur during the login process
          console.error(error);
        }
      }
  return (
    <div>forTesting

<button onClick={loginToOdoo} className='bg-orange-700 p-2 text-white'>test login</button>
    </div>
  )
}
