import Image from "next/image";
import Link from "next/link";

import styles from "../components/Home.module.css";

export default function Home() {
  return (
   
    <>

      <div className={styles.container}>
        <h1>This is Home page </h1>
      <p className={styles.description}>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <br />
      

      <ul className="flex *:mr-3 text-amber-500 *:hover:text-amber-700 *:hover:underline">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* <Link href="/about">
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
      </Link> */}
    
    </>
  );
}
