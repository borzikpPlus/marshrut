import React from 'react';
import { Link, useRouteLoaderData } from 'react-router-dom';

function Home() {
  const guide = useRouteLoaderData('root');

  return (
    <div>
      <h1>{guide.title}</h1>
      <p className="updated">Последнее обновление: {guide.updated}</p>
      {guide.sections.map(s => (
        <div key={s.id} className="block">
          <Link to={`/razdel/${s.id}`} className="block-title">{s.title}</Link>
          <ul>
            {s.topics.map(t => (
              <li key={t.id}>
                <Link to={`/razdel/${s.id}/${t.id}`}>{t.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Home;
