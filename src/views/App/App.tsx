import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRoutes from '../../router/routes/BaseRoutes'
import GlobalLoader from "../../modules/GlobalLoader/GlobalLoader";

const App = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <GlobalLoader />
                <Router>
                    <BaseRoutes />
                </Router>
            </div>
        </div>
    );
}

export default App;