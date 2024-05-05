import { getAllArticles } from './(server)/api';

export const metadata = {
    title: 'My Project',
    description: 'My Project',
};

export default async function Home() {
    const allArticles = await getAllArticles();
    return (
        <>
            <h1>My blog</h1>
            <ul>
                {allArticles.map((article) => (
                  <li key={article.name}>{article.header}</li>
                ))}
            </ul>
        </>
    );
}
