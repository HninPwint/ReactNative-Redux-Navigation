import React, { Component } from "react";
import { listRepos } from "../redux/reducer";
import { connect } from "react-redux";
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  Button,
  TouchableOpacity
} from "react-native";
//import {TouchableOpacity} from "react-native-web";

class HomeScreen extends Component {
  componentDidMount() {
    this.props.listRepos("relferreira");
    console.log("this.props.listRepos", this.props.listRepos);
  }

  RenderItem = ({ item }) => (
    <TouchableOpacity
      style={Styles.item}
      onPress={() => {
        this.props.navigation.navigate("Details", { name: item.name });
        // console.log( 'repoInfo', this.prop.repoInfo);
      }}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  render() {
    const { repos } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          styles={Styles.container}
          data={repos}
          renderItem={this.RenderItem}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  }
});

const mapStateToProps = state => {
  let storedRepositories = state.repos.map(repo => ({
    key: repo.id,
    ...repo
  }));
  return {
    repos: storedRepositories
  };
};

const mapDispatchToProps = {
  listRepos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
