// components/List.tsx
import React from 'react';

interface ListItemProps {
  title: string;
}

const ListItem: React.FC<ListItemProps> = ({ title }) => {
  return (
    <li className="list-item">
      <span>{title}</span>
      {/* You can add more details or links/buttons here */}
    </li>
  );
};

export default ListItem;
