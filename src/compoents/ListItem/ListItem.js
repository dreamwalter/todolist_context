import { ListLayout, ColorBar, Input, ButtonClose } from "./style";

export default function ListItem({ value, onChange, onDelete }) {
  return (
    <ListLayout>
      <ColorBar />
      <Input value={value} onChange={onChange} />
      <ButtonClose onClick={onDelete}> x </ButtonClose>
    </ListLayout>
  );
}
