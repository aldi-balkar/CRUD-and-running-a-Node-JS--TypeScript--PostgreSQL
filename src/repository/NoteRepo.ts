import { Note } from "../model/Note";

interface INoteRepo {
    save(note: Note): Promise<void>;
    update(note: Note): Promise<void>;
    delete(noteId: Note): Promise<void>;
    retrieveById(note: Note): Promise<void>;
    retrieveAll(): Promise<Note[]>;
}

export class NoteRepo implements INoteRepo {
    async save(note: Note): Promise<void> {
        try {
            await Note.create({
                name: note.name,
                description: note.description
            })
        } catch (error) {
            throw new Error("Method not implementes.");
        }
    }

    async update(note: Note): Promise<void> {
        try {

        } catch (error) {
            throw new Error("Method not implementes.");
        }
    }

    async delete(note: Note): Promise<void> {
        try {

        } catch (error) {
            throw new Error("Method not implementes.");
        }
    }

    retrieveById(note: Note): Promise<void> {
        throw new Error("Method not implementes.");
    }
    retrieveAll(): Promise<Note[]> {
        throw new Error("Method not implementes.");
    }
}