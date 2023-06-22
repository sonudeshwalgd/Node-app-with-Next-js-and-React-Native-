import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export const StyledTabBar = ({state, navigation }) => {
    const { index } = state
    const focusedColor = "white"
  return (<>
  <View style={{position:"relative"}}>
      <View style={bottomTab.base}>

        
        <TouchableOpacity style={[bottomTab.flex, { flex: 2 }]} onPress={() => navigation.navigate("dashboard")}>
          <MaterialCommunityIcons name="view-dashboard-outline" color={index == 0 ? focusedColor : "black"} size={22} style={bottomTab.icon} />
          <Text style={{ color: (index == 0 ? focusedColor : "black"), textAlign: "center" }}>Dashboard</Text>
        </TouchableOpacity>


        <TouchableOpacity style={[bottomTab.flex, { flex: 2 }]} onPress={() => navigation.navigate("calendarStack")}>
          <MaterialCommunityIcons name="calendar" color={index == 1 ? focusedColor : "black"} size={22} style={bottomTab.icon} />
          <Text style={{ color: (index == 1 ? focusedColor : "black"), textAlign: "center" }}>Calendar</Text>
        </TouchableOpacity>


        <TouchableOpacity style={[bottomTab.flex, { flex: 2 }]} onPress={() => navigation.navigate("post")}>
          <MaterialCommunityIcons name="postage-stamp" color={index == 3 ? focusedColor : "black"} size={22} style={bottomTab.icon} />
          <Text style={{ color: (index == 3 ? focusedColor : "black"), textAlign: "center" }}>Post</Text>
        </TouchableOpacity>


        <TouchableOpacity style={[bottomTab.flex, { flex: 2 }]} onPress={() => navigation.navigate("notes")}>
          <MaterialCommunityIcons name="notebook-check-outline" color={index == 2 ? focusedColor : "black"} size={22} style={bottomTab.icon} />
          <Text style={{ color: (index == 2 ? focusedColor : "black"), textAlign: "center" }}>Notes</Text>
        </TouchableOpacity>



      </View>
    </View>


  </>)

}




const bottomTab = StyleSheet.create({
  flex: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  icon: {
    display: "flex",
    alignSelf: "center"

  },


  base: {
    position: "absolute",
    elevation: 40,
    bottom: 10,
    width: "90%",
    minHeight: 60,
    marginLeft: "5%",
    borderRadius: 10,
    justifyContent: "space-between",
    backgroundColor: "#ffc000",
    flexDirection: "row",
    
  },
  centerTab: {
    backgroundColor: "#f9aa33",
    borderRadius: 100,
    transform: [{ translateX: 37 }, { translateY: -37 }],
    elevation: 20,
    position:"absolute",
      padding:20,
      right:"50%",
    

  }


})









































