import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useNotes = create(persist(
    (set)=>({
        notes: [],
        setNotes: (payload)=>set((state)=>({
            notes: [...state.notes,payload]
        }))
    }),
    {
        name:"notes"
    }
))