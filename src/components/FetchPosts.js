import React from 'react';
import { useQuery } from '@tanstack/react-query'; // שים לב לשינוי הזה
import axios from 'axios';

function FetchPosts() {
    const fetchPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    };

    // קריאת נתונים עם useQuery
    const { data, error, isLoading } = useQuery({
        queryKey: ['posts'], 
        queryFn: fetchPosts,
        staleTime: 5000,  // זמן בו הנתונים נשארים "טריים" ומבלי לעדכן אותם שוב
    });

    // אם הנתונים עדיין בטעינה, הצג את הודעת הטעינה
    if (isLoading) {
        return <div>טוען נתונים...</div>;
    }

    // אם יש שגיאה בטעינת הנתונים
    if (error) {
        return <div>אירעה שגיאה: {error.message || "שגיאה כלשהי"} </div>;
    }

    // הצגת הפוסטים במידה ונתוני הפוסטים התקבלו בהצלחה
    return (
        <div>
            <h1>פוסטים</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FetchPosts;
