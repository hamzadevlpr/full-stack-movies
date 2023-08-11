import { Link } from 'react-router-dom'
import '../Movies and TV Shows/style.css'
import React, { useState, useEffect } from 'react';

function AutocompleteSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchMovieData = async () => {
            if (query.trim() !== '') {
                const apiKey = "ca258fa0adb338022b74848eb9dade0a";
                const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&api_key=${apiKey}&query=${query}`;
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    setResults(data.results);
                } catch (error) {
                    console.error('Error fetching movie data:', error);
                    setResults([]);
                }
            } else {
                setResults([]);
            }
        };

        fetchMovieData();
    }, [query]);
    return (
        <>
            <>
                <div className="searchBox">
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="searchResults">
                        {results.map((result) => (
                            <Link to={`/movie/${result.id}`}
                                key={result.id}
                                className="searchResultItem"
                                onClick={() => {
                                    // Handle item selection (e.g., navigate to movie details page)
                                    console.log('Selected movie:', result.title);
                                }}
                            >
                                {result.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </>

        </>
    )
}

export default AutocompleteSearch