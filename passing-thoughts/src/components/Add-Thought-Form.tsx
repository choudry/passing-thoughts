import React, { ChangeEvent, FormEventHandler, useState } from "react";
import { ThoughtModel } from "../model/ThoughtModel";
import { generateId, getNewExpirationTime } from "../utill/Utilities";

export interface AddThoughtProps {
    addThought: (thought: ThoughtModel) => void
}

export const AddThoughtForm = (props: AddThoughtProps) => {
    const [text, setText] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (text.length) {
            props.addThought({
                id: generateId(),
                text: text,
                expiresAt: getNewExpirationTime() 
            });
        }

        setText("");
    }

    const handleTextChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setText(target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        onChange={handleTextChange}
        value={text}
        />
        <input type="submit" value="Add" />
  </form>
  )
}
