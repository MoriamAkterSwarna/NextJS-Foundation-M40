import { notFound } from "next/navigation";

const BlogDetails = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const blogs = [
    {
      id: 1,
      title: "Learn JavaScript",
      description: "Learn the fundamentals of JavaScript",
    },
    {
      id: 2,
      title: "Learn React",
      description: "Learn the fundamentals of React",
    },
    {
      id: 3,
      title: "Learn Next.js",
      description: "Learn the fundamentals of Next.js",
    },
  ];

  const blog = blogs.find((b) => b.id == id);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <h1>This is BlogDetails page {id} </h1>
      <p>{blog?.title}</p>
      <p>{blog?.description}</p>
    </div>
  );
};

export default BlogDetails;
