import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import zipCodeDataReducer from "../features/ZipCode/ZipCodeDataSlice";
import setZipCodeData from "../features/ZipCode/ZipCodeDataSlice";

import { api } from "../services/api/api";

const persistConfig = {
  key: "root",
  storage, // Specify the storage mechanism
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    setZipCodeData,
    [api.reducerPath]: api.reducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };
