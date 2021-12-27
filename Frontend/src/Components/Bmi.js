import React from "react";
import "./Bmi.css";
const Bmi = () => {
    const standardText = document.querySelector(".title-text .standard");
    const standardForm = document.querySelector("form.standard");
    const standardBtn = document.querySelector("label.standard");
    const metricBtn = document.querySelector("label.metric");
    const metricLink = document.querySelector("form .metric-link a");
    metricBtn.onclick = (()=>{
      standardForm.style.marginLeft = "-50%";
      standardText.style.marginLeft = "-50%";
    });
    standardBtn.onclick = (()=>{
      standardForm.style.marginLeft = "0%";
      standardText.style.marginLeft = "0%";
    });
    metricLink.onclick = (()=>{
      metricBtn.click();
      return false;
    });

    return (
      <>
      <div className="body">
      <div class="wrapper">
         <div class="title-text">
            <div class="title BMI">
               B.M.I. Calculator
            </div>
         </div>
         <div class="form-container">
            <div class="slide-controls">
               <input type="radio" name="slide" id="standard" checked />
               <input type="radio" name="slide" id="metric" />
               <label for="standard" class="slide standard">Standard</label>
               <label for="metric" class="slide metric">Metric</label>
               <div class="slider-tab"></div>
            </div>
            <div class="form-inner">
               <form action="#" class="standard" >
                  <div class="field">
                     Enter Your Height:
                     <br />
                     <input type="number" placeholder="(Feet)" required />
                     <input type="number" placeholder="(Inches)" required />
                  </div>
                  <div class="field2">
                     Enter Your Weight:
                     <input type="number" placeholder="(Pounds)" required />
                  </div>
                  
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="submit" value="Compute BMI" />
                  </div >
                  <div class="field2">
                     Your BMI:
                     <input type="number" readonly />
                  </div>
               </form>
               <form action="#" class="metric">
                  <div class="field3">
                     Enter Your Height:
                     <br />
                     <input type="number" placeholder="(Centimeters)" required />
                  </div>
                  <div class="field2">
                     Enter Your Weight:
                     <input type="number" placeholder="(Kilograms)" required />
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="submit" value="Compute BMI" />
                  </div>
                  <div class="field2">
                     Your BMI:
                     <input type="number" readonly />
                  </div>
               </form>
            </div>
         </div>
      </div>
      </div>
      </>  
    );
    
};

export default Bmi;