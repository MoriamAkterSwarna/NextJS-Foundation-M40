import Link from "next/link";

const blogs = [
  {id:1, title:"Learn JavaScript" , description: "Learn the fundamentals of JavaScript"},
  {id:2, title:"Learn React", description: "Learn the fundamentals of React"},
  {id:3, title:"Learn Next.js", description: "Learn the fundamentals of Next.js"}
 ];

const BlogPage = () => {
 return (
 <div>
 <h1>This is Blog page </h1> 

    {
        // blogs.map(blog => <p key={blog.id}>{blog.title}</p>)
        blogs.map(blog => <Link key={blog.id} href={`/blog/${blog.id}`}>{blog.title} </Link>)
    }

 </div>
 )
};

export default BlogPage;