import { createSlice } from "@reduxjs/toolkit";
import Templates, { State } from "./Templates";

const initialState = State;

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    // Update and Add to Modals
    updateKeyValueIn: (state, action) => {
      state.Location[action.payload.index][action.payload.ObjKey][action.payload.modalType][action.payload.arrayIndex][action.payload.key] =
        action.payload.value;
      if (action.payload.key === "Name*") {
        state.Location[action.payload.index][action.payload.ObjKey][action.payload.modalType][action.payload.arrayIndex]["ID"] = action.payload.value;
      }
    },
    addToArray: (state, action) => {
      // action.payload.state = [...action.payload.state, Templates[action.payload.modalType]];
      // console.log([...state.Location[action.payload.index][action.payload.ObjKey][action.payload.modalType]]);
      // console.log(action.payload.modalType);
      // console.log(action.payload.ObjKey);
      state.Location[action.payload.index][action.payload.ObjKey][action.payload.modalType] = [
        ...state.Location[action.payload.index][action.payload.ObjKey][action.payload.modalType],
        Templates[action.payload.modalType],
      ];
    },
    updateLocation: (state, action) => {
      state.Location[action.payload.index].LocationData[action.payload.ObjKey] = action.payload.value;
    },
    // addToArray: (state, action) => {
    //   state.Location[action.payload.index][action.payload.modalType] = [...state.Location[action.payload.index][action.payload.modalType], Templates[action.payload.modalType]];
    // },
    //CURRENT
    updateCurrent: (state, action) => {
      state.Current[action.payload.key] = action.payload.value;
    },
    removeFromArray: (state, action) => {
      state["Array"] = state["Array"].filter((item, index) => index !== action.payload);
    },
  },
});

export const { updateLocation, addToArray, updateKeyValueIn, removeFromArray, updateCurrent } = locationSlice.actions;
// export {locationSlice.reducers} = locationSlice.actions
export default locationSlice.reducer;
