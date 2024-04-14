import React, { useState } from 'react';
import './form.scss';

import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';




const Form = () => {

  // service id-   service_qh6nbk5
  // templage id-template_vkoi4mg
  // public key-qlMxZrBX4yHqkVmH3

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

    const [to_name,setTo_Name]=useState("");
    const[from_name,setFrom_Name]=useState("");
    const[reply_to,setReply_To]=useState("");
    const[subject,setSubject]=useState("");
    const[message,setMessage]=useState("");

  const sendEmail = (data,e) => {
    // e.preventDefault();
    // console.log(form.current,"checking form.curent");
       
    console.log("checking data",data ,  "and event", e)
        
    // const templateParams = {
    //   to_name: 'Rajesh',
    //   // from_name:from_name,
    //   // reply_to:reply_to,
    //   // subject:subject,
    //   // message: message,
    // };
    
    emailjs
      .send('service_qh6nbk5', 'template_vkoi4mg', data, {
        publicKey: 'qlMxZrBX4yHqkVmH3',
      })
      .then(
        (response) => {
          console.log('SUCCESS!',  response , response.status, response.text);
          toast("message sent successfully 👍 ")

          document.getElementById("queryForm").reset();
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );

  };
  
  return (
    <div className='form-container'>    
      <form 
        id='queryForm'
        onSubmit={handleSubmit(sendEmail)}
      >  

      <div className="input-field">
         <input 
          type="text"
          placeholder='Your Name...'  
          name='from_name'
          id='from_name'
          // value={from_name}
          // onChange={(e)=>setFrom_Name(e.target.value)}
          {...register("from_name" ,{
            required:"Name is required",
            maxLength:{
              value:15,
              message:"Minimum 15 Charecters"
            }
          })}
          
         />
         {
          errors?.from_name && <p className='error-field' > {errors?.from_name?.message}  </p>
         }
      </div>

      <div className='input-field' >
        <input 
        type="text"  
          placeholder='your email ...'
          name="reply_to"
          //  id='reply_to'
          // value={reply_to}
          // onChange={(e)=>setReply_To(e.target.value)}
           {
            ...register("reply_to" ,{
              required:"email is required",
              pattern:{
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ,
              
              
                message:"please enter valid email address"
              }
            })
           }
        />
        {
          errors?.reply_to?.message &&  <p className='error-field' > {  errors?.reply_to?.message} </p>
        }

      </div>
        
      <div className="input-field">
         <input 
          type="number"
          placeholder='Phone'  
          name='to_mobile'
          id='to_mobile'
          {...register("to_mobile" ,{
            required:"phone number is required",
            maxLength:{
              value:10,
              message:"10 digits mobile number is allowed"
            }
          })}
          
         />
         {
          errors?.to_mobile && <p  className='error-field' > {errors?.to_mobile?.message}  </p> 
         }
      </div>
          
      <div className="input-field">
         <input 
          type="text"
          placeholder='subject'  
          name='subject'
          id='subject'
          // value={subject}
          // onChange={(e)=>setSubject(e.target.value)}
          {...register("subject" ,{
            required:"subject is required",
            maxLength:{ 
              value:25,
              message:"Minimum 25 Charecters"
            }
          })}
          
         />
         {
          errors?.subject && <p className='error-field' > {errors?.subject?.message}  </p>
         }
      </div>

      <div className="text-area">
        <textarea type="text" 
           className="allarea" 
          id='message'
          name='message'
          // placeholder='your message'
          // value={message}
          onChange={(e)=>setMessage(e.target.value)}
          {
            ...register("message",{
              // minLength:{
              //   value:15,
              //   message:" minimum 15 charecters is required "
              // },
              maxLength:{
                value:200,
                message:"you can write maximum 30 charecters"
              }
            })
          }
        />


        {
          errors?.message && <p className='error-field' > {errors?.message?.message}  </p>
        }
      </div> 

<div className='btn'> <button type='submit'  >  Submit </button>
</div>       



      </form>
      
    </div>
  )
}

export default Form
