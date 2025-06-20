// import React, { useState } from 'react';
import React from 'react';
import './Container.css';

 function Container() {
   let x = document.getElementById("Input-file")
   let y = document.getElementById("image_div");
   let Enter = document.getElementById("Enter");

   Enter.addEventListener("click",()=>{
        y.innerHTML=x.innerHTML;
   });
 












  return (
    <div id="Container">
     <div id='Input_div'>
      <div id='filechoose'>
        <h1>Upload file here</h1>
        <input type="file" id='Input-file' />
      </div>
      {/* <input type="text" id='Prompt' /> */}
      <textarea name="" id="Prompt"  placeholder='Enter the Prompt here'/>
     <button id="Enter">
      Enter
     </button>

     </div>

     <div id='Display'>
     <div id='image_div'> display
       </div>


       <button id='Download'>Download</button>

     </div>
  




    </div>
  );
}

export default Container;