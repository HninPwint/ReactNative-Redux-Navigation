import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { getRepoDetail } from "./../redux/reducer";

class RepoDetail extends Component {
  static navigationOptions = {
    title: "RepoDetail"
  };

  componentDidMount() {
    const { name } = this.props.navigation.state.params;
    this.props.getRepoDetail("relferreira", name);
    // console.log('this.props.getRepoDetail', this.props.getRepoDetail);
  }

  render() {
    const { repoInfo, loadingInfo } = this.props;
    // console.log("loadingInfo", loadingInfo);
    if (loadingInfo) return <Text>Loading...</Text>;
    // console.log("this.props.repoInfo", repoInfo);

    const {
      name,
      full_name,
      description,
      forks_count,
      stargazers_count
    } = repoInfo;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> {name}</Text>
        <Text> {full_name}</Text>
        <Text> Description: {description}</Text>
        <Text> Forks: {forks_count}</Text>
        <Text> Stars: {stargazers_count}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ repoInfo, loadingInfo }) => ({
  repoInfo,
  loadingInfo
});
const mapDispatchToProps = {
  getRepoDetail
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoDetail);
