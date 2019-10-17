import React, { Component } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import reducer, { listRepos } from "./redux/reducer";
import HomeScreen from "./Screens/Home";
import RepoDetail from "./Screens/RepoDetail";

const RootSnack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: RepoDetail
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(RootSnack);

const client = axios.create({
  baseURL: "https://api.github.com",
  responseType: "json"
});
const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
