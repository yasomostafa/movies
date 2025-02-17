import React, { useState, useEffect } from "react";
import axios from "axios";

function MovieList() {
    const [movies, setMovies] = useState([]);  
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/movies`);
                setMovies(response.data);  
            } catch (err) {
                setError("אירעה שגיאה בשליפת הנתונים");
            }
        };
        fetchMovies();
    }, []);  

    if (error) {
        return <div style={styles.errorMessage}>{error}</div>;
    }

    return (
        <div style={styles.movieListContainer}>
            <h1 style={styles.pageTitle}>רשימת הסרטים</h1>
            <ul style={styles.movieList}>
                {movies.map((movie) => (
                    <li key={movie.id} style={styles.movieItem}>
                        <div style={styles.movieImage}>
                            <img src={movie.imageUrl} alt={movie.title} style={styles.image} />
                        </div>
                        <div style={styles.movieDetails}>
                            <strong style={styles.movieTitle}>{movie.title}</strong>
                            <span style={styles.movieYear}> ({movie.year})</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// הגדרת סגנונות ב-JS (CSS-in-JS)
const styles = {
    movieListContainer: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '1000px',
        margin: '40px auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    pageTitle: {
        textAlign: 'center',
        fontSize: '32px',
        color: '#333',
        marginBottom: '30px'
    },
    movieList: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    movieItem: {
        width: '30%',
        marginBottom: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        textAlign: 'center',
        transition: 'transform 0.3s ease',  // שינוי בהגבה של הסרט
        cursor: 'pointer',  // משנה את הסמן ליד
    },
    movieImage: {
        width: '100%',
        height: '300px',
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'filter 0.3s ease, transform 0.3s ease'  // מעביר אפקט בהירות והגדלה בתמונה
    },
    movieDetails: {
        padding: '15px'
    },
    movieTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333'
    },
    movieYear: {
        fontSize: '16px',
        color: '#666'
    },
    errorMessage: {
        color: 'red',
        textAlign: 'center',
        fontSize: '18px'
    }
};

export default MovieList;
