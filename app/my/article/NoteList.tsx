import Empty from "@/components/empty";
import React from "react";
import {Note} from "@/types";
import NoteItem from "@/app/my/article/NoteItem";

interface NoteListProps {
    notes: Note[]
}

const NoteList: React.FC<NoteListProps> = ({notes}: { notes: Note[] }) => {
    return (
        <>
            {notes.length ?
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {notes.map((item, index) =>
                        <NoteItem key={index} note={item}/>)
                    }
                </div> :
                <Empty/>
            }
        </>
    )
}
export default NoteList