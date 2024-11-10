import Link from "next/link"


export default function NavBar(){
    return(
        <div className=" flex justify-between  mainContainer">
            
{/*             
            <div className="  bg-slate-300  leftContainer">
                <h1 className="">Portfolio</h1>
            </div> */}
            
            
            <div className="     rightContainer">
            
                <ul className=" gap-6 ">
                
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/skill">Skills</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/contact">Contact</Link></li>

                </ul> 
                
                
                
                
                
            </div>
        </div>
    )
}