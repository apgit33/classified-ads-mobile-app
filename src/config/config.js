import * as React from 'react';
import {Asset} from 'expo-asset';

export const AuthContext = React.createContext();
export const LogoURI = Asset.fromModule(require('../../assets/logo.png')).uri; // le logo


