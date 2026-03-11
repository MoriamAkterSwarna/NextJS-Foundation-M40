import Link from "next/link";

const ContactPage = () => {
 return (
 <div>
 <h1>This is Contact page </h1>
 <Link href="/contact/contactForm">
 <button className="btn">Go to Contact Form</button>
 </Link>
 </div>
 )
};

export default ContactPage;