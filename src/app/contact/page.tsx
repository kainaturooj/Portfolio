export default function ContactMe(){
    return(
        <>
            <h1 className="contactHeading">Get in <span className="contactTouch">touch</span></h1>

        <div className="contactContainer">
            <div className="contactBox box1"> <span className="  phoneText">Phone</span> 
                <br />
                <span className="contactNumber">12345678910</span>
            </div>
            <div className="contactBox box2"><span className="emailText">Email</span>  
                <br />
                <span className="gmailLink">kainaturooj1804a@gmail.com</span>
            </div>
            <div className="contactBox bo3"><span className="linkedinText">LinkedIn</span>
            <br />

            <span className="linkedinLink">Linkedin/in/kainaturooj</span>
            
            </div>
            <div className="contactBox box4"><span className="followText">follow</span>
            
            <br />

            <span className="followLink">github.com/kainaturooj</span>
            
            </div>
        </div>
        </>

    )
}