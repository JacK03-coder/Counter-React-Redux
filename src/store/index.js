import {configureStore} from "@reduxjs/toolkit"
import privacySlice from "./PrivacyStore";
import counterSlice from "./CounterStore";

const counterStore = configureStore({reducer:{
  counter:counterSlice.reducer,
  privacy: privacySlice.reducer,
}});

export default counterStore;