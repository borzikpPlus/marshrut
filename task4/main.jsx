import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Content from './Content';

function guideLoader() {
  return fetch('./data.json').then(res => res.json());
}

async function contentLoader({ params }) {
  const guide = await fetch('./data.json').then(res => res.json());
  const section = guide.sections.find(s => s.id === params.sectionId);
  const topic = params.topicId ? section.topics.find(t => t.id === params.topicId) : null;
  return { section, topic };
}

const router = createHashRouter([
  {
    path: '/',
    id: 'root',
    element: <Layout />,
    loader: guideLoader,
    children: [
      { index: true, element: <Home /> },
      { path: 'razdel/:sectionId', element: <Content />, loader: contentLoader },
      { path: 'razdel/:sectionId/:topicId', element: <Content />, loader: contentLoader }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
