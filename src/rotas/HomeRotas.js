import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../telas/Home";
import Burguer from '../telas/TelasHome/burguer';
import Pizza from "../telas/TelasHome/Pizza";
import Suco from "../telas/TelasHome/suco";
import Refrigerante from "../telas/TelasHome/refrigerante";
import Combo from "../telas/TelasHome/combo";
import Cerveja from "../telas/TelasHome/cerveja";

const Stack = createNativeStackNavigator();
export default function HomeRotas() {
    return  <Stack.Navigator screenOptions={{ headerTitle: ' ', headerStyle: {
        backgroundColor: '#00ced1'
    }}}>
                <Stack.Screen name="HomeScreen" component={Home} />
                <Stack.Screen name="Burguer" component={Burguer} />
                <Stack.Screen name="Pizza" component={Pizza} />
                <Stack.Screen name="Suco" component={Suco} />
                <Stack.Screen name="Refrigerante" component={Refrigerante} />
                <Stack.Screen name="Combo" component={Combo} />
                <Stack.Screen name="Cerveja" component={Cerveja} />
            </Stack.Navigator>
}