import React, { Component } from 'react';
import {Link,Switch, Route} from 'react-router-dom';
import GamePage from './GamePage';
import CrudApp from '../components/CRUD/CrudApp';


class App extends Component {
    render() {
        return (
            <div>
                {/* <Link to='games'>Games</Link>
                <Switch>
                    <Route path='/games' component={GamePage}></Route>
                </Switch> */}

                <CrudApp />
            </div>
        );
    }
}



export default App;