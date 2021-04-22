import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import Order from "./order"
import ItemModal from "../ItemModal"
import ShoppingList from "../ShoppingList"
import {Container} from 'reactstrap';

import {Provider} from 'react-redux';
import store from '../../store';

function Home () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if(!userData.user)
            history.push("/login");

    }, []);
    return (
        <div>
            {userData.user ? (
                <>
                <Order user = {userData.user.displayName} />
                <Provider store={store}>

          <Container>
            <ItemModal />
            <ShoppingList/>
          </Container>
      </Provider>
                </>
            ) : (
                <>
                    <h2>You are not logged in</h2>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
}
 
export default Home;