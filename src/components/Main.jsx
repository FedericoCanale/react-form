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

    function handleDelete(id) {
        setArticles(articles.filter(article => article.id !== id));
    }

    return (
        <main className="container mt-4">
            <h1>Articoli della Gazzetta di Boolean</h1>

            <form onSubmit={handleSubmit} className="d-flex gap-2 my-3">
                <input
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Nuovo articolo"
                />
                <button className="btn btn-primary">Aggiungi</button>
            </form>

            <ul className="list-group">
                {articles.map((article) => (
                    <li
                        key={article.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        {article.title}
                        <i
                            className="bi bi-trash text-danger"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDelete(article.id)}
                        ></i>
                    </li>
                ))}
            </ul>
        </main>
    );
}