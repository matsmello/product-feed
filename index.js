import { AppRegistry } from 'react-native';
import Route from '_scenes/product-feed';
import { name as appName } from './app.json';

// Will load initial data and create a mock server
import '_services/api'

AppRegistry.registerComponent(appName, () => Route);
