import React from 'react'
import './Reg.css'
export default function DonorReg() {
  return (
    <div>
        <div class="signupform">
	
    <div class="container">
        
        <div class="agile_info">
            <div class="w3l_form">
            <br></br>
            <br></br>

            

            </div>
            <div class="w3_info">
                <h2>Registration Info</h2>
                <br/><br/><br/>
                
                    <form action="#" method="post">
                        <div class="input-group">
                                <span><i aria-hidden="true"></i></span>
                                <input type="text" placeholder="Name" required=""/> 
                            </div>
                            <div class="input-group">
                                <span><i aria-hidden="true"></i></span>
                                <input type="text" placeholder="Birth Date" required=""/> 
                            </div>
                            <div class="input-group">
                                <span><i aria-hidden="true"></i></span>
                               <label for="gender"> Gender</label> 
                                <input type="gender" placeholder="Gender" required=""/>
                                
                                <div class="form-w3-agile-text2">
                                    <select class="form-control">
                                        
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                
                            </div>
                        
                        <div class="input-group">
                            <span><i aria-hidden="true"></i></span>
                            <input type="email" placeholder="Email" required=""/>
                        </div>        
                        <div class="input-group">
                            <span><i aria-hidden="true"></i></span>
                            <input type="text" placeholder="Phone" required=""/>
                        </div>
                            <button class="btn btn-danger btn-block" type="submit">Submit</button >                
                    </form>
            
            </div>
        </div>
        
    </div>
   
    
</div>
    </div>
  )
}
