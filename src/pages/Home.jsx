import React,{useState,useEffect} from 'react'
import Cards from '../components/Cards';
const Home = () => {
    const [Users, setUsers] = useState();
    const [Userid, setUserid] = useState(1)
    
    useEffect(() => {
       return async () => {
            //  API call
            const response = await fetch("https://reqres.in/api/users/");
        
            const json =await  response.json();
          
            setUsers(json.data);
        console.log(Users)
       }
    });
   

  return (
   <>
   
   <br/>
   <Cards id={{Userid}}/>
   {
    (Users) ?
    Users.map(data =><button  type="button" className="btn btn-primary m-4 pl-3 pw-4" onClick={() => setUserid(data.id) }>{data.id}</button>):<h1></h1>
   }
   </>
  )
}

export default Home