/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react';

// import Store from './src/redux/Store';

// const Stores = Store()

// const ReduxStr = () => {
//     <Provider Stores={Stores}>
//         <App/>
//     </Provider>
// }

AppRegistry.registerComponent(appName, () => App);




