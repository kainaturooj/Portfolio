import Image from "next/image"
import profileImage from "../../../public/images/profilepic2-removebg-preview.png"


export default function About(){
    return(
        <>
           {/* <div className=" aboutDiv divOne">About Me.</div> */}

           <h1 className=" aboutHeading text-white">About  <span className="aboutMe"> Me.</span> </h1>
           
        
        <div className="aboutContainer">
           
           <div className=" aboutDiv imageDiv">

            <Image src={profileImage} alt="profile image" ></Image>
            

           </div>
           <div className="  contentDiv">
           <p className="">As an analytical chemist by profession, 
           I bring a detail-oriented and scientific approach 
           to my work. My passion for technology has led me 
           to pursue frontend development, 
           where I enjoy creating seamless 
           and engaging user experiences. Currently, 
           I’m expanding my skills in artificial 
           intelligence and exploring the exciting potential of the metaverse."
           </p>


           </div>

        </div>

        </>
    )
}