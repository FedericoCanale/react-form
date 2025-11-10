import { useState } from "react";

export default function Main() {
    const [articles, setArticles] = useState([
        { id: 1, title: "La rivoluzione nel campo della IA" },
        { id: 2, title: "Meglio js o laravel?" },
        { id: 3, title: "Da Html a React, la storia della programmazione" },
        { id: 4, title: "Boolean lancia i nuovi corsi" }
    ]);

    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!title) return;

        const newArticle = { id: Date.now(), title };
        setArticles([...articles, newArticle]);
        setTitle("");
    }

    return (
        <main>
            <h1>Articoli della Gazzetta di Boolean</h1>

            <form onSubmit={handleSubmit}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Nuovo articolo"
                />
                <button>Aggiungi</button>
            </form>

            <ul>
                {articles.map((article) => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </main>
    );
}