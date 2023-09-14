import React from "react";
import Cards from "../components/Cards";
import DataTable from "../components/DataTable";

function Home() {
  return (
    <div className="p-6 justify-center">
      <h1 className="text-left text-4xl font-bold text-gray-500">Overview</h1>
      <Cards />
      {/* <div className=" mt-8 flex flex-row items-center justify-between self-stretch">
      <h1 className="text-left text-2xl font-semibold text-gray-500">LATEST ENROLMENTS</h1>
      <div className="text-purple-800 text-left">View All Courses</div>
      </div>
      <br/>
          <DataTable/>

          <div className=" mt-8 flex flex-row items-center justify-between self-stretch">
      <h1 className="text-left text-2xl font-semibold text-gray-500">BEST STUDENTS</h1>
      <div className="text-purple-800 text-left">View All Students</div>
      </div>
      <br/>
          <DataTable/> */}
          <DataTable/>
    </div>
  );
}

export default Home;
