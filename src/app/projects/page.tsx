
import Image from "next/image"
import React from "react"
import pepsiWebImage from "../../../public/images/pepsiedited.jpg"
import attendenceAppImage2 from "../../../public/images/smitedited.jpg"
import randomColorImage from "../../../public/images/randmColorEdited.jpg"
import clockTimeImage from "../../../public/images/clockEdited.jpg"




 export default function Projects(){
     const hostedUrl1 : string ="https://kainaturooj.github.io/mini-hacathone/"
     const hostedUrl2 : string ="https://kainaturooj.github.io/Responsive-Digital-Clock/"
     const hostedUrl3 : string ="https://kainaturooj.github.io/SMIT-Attensence-App/"
     const hostedUrl4 : string ="https://kainaturooj.github.io/Random-Color-generator-responsive/"
     return(
         <>
             
        <h1 className=" projectHeading text-white"><span className="myproject"> My </span> Projects </h1>
           
           
        <div className="projectContainer  text-white">

            {/* //////////////////////// project 1 ///////////////////////////// */}

             <div className="project1 projectBox">
              
             <Image src={pepsiWebImage} alt="pepsi website image" ></Image>

             </div>
             <div className="project1Descrip projectBox">
           
              <h3 className="project1Title">Pepsi Website clone.</h3>
              <p className="project1Conent">
                  
            HTML CSS 
            <br />
            <a className="link1" href={hostedUrl1} target="_blank" rel="noopener noreferrer">
             Preview
            </a>
                  
            </p>

        </div>


        {/* //////////////////////// project 2 ///////////////////////////// */}
            
    <div className="project2 projectBox">
           
        <Image src={clockTimeImage} alt="pepsi website image" ></Image>

        </div>
        <div className="project2Descrip projectBox">
        <h3 className="project2Title">Clock Time App.</h3>

        <p className="project2Conent">
     
        HTML CSS JS
        <br />
        <a className="link2" href={hostedUrl2} target="_blank" rel="noopener noreferrer">
        Preview
        </a>
         
        </p>


    </div>

    {/* //////////////////////// project 3 ///////////////////////////// */}
            
            
    <div className="project3 projectBox">

        <Image src={attendenceAppImage2} alt="pepsi website image" ></Image>

    </div>
    <div className="project3Descrip projectBox">

       <h3 className="project3Title">Attendence App.</h3>
       <p className="project3Conent">
     
       HTML CSS JS
       <br />
       <a className="link3" href={hostedUrl3} target="_blank" rel="noopener noreferrer">
       Preview
       </a>
     
       </p>
    
    </div>


   {/* //////////////////////// project 4 ///////////////////////////// */}


    <div className="project4 projectBox">
        <Image src={randomColorImage} alt="pepsi website image" ></Image>

    </div>
    <div className="project4Descrip projectBox">
            
        <h3 className="project4Title">Random Color Generator.</h3>
        <p className="project4Conent">
     
         HTML CSS JS
        <br />
        <a className="link4" href={hostedUrl4} target="_blank" rel="noopener noreferrer">
         Preview
        </a>
     
        </p>

    </div>
          

    </div>
        
    </>
    )
}



