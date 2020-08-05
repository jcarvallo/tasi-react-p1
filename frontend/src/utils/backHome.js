import { navigate } from "@reach/router";

export const backHome = (dispatch) => {
  dispatch({ type: "initialState" });
  navigate("/");
};
