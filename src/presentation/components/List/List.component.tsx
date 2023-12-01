import { Spinner } from "..";
import {
  Container,
  ListButton,
  ListContent,
  ListHeader,
  ListItem,
} from "../List/List.styles";
import { useList } from "../List/useList";

export function List(): JSX.Element {
  const { items, isSorting, handleSortClick, handleWorkerSortClick } =
    useList();

  return (
    <Container>
      <ListHeader>
        <ListButton onClick={handleSortClick}>
          Ordenação: <span>default</span>
        </ListButton>

        {isSorting ? <Spinner /> : <div style={{ width: "80px" }} />}

        <ListButton onClick={handleWorkerSortClick}>
          Ordenação: <span>useWorker</span>
        </ListButton>
      </ListHeader>
      <ListContent>
        {items.slice(0, 100).map((item) => (
          <ListItem key="item">
            <span>{item}</span>
          </ListItem>
        ))}
      </ListContent>
    </Container>
  );
}
