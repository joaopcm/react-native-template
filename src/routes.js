import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigation } from 'react-navigation-stack';

import Header from './components/Header';

import Main from './pages/Main';

import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigation(
    {
      Main,
    },
    {
      headerLayoutPreset: 'left',
      headerBackTitleVisible: false,
      cardStyle: {
        backgroundColor: `${colors.dark}`,
      },
      defaultNavigationOptions: navigation => ({
        headerTitle: <Header {...navigation} />,
        headerStyle: {
          backgroundColor: `${colors.primary}`,
        },
        headerTintColor: '#fff',
      }),
    }
  )
);

export default Routes;
