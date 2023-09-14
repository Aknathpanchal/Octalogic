import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const cardData = [
    {
      id: 1,
      title: 164,
      description: "total number of students",
    },
    {
      id: 2,
      title: 12,
      description: "total number of courses",
    },
    {
      id: 3,
      title: "$2000",
      description: "total amount earned",
    },
    {
      id: 4,
      title: "Guitar",
      description: "best performing course",
    },
    {
      id: 5,
      title: "Flute",
      description: "worst performing course",
    },
  ];

const Cards = () => {
  return (
    <div className="grid mt-6 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {cardData.map((card) => (
      <Card key={card.id}>
        <CardContent>
          <div className="flex gap-4 items-center">
            <div className="col-span-1">
              <img
                src="https://imgs.search.brave.com/XssHN-0I8WsTfJKrfwQk7Yx5Nv5LIa3H-cK1s2Q_rtQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9qdXN0/d29tZW5zc3BvcnRz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wOS9HZXR0/eUltYWdlcy0xMjQy/MjM1NjczLXNjYWxl/ZC5qcGc"
                alt={card.title}
                className="w-16 h-16 bg-gray-300 rounded-full"
              />
            </div>
            <div className="col-span-1">
              <CardHeader>
                <CardTitle className="items-start flex text-3xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className='text-left'>{card.description}</p>
              </CardContent>
              
            </div>
          </div><div className="text-right">
                <button className='text-red-300'>View</button>
              </div>
        </CardContent>
      </Card>
    ))}
  </div>
  )
}

export default Cards
