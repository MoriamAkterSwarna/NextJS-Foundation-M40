import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   
    <>

      <h1>This is Home page </h1>

      <br />

      <Link href="/about">
        <button className="btn">Go to About</button>
      </Link> 
      <br />

      <Link href="/about/team">
        <button className="btn">Go to Team</button>
      </Link>

      <br />


      <Link href="/contact">
        <button className="btn">Go to Contact</button>
      </Link>

      <br />
      <Link href="/contact/contactForm">
        <button className="btn">Contact Form</button>
      </Link>
    
    </>
  );
}
