import { createStore } from "redux";
import storeToken from "./reducers/jwt.reducer";

export default createStore(storeToken)