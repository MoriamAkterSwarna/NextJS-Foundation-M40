import Link from "next/link";


import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export { inter, poppins };


const AboutPage = () => {
 return (
 <div>
 <h1 className={inter.className}>This is About page </h1> 
 <p className={poppins.className}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit natus pariatur voluptates, atque officia soluta! Quod culpa pariatur corrupti magni, animi sint distinctio repellendus illum laboriosam vitae minus. Dignissimos, harum!</p>

 <Link href="/about/team">
 <button className="btn">Go to teamPage</button>
 </Link>
 </div>
 )
};

export default AboutPage;