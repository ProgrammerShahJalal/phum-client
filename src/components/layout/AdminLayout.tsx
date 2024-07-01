import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <Outlet />
      <h1>This is Admin Layout component</h1>
    </div>
  );
};

export default AdminLayout;
