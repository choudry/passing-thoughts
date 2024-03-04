import { useEffect } from "react";
import { ThoughtModel } from "../model/ThoughtModel";

interface ThoughtProps {
    thought: ThoughtModel
    removeThought: (id: number) => void;
}

export const Thought = (props: ThoughtProps) => {
    const { thought, removeThought } = props;

    const handleRemoveClick = () => {
        removeThought(thought.id)
    }

    useEffect(() => {
        const timesUp = setTimeout(()=> {
            removeThought(thought.id);
        }, thought.expiresAt - Date.now());

        return () => {
            clearTimeout(timesUp);
        }
    }, [thought]);

    return (
        <>
            <li className="Thought">
                <button
                    aria-label="Remove thought"
                    className="remove-button"
                    onClick={handleRemoveClick}
                >
                    &times;
                </button>
                <div className="text">{thought.text}</div>
            </li>
        </>
    );
    
}