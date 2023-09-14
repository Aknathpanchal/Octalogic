import "./App.css";
import Sidebar from "@/components/Sidebar";
import MainRoutes from "./Routes/mainRoutes";
import DataTable from "./components/DataTable";

function App() {
  return (
    <>
      <div className="flex bg-gray-200">
        <Sidebar />
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
