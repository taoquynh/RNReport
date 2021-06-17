import { NavigationContainerRef } from '@react-navigation/core';
import { NavigationAction } from '@react-navigation/routers';
import * as React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params: object) {
  navigationRef.current?.navigate(name, params);
}