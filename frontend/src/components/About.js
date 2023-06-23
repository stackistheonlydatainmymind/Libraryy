import React from 'react'
// import{NavLink} from "react-router-dom";

 import '../About.css';

const About = () => {
  return (
    <>
    <div className="about">
     <div class="ab-container">
<table>
<tr>
<td>
<section>
<label for="fileToUpload">
<i class="fa fa-camera"></i>
<input type="file" id="fileToUpload" accept=".png,.jpg,jpeg,.PNG,.JPEG" name="fileToUpload" onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])"/>
</label>
<img src="https://i.ibb.co/yNGW4gg/avatar.png" id="blah" alt="Avatar"/>
</section>
<h1>Bharadwaj</h1>
{/* <h3>Web Designer & Developer</h3> */}
</td>
<td>
<ul>
<li><b>Full name</b> <input type="text" name="fname" id="fname" maxlength="100" value="Bharadwaj" required /></li>
<li><b>Email</b> <input type="email" name="email" id="email" maxlength="150" value="Bharadwajyl@gmail.com" required /></li>
<li><b>Contact number</b> <input type="tel" name="mobile" id="mobile" maxlength="10" value="0123456789" required /></li>
<li><b>Address</b> <input type="text" name="address" id="address" maxlength="250" value="Street, Pincode, Province/State, Country" required /></li>
</ul>

<td class="section2">
    <button class="btn-about">Edit profile</button>
    </td>
</td>
</tr>
<tr>
   
</tr>
</table>
</div>
</div>
    </>
    
  )
}

export default About