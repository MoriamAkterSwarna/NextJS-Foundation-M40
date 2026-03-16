



export default function DashboardLayout({ children }) {
  return (
    <div className="flex items-center">

        <h1 className="mr-4">Sidebar</h1> 
         
      {children}
    </div>
  );
}