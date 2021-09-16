import * as React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './src/config/config';
import {SignInScreen} from './src/screens/SignInScreen';
import {HomeScreen} from './src/screens/HomeScreen';
import {SignUpScreen} from './src/screens/SignUpScreen';
import {ForgotScreen} from './src/screens/ForgotScreen';
import { post, get } from './src/api/fetch';
import { CLIENT_ID, CLIENT_SECRET} from './.env';
import * as SecureStore from 'expo-secure-store';
import { empty } from 'statuses';

function SplashScreen() {

    return (
        <View>
            <Text>Loading...</Text>
        </View>

    );
}
function LogoutButton() {
    const { signOut } = React.useContext(AuthContext);
 
    return (
        <Button title="Sign out" onPress={signOut} />
    );
}

const Stack = createStackNavigator();

export default function App({ navigation }) {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;

            try {
                // Restore token stored in `SecureStore` or any other encrypted storage
                userToken = await SecureStore.getItemAsync('userToken');

                // console.log(userToken);
                // dispatch({ type: 'SIGN_OUT' });

                // if (userToken === "") {
                //     dispatch({ type: 'SIGN_IN' });
                // }else{
                //     dispatch({ type: 'RESTORE_TOKEN', token: userToken });
                // }
            } catch (e) {
                // Restoring token failed
                // console.log(e);
            }
            // After restoring token, we may need to validate it in production apps
            // console.log(userToken);
            // if (userToken === "") {
               
            // }else{
                dispatch({ type: 'RESTORE_TOKEN', token: userToken });
            //     console.log('trsss');

            // }
            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            // dispatch({ type: 'SIGN_OUT' });
        };

        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
            signIn: async (data) => {
                const token = await post('/oauth/token', {
                    // username: data.email,
                    // password: data.password,
                    username: 'test@test.fr',
                    password: 'ddd',
                    grant_type: 'password',
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                    scope: '*'
                });
                // In a production app, we need to send some data (usually username, password) to server and get a token
                // We will also need to handle errors if sign in failed
                // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
                // In the example, we'll use a dummy token
                await SecureStore.setItemAsync('userToken', token.access_token);

                dispatch({ type: 'SIGN_IN', token: token.access_token });
            },
            signOut: async () => {
                // await get('/logout');

                await SecureStore.deleteItemAsync('userToken');
                // const token = await SecureStore.getItemAsync('userToken');

                dispatch({ type: 'SIGN_OUT' });
            }
        }),
        []
    );

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator 
                    screenOptions={{ headerRight: props => <LogoutButton {...props} />, headerMode:"screen"}}
                    
                // navigationOptions={
                //         headerTitle: <LogoutButton/>
                //     }
                >
                    {state.isLoading ? (
                        // We haven't finished checking for the token yet
                        <Stack.Screen name="Splash" component={SplashScreen} />
                    ) : state.userToken == null ? (
                        // No token found, user isn't signed in
                        <>
                            <Stack.Screen
                                name="SignIn"
                                component={SignInScreen}
                                options={{
                                    // title: 'Sign in',
                                    // When logging out, a pop animation feels intuitive
                                    // headerTitle: (props) => <LogoutButton {...props} />,
                                    // animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                                    // title: 'My home',
                                    // headerStyle: {
                                    //     backgroundColor: '#f4511e',
                                    // },
                                    // // headerTintColor: '#fff',
                                    // headerTitleStyle: {
                                    //     fontWeight: 'bold',
                                    // },
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen 
                                name="SignUp" 
                                component={SignUpScreen}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen 
                                name="Forgot" 
                                component={ForgotScreen} 
                                options={{ headerShown: false }}
                            />
                        </>
                    ) : (
                        // User is signed in
                        <Stack.Screen name="Home" component={HomeScreen}/>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

// const AddAccountStack = createStackNavigator(
//     {
//       AddAccount: AddAccountScreen,
//       AddAccountDetail: AddAccountDetailScreen,
//       AddAccountDone: AddAccountDoneScreen,
//     },
//     {
//       navigationOptions: {
//         headerTitle: <HeaderBarIcon/>
//       }
//     }
//   );
