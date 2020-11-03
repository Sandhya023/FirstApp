import { createAppContainer} from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';

import {Platform} from 'react-native';

import PlaceListScreen from '../screens/PlaceListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import MapScreen from '../screens/MapScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const PlacesNavigator = createStackNavigator({
    Places: PlaceListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary: ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    }
}
);

export default createAppContainer(PlacesNavigator);