import React from "react";
import { CardItems } from "../types/CardItems";

interface CardProps {
  items: CardItems[]
}

export function Card({
  items
}: CardProps) {
  return <>
    {items.map((item, index) => <div key={index}>
      {index > 0 && <hr className="border-primary-dark my-8" />}
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="w-full sm:w-auto flex justify-center sm:justify-start">
          <img src={item.image} alt={item.title} className="w-32 h-32 rounded-lg object-cover shadow-md" />
        </div>
        <div className="flex-1 w-full">
          <h2 className="text-2xl font-semibold text-secondary mb-2 text-start">{item.title}</h2>
          <p className="text-secondary mb-4 text-start">{item.description}</p>
          <div className="flex gap-2 flex-wrap">
            {item.tag.map((tag, tagIndex) => <span key={tagIndex} className="bg-primary-dark text-secondary px-3 py-1 rounded-full text-sm">
              {tag}
            </span>)}
          </div>
        </div>
      </div>
    </div>)}
  </>;
}
