import React from 'react';
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';

const menu = ['C#', 'Java', 'Web', 'Python', 'C', 'C++', 'SQL', 'MongoDB', 'Go', 'VB.NET', 'Swift', 'ОС', 'F#', 'Хостинг'];

function Layout() {
  const guide = useLoaderData();

  return (
    <div>
      <div className="brand">
        <div className="logo">METANIT.COM</div>
        <div className="slogan">Сайт о программировании</div>
      </div>
      <div className="menu">
        {menu.map(item => (
          <span key={item} className="menu-item">{item}</span>
        ))}
        <Link to="/" className="menu-item react">React</Link>
      </div>
      <div className="body">
        <aside className="side">
          {guide.sections.map(s => (
            <NavLink key={s.id} to={`/razdel/${s.id}`} className="side-item">
              📁 {s.title}
            </NavLink>
          ))}
        </aside>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
