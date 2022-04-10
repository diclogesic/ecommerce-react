import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//uso de categorias en un array para que puedan ser dinamicas en un futuro. irian en la NavBar ej: traerlas de una base de datos

/* recuerden importar Link o NavLink y no usar etiquetas a */

export const NavBar = () => {
  const categories = [
    { id: 'asfadd', address: '/', text: 'TODOS LOS PRODUCTOS' },
    { id: '123asf', address: '/category/A', text: 'CATEGORIA A' },
    { id: 'sgs3q3', address: '/category/B', text: 'CATEGORIA B' },
    { id: 'gkl98s', address: '/category/C', text: 'CATEGORIA C' },
  ];

  return (
    <section style={{ background: 'lightgray' }}>
      {categories.map((cat) => {
        return (
          <div className="links" key={cat.id}>
            <NavLink
              to={cat.address}
              className={({ isActive }) => (isActive ? 'activeClass' : '')}
            >
              {cat.text}
            </NavLink>
          </div>
        );
      })}
    </section>
  );
};

/* 

      CON REACT BOOTSTRAP PUEDEN HACER ESTO
      <Nav.Link as={NavLink} to='/algo' > 
      TEXTO
      </Nav.Link>

      <NavDropdown.Item as={Link}
      to="#action/3.1">Action</NavDropdown.Item>

      CON BOOTSTRAP SOLO AGREGUENLE LAS CLASES A LINK
      <Link className="">mi link</Link>

            */
