import { MouseEvent, useState } from "react";
interface Props {
  items: string[];
  heading: string;

  // functions
  onSelectItem: (index: number, item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const handleClick = (event: MouseEvent) => alert(event);

  // HOOKS
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // return HTML Components
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(index, item);
            }}
          >
            {index}: {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
