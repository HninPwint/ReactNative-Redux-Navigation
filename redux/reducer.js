export const GET_REPOS = "my-awesome-app/repos/LOAD";
export const GET_REPOS_SUCCESS = "my-awesome-app/repos/LOAD_SUCCESS";
export const GET_REPOS_FAIL = "my-awesome-app/repos/LOAD_FAIL";

export const GET_REPO_INFO = "my-awesome-app/repos/INFO";
export const GET_REPO_INFO_SUCCESS = "my-awesome-app/repos/INFO_SUCCESS";
export const GET_REPO_INFO_FAIL = "my-awesome-app/repos/INFO_FAIL";

export const GET_USER = "my-awesome-app/repos/USER";
export const GET_USER_SUCCESS = "my-awesome-app/repos/USER_SUCCESS";
export const GET_USER_FAIL = "my-awesome-app/repos/USER_FAIL";

export default function reducer(
  state = { repos: [], repoInfo: {}, user: {} },
  action
) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: "Error while fetching repositories"
      };
    case GET_REPO_INFO:
      return { ...state, loadingInfo: true };
    case GET_REPO_INFO_SUCCESS:
      console.log("Reaching Reducer", action.payload.data);
      return { ...state, loadingInfo: false, repoInfo: action.payload.data };
    case GET_REPO_INFO_FAIL:
      console.log(action.payload);
      return {
        ...state,
        loadingInfo: false,
        errorInfo: "Error getting repo info"
      };
    case GET_USER:
      return { ...state, loadingProfile: true };
    case GET_USER_SUCCESS:
      return { ...state, loadingProfile: false, user: action.payload.data };
    case GET_USER_FAIL:
      return {
        ...state,
        loadingProfile: false,
        errorUser: "Error getting user info"
      };
    default:
      return state;
  }
}

export function listRepos(user) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`
      }
    }
  };
}

export function getRepoDetail(user, repo) {
  console.log("url", `/repos/${user}/${repo}`);
  return {
    type: GET_REPO_INFO,
    payload: {
      request: {
        url: `/repos/${user}/${repo}`
      }
    }
  };
}

export function getUser(user) {
  return {
    type: GET_USER,
    payload: {
      request: {
        url: `/users/${user}`
      }
    }
  };
}

// https://medium.com/@relferreira/react-native-redux-react-navigation-ecec4014d648