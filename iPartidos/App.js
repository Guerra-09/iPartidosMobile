import React from "react";
import Tabs from "./routes/tabBar";
import { NavigationContainer } from "@react-navigation/native";
import Landing from "./views/Home/subView/landingPage";

const App = () => {
  return(

    <NavigationContainer>
      <Tabs />
      {/* <Landing /> */}
    </NavigationContainer>

  );
}

export default App;