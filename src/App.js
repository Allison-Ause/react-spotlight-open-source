import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
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

  const homeRedirect = () => {
    let path = '/';
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
                <MenuItem onClick={homeRedirect}>Home</MenuItem>
                <MenuItem onClick={tablesRedirect}>Tables</MenuItem>
                <MenuItem onClick={chartsRedirect}>Charts</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </nav>
      <Switch>
        <Route exact path="/">
          <div className="text-box">
            <Box className="box" boxShadow="dark-lg" p="6" rounded="md" bg="white">
              <Text textShadow="2px 2px pink" m="6">
                Welcome to my Magical Library Playground!
              </Text>
            </Box>
          </div>
        </Route>
        <Route path="/table" component={Table} />
        <Route path="/charts" component={Charts} />
      </Switch>
    </div>
  );
}

export default App;
