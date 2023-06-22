import DashboardRoutes from "./dashboardRoutes";
import Notes from "../screen/Notes";
import Post from "../screen/Post";
import { StyledTabBar } from "../container/styledTabBar/styledTabBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarStack from "./calendarStack";


// const Bottomtab=createMaterialBottomTabNavigator()
const Bottomtab = createBottomTabNavigator();


export const BottomtabBar=()=>{

    return (
        <>
        <Bottomtab.Navigator     
        screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelPosition: {
        }
        }}
        tabBar={props => <StyledTabBar {...props} />}
        >

<Bottomtab.Screen
        name="dashboard"
        component={DashboardRoutes}
        screenOptions={{
          headerShown: false
        }}
        options={{
          tabBarLabel: 'dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dashboard" color={color} size={size} />
          ),
        }}
      />
<Bottomtab.Screen
        name="calendarStack"
        component={CalendarStack}
        screenOptions={{
          headerShown: false
        }}
        options={{
          tabBarLabel: 'calendar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
<Bottomtab.Screen
        name="notes"
        component={Notes}
        screenOptions={{
          headerShown: false
        }}
        options={{
          tabBarLabel: 'notes',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="notes" color={color} size={size} />
          ),
        }}
      />
<Bottomtab.Screen
        name="post"
        component={Post}
        screenOptions={{
          headerShown: false
        }}
        options={{
          tabBarLabel: 'post',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="post" color={color} size={size} />
          ),
        }}
      />



            {/* <Bottomtab.Screen name="dashboard" component={DashboardRoutes} />
            <Bottomtab.Screen name="notes" component={Notes} />
            <Bottomtab.Screen name="post" component={Post} /> */}


        </Bottomtab.Navigator>
        
        
        
        </>
    )
}