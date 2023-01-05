import React,{useState,useEffect} from 'react'
const Cards = (userid) => {
   const [User, setUser] = useState()
    useEffect(() => {
        if(userid.id.Userid!==0)
        return  async () => {
            const response =await fetch(`https://reqres.in/api/users/${userid.id.Userid}`);
            const json = await response.json();
            console.log(json);
            setUser(json);
        }
        
    });
    
  return (
    <div>
        {
        (User)?<section class="vh-80" style={{backgroundColor: "#eee"}}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-12 col-xl-4">
      
              <div class="card" style={{borderRadius: "15px"}}>
                <div class="card-body text-center">
                  <div class="mt-3 mb-4">
                    <img src={User.data.avatar}
                      class="rounded-circle img-fluid" style={{width:"100px" }} alt="..."/>
                  </div>
                  <h4 class="mb-2">{User.data.first_name} {User.data.last_name}</h4>
                  <p class="text-muted mb-4">{User.data.email}</p>
                  <button type="button" class="btn btn-primary btn-rounded btn-lg">
                    Message now
                  </button>
                </div>
              </div>
      
            </div>
          </div>
        </div>
      </section>:<h1>No user till now</h1>
        }
    </div>
   
    
  )
}

export default Cards