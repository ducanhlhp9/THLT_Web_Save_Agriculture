
import axios from 'axios'
export function PostData(type, userData) {
  let BaseURL = 'https://api.thewallscript.com/restful/';
  //let BaseURL = 'http://localhost/PHP-Slim-Restful/api/';

  return new Promise((resolve, reject) =>{


    fetch(BaseURL+type, {
      method: 'POST',
      body: JSON.stringify(userData)
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });


  });
}
export const register = newUser=>{
  return axios.post('api/register', newUser, {
    headers:{'Content-Type':'application/json'}
  }).then(res =>{
    console.log(res)
  }).catch(
    err=>{
      console.log(err)
    }
  )
};

export const login = User=>{
  return axios.post('api/login', {
    email: User.email,
    password: User.password,
  }, {
    headers:{'Content-Type':'application/json'}
  }).then(res =>{
    console.log(res)
  }).catch(
    err=>{
      console.log(err)
    }
  )
};

export const getProfile = ()=>{
  return axios.get('api/user-info',  {
    headers:{Authorization:`Bearer ${localStorage.usertoken}`}
  }).then(res =>{
    console.log(res)
    return res.data;
  }).catch(
    err=>{
      console.log(err)
    }
  )
};

