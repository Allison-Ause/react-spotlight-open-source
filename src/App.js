import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Charts from './components/Charts/Charts';
import Table from './components/Table/Table';

function App() {
  const history = useHistory();

  const tablesRedirect = () => {
    let path = '/table';
    history.push(path);
  };

  const chartsRedirect = () => {
    let path = '/charts';
    history.push(path);
  };

  return (
    <div className="App">
      <nav>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} as={Button} colorScheme="pink">
                {isOpen ? 'Where To?' : 'Nav Links'}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={tablesRedirect}>Tables</MenuItem>
                <MenuItem onClick={chartsRedirect}>Charts</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
        {/*         
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link> */}
      </nav>
      <Switch>
        <Route path="/table" component={Table} />
        <Route path="/charts" component={Charts} />
      </Switch>
    </div>
  );
}

export default App;
