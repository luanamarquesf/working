import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, Animated, useWindowDimensions, View } from 'react-native'
import Principal from '../screens/Principal.js'
import Config from '../screens/Config.js'
import Icon from 'react-native-vector-icons/FontAwesome';
import Info from '../screens/Info.js'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (focused) {
                        if (route.name === 'Principal') {
                            return <>
                                <Animated.View
                                >
                                    <Icon name="home" size={30} color={color} />
                                </Animated.View>
                            </>
                        } else {
                            return <>
                                <Animated.View
                                >
                                    <Icon name="cogs" size={30} color={color} />
                                </Animated.View>
                            </>
                        }
                    }
                    if (route.name === 'Principal') {
                        iconName = "home"
                    } else {
                        iconName = "cogs"
                    }
                    return <Icon name={iconName} size={25} color={color} />
                },
                tabBarLabel: () => null
            })}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'grey',
                style: styles.tabBar
            }}>
            <Tab.Screen name="Principal" component={MainStackNavigator} />
            <Tab.Screen name="Config" component={Config} />
        </Tab.Navigator>
    );
}

function MainStackNavigator({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Principal' component={Principal}
                options={
                    {
                        headerTitle: () => (<>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='list' size={30} onPress={() => navigation.openDrawer()} />
                                
                            </View>

                        </>

                        )
                    }
                }

            />
            <Stack.Screen name="Principal Detais" component={Info} />
        </Stack.Navigator>
    );
}

function mainRoute() {
    const dimensions = useWindowDimensions();

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
            >
                <Drawer.Screen name="Home" component={MainTabNavigator} />
                <Drawer.Screen name="Principal Detais" component={Info} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'white',
        borderTopColor: "rgba(124,47,94,0.8)",
        borderTopWidth: 3,
        height: '10%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    }
})

export default mainRoute;




