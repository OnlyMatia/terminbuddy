import { supabase } from '../lib/supabaseClient';
import { v4 as uuidv4 } from 'uuid';  

export const addPost = async (formData) => {
    const { sport, image, description, time, date, location, peopleMissing, author } = formData;

    try {
        
        const newPost = {
            id: uuidv4(), 
            sport,
            image,
            description,
            time,
            date,
            location,
            peoplemissing: peopleMissing,
            author,
        };

        const { data, error } = await supabase
            .from('posts')
            .insert([newPost])  
            .select();

        if (error) {
            console.error('Supabase insert error:', error);
            throw new Error('Failed to add post');
        }

        return data;
    } catch (error) {
        console.error('Error adding post:', error.message);
        throw error;
    }
};
