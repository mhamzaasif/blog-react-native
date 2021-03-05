// @format
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider as BlogProvider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/indexScreen";
import ShowScreen from "./src/screens/ShowScreen.js";
import CreateScreen from "./src/screens/CreateScreen.js";
import EditScreen from "./src/screens/EditScreen.js";

const navigator = createStackNavigator(
    {
        Index: IndexScreen,
        Show: ShowScreen,
        Create: CreateScreen,
        Edit: EditScreen
    },
    {
        initialRouteName: "Index",
        defaultNavigationOptions: {
            title: "Blogs"
        }
    }
);

const App = createAppContainer(navigator);

export default () => {
    return (
        <BlogProvider>
            <App />
        </BlogProvider>
    );
};
