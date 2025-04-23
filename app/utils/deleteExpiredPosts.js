import { supabase } from '../lib/supabaseClient';

export const deleteExpiredPosts = async () => {
    try {
        const { data: posts, error } = await supabase
            .from('posts')
            .select('*');

        if (error) {
            return;
        }

        const currentDateTime = new Date();

        const expiredPosts = posts.filter(post => {
            const postDate = new Date(`${post.date}T${post.time}`);
            return postDate < currentDateTime;  // Post je prošao
        });

        if (expiredPosts.length > 0) {
            const deletePromises = expiredPosts.map(post => 
                supabase.from('posts').delete().eq('id', post.id)  // Koristimo 'id' za brisanje
            );
            await Promise.all(deletePromises);
        }
    } catch (error) {
        console.error('Error deleting expired posts:', error.message);
    }
};
