import "./global.css";
import SplashScreen from "./src/components/screen/SplashScreen";
import LoginScreen from "./src/components/screen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountVerifyScreen from "./src/components/screen/AccountVerifyScreen";
import SigningScreen from "./src/components/screen/SigningScreen";
import TwoFactorAuthenticationScreen from "./src/components/screen/TwoFactorAuthentication";
import ConfirmScreen from "./src/components/screen/ConfirmScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="AccountVerify" component={AccountVerifyScreen} />
          <Stack.Screen name="Signing" component={SigningScreen} />
          <Stack.Screen name="TwoFactorAuthentication" component={TwoFactorAuthenticationScreen} />
          <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
