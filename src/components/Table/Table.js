import { Cell, Column, HeaderCell, Table } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
import animalData from '../../animals.json';

export default function AnimalTable() {
  return (
    <div>
      <h1>Oh-ho! Fancy Animals!</h1>
      <Table data={animalData} height={500}>
        <Column width={220} fixed resizable>
          <HeaderCell>Animal</HeaderCell>
          <Cell dataKey="animal" />
        </Column>

        <Column width={200} fixed resizable>
          <HeaderCell>Place of Origin</HeaderCell>
          <Cell dataKey="locale" />
        </Column>

        <Column width={100} fixed resizable>
          <HeaderCell>Color</HeaderCell>
          <Cell dataKey="color" />
        </Column>

        <Column minWidth={60} flexGrow={2}>
          <HeaderCell>Favorite Film</HeaderCell>
          <Cell dataKey="fave_movie" />
        </Column>
      </Table>
    </div>
  );
}
