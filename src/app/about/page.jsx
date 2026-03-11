import Link from "next/link";

const AboutPage = () => {
 return (
 <div>
 <h1>This is About page </h1> 

 <Link href="/about/team">
 <button className="btn">Go to teamPage</button>
 </Link>
 </div>
 )
};

export default AboutPage;