import React from 'react';
import {Droppable} from "react-beautiful-dnd";
import DraggableTodo from "../DraggableItem/DraggableTodo";

const DroppableColumn = ({column, columnId}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <h2>{column.name}</h2>
            <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                        return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                    background: snapshot.isDraggingOver
                                        ? "lightblue"
                                        : "lightgrey",
                                    padding: 4,
                                    width: 250,
                                    minHeight: 500
                                }}
                            >
                                {column.items.map((item, index) => <DraggableTodo item={item} index={index} key={item.id} />)}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </div>
        </div>
    );
};

export default DroppableColumn;