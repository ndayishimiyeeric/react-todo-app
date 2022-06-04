import React from 'react';

const headerStyle = {
  padding: '20px 0',
  lineHeight: '1.5em',
};

const Header = () => {
  const title = 'todos';
  return (
    <header style={headerStyle}>
      <h1 className="title-todos">{title}</h1>
    </header>
  );
};

export default Header;
