 export default function AdminLayout({ children }) {
  return (
    <div className="flex items-center justify-end">

        <h1 className="mr-4">Right Side Bar</h1> 
         
      {children}
    </div>
  );
}