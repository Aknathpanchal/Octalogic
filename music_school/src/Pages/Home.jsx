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
      imgSrc: "image1.jpg", // Replace with actual image source
      title: "Card 1",
      description: "Description for Card 1",
    },
    {
      id: 2,
      imgSrc: "image2.jpg", // Replace with actual image source
      title: "Card 2",
      description: "Description for Card 2",
    },
    {
      id: 3,
      imgSrc: "image3.jpg", // Replace with actual image source
      title: "Card 3",
      description: "Description for Card 3",
    },
    {
      id: 4,
      imgSrc: "image4.jpg", // Replace with actual image source
      title: "Card 4",
      description: "Description for Card 4",
    },
    {
      id: 5,
      imgSrc: "image5.jpg", // Replace with actual image source
      title: "Card 5",
      description: "Description for Card 5",
    },
  ];

function Home() {
  return (
    <div>

<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{card.description}</p>
                </CardContent>
                
              </div>
            </div><div className="text-right">
                  <button>View</button>
                </div>
          </CardContent>
        </Card>
      ))}
    </div>


    </div>
  )
}

export default Home
