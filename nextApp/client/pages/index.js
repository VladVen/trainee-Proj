import React, {useState} from 'react';
import MainContainer from "../components/MainContainer/MainContainer";
import {DragDropContext} from "react-beautiful-dnd";
import {v4 as uuid} from "uuid";
import DroppableColumn from "../components/DroppableColumn/DroppableColumn";

const Index = ({InitialColumns}) => {
    const [columns, setColumns] = useState(InitialColumns);

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const {source, destination} = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    };


    return (
        <MainContainer>
            <div style={{display: "flex", justifyContent: "center", height: "100%"}}>
                <DragDropContext
                    onDragEnd={result => onDragEnd(result, columns, setColumns)}
                >
                    {Object.entries(columns).map(([columnId, column], index) => <DroppableColumn columnId={columnId}
                                                                                                 column={column}
                                                                                                 key={columnId}/>)}
                </DragDropContext>
            </div>
        </MainContainer>
    );
};

export default Index;


export async function getStaticProps(context) {

    const InitialItems = [
        {id: uuid(), content: "First task"},
        {id: uuid(), content: "Second task"},
        {id: uuid(), content: "Third task"},
        {id: uuid(), content: "Fourth task"},
        {id: uuid(), content: "Fifth task"}
    ];

    const InitialColumns = {
        [uuid()]: {
            name: "To do",
            items: InitialItems
        },
        [uuid()]: {
            name: "In Progress",
            items: []
        },
        [uuid()]: {
            name: "Done",
            items: []
        }
    };


    return {
        props: {InitialColumns,}
    }
}





