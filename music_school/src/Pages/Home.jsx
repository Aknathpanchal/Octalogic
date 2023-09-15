import React from "react";
import Cards from "../components/Cards";
import DataTable from "../components/DataTable";

function Home() {
  return (
    <div className="p-6 justify-center">
      <h1 className="text-left text-4xl font-bold text-gray-500">Overview</h1>
      <Cards />
      <DataTable/>
    </div>
  );
}

export default Home;
