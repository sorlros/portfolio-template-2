"use client";

import { useState } from 'react';
import Image from 'next/image';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useRouter } from 'next/router';

const initialIcons = [
  { id: 'icon-1', title: 'Portfolio 1', link: '/portfolio1' },
  { id: 'icon-2', title: 'Portfolio 2', link: '/portfolio2' },
  { id: 'icon-3', title: 'Portfolio 3', link: '/portfolio3' },
  { id: 'icon-4', title: 'Portfolio 4', link: '/portfolio4' }
];

const Home = () => {
  const [icons, setIcons] = useState(initialIcons);
  const router = useRouter();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const newIcons = Array.from(icons);
    const [movedIcon] = newIcons.splice(result.source.index, 1);
    newIcons.splice(result.destination.index, 0, movedIcon);

    setIcons(newIcons);
  };

  const handleIconClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className="relative w-full h-[100vh]">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="desktop" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="absolute inset-0 flex flex-wrap p-4"
            >
              {icons.map((icon, index) => (
                <Draggable key={icon.id} draggableId={icon.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="w-20 h-20 m-4 p-2 flex flex-col items-center cursor-pointer bg-white bg-opacity-50 rounded"
                      onClick={() => handleIconClick(icon.link)}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded mb-2"></div>
                      <span className="text-sm text-center">{icon.title}</span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Home;
