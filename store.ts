import { configureStore, combineReducers, getDefaultMiddleware, createAsyncThunk, MiddlewareArray } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/auth-slice";
import { goodsDetailReducer, goodslistReducer } from "./features/goods-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import { cartReducer } from "./features/cart-slice";
import { paymentReducer } from "./features/payment-slice";
import { popupReducer } from "./features/popup-slice";
import { socketReducer } from "./features/socket-slice";
import { createLogger } from "redux-logger";

const logger = createLogger();

const persistConfig = {
  key: "root",
  storage,
};

type RootState = {
  auth: AuthState;
  goods: GoodsState[];
  goodsDetail: DetailState;
  cart: CartState;
  payment: PaymentType;
  popup: PopupType;
  socket: SocketType;
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  goods: goodslistReducer,
  goodsDetail: goodsDetailReducer,
  cart: persistReducer(
    {
      key: "cart",
      storage,
    },
    cartReducer,
  ),
  payment: paymentReducer,
  popup: popupReducer,
  socket: socketReducer,
});

// const aaa = () => getDefaultMiddleware({ serializableCheck: false}),

export const store = configureStore({
  reducer: rootReducer,
  middleware : (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger)
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
