export default function Main() {
    const articles = [
        { id: 1, title: "La rivoluzione nel campo della IA" },
        { id: 2, title: "Meglio js o laravel?" },
        { id: 3, title: "Da Html a React, la storia della programmazione" },
        { id: 4, title: "Boolean lancia i nuovi corsi" }
    ];

    return (
        <main>
            <h1>Articoli della Gazzetta di Boolean</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </main>
    );
}