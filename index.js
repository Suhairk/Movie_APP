/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {authenticationService} from './src/services/authenticationService'
AppRegistry.registerComponent(appName, () => App);
