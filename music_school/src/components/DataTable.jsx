import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    enrNo: '001',
    sName: 'Sir 1',
    cName: 'Course 1',
    fees: '$250.00',
    enrDate: '2023-09-14',
  },
  {
    enrNo: '002',
    sName: 'Sir 2',
    cName: 'Course 2',
    fees: '$200.00',
    enrDate: '2023-09-15',
  },
  {
    enrNo: '003',
    sName: 'Sir 3',
    cName: 'Course 3',
    fees: '$300.00',
    enrDate: '2023-09-16',
  },
  {
    enrNo: '004',
    sName: 'Sir 4',
    cName: 'Course 4',
    fees: '$180.00',
    enrDate: '2023-09-17',
  },
  {
    enrNo: '005',
    sName: 'Sir 5',
    cName: 'Course 5',
    fees: '$220.00',
    enrDate: '2023-09-18',
  },
];


const data1 = [
    {
      "RegNo": '001',
      "FName": 'John',
      "LName": 'Doe',
      "Course": 'Course 1',
      "TotalFees": '$250.00',
      "RegDate": '2023-09-14',
    },
    {
      "RegNo": '002',
      "FName": 'Jane',
      "LName": 'Smith',
      "Course": 'Course 2',
      "TotalFees": '$200.00',
      "RegDate": '2023-09-15',
    },
    {
      "RegNo": '003',
      "FName": 'Alice',
      "LName": 'Johnson',
      "Course": 'Course 3',
      "TotalFees": '$300.00',
      "RegDate": '2023-09-16',
    },
    {
      "RegNo": '004',
      "FName": 'Bob',
      "LName": 'Wilson',
      "Course": 'Course 4',
      "TotalFees": '$180.00',
      "RegDate": '2023-09-17',
    },
    {
      "RegNo": '005',
      "FName": 'Eve',
      "LName": 'Brown',
      "Course": 'Course 5',
      "TotalFees": '$220.00',
      "RegDate": '2023-09-18',
    },
  ];
  

function DataTable() {
  return (

    <>

<div className=" mt-8 flex flex-row items-center justify-between self-stretch">
      <h1 className="text-left text-2xl font-semibold text-gray-500">LATEST ENROLMENTS</h1>
      <div className="text-purple-800 text-left">View All Courses</div>
      </div>
      <br/>
    
      <div className='overflow-auto rounded-xl bg-white p-6'> 
        <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Enr. No</TableHead>
          <TableHead>S. Name</TableHead>
          <TableHead>C. Name</TableHead>
          <TableHead className="text-right">Fees</TableHead>
          <TableHead>Enr. Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{item.enrNo}</TableCell>
            <TableCell>{item.sName}</TableCell>
            <TableCell>{item.cName}</TableCell>
            <TableCell className="text-right">{item.fees}</TableCell>
            <TableCell>{item.enrDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>



    <div className=" mt-8 flex flex-row items-center justify-between self-stretch">
      <h1 className="text-left text-2xl font-semibold text-gray-500">BEST STUDENTS</h1>
      <div className="text-purple-800 text-left">View All Students</div>
      </div>
      <br/>
        

      <div className='overflow-auto rounded-xl bg-white p-6'> 
        <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Reg. No</TableHead>
          <TableHead>F. Name</TableHead>
          <TableHead>L. Name</TableHead>
          <TableHead>Course</TableHead>
          <TableHead className="text-right">Total fees</TableHead>
          <TableHead>Reg. Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data1.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{item.RegNo}</TableCell>
            <TableCell>{item.FName}</TableCell>
            <TableCell>{item.LName}</TableCell>
            <TableCell>{item.Course}</TableCell>
            <TableCell className="text-right">{item.TotalFees}</TableCell>
            <TableCell>{item.RegDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>

    </>
  
   
  );
}

export default DataTable;
