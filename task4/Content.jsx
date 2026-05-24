import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

function Content() {
  const { section, topic } = useLoaderData();

  if (topic) {
    return (
      <div>
        <p className="crumbs">
          <Link to={`/razdel/${section.id}`}>{section.title}</Link>
        </p>
        <h1>{topic.title}</h1>
        <p>{topic.content}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{section.title}</h1>
      <ul>
        {section.topics.map(t => (
          <li key={t.id}>
            <Link to={`/razdel/${section.id}/${t.id}`}>{t.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
