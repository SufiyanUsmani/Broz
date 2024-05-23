import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Category" component={Category} />
            <Tab.Screen name="MyProfile" component={MyProfile} />
        </Tab.Navigator>
    )
}

export default TabNavigator;