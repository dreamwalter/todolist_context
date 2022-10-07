import { ListUl } from "./style";

export default function List({ children }) {
  return (
    <div>
      <ListUl> {children} </ListUl>
    </div>
  );
}
