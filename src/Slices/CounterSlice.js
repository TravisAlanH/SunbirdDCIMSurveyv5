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
      let newData = JSON.parse(JSON.stringify(Templates[action.payload.modalType]));
      if (action.payload.modalType === "RoomDataArray" || action.payload.modalType === "AssetsArray" || action.payload.modalType === "RacksArray") {
        newData["Location *"] = state.Location[action.payload.index]["LocationData"]["dcTrack Location Code*"];
      }
      state.Location[action.payload.index][action.payload.ObjKey][action.payload.modalType] = [
        ...state.Location[action.payload.index][action.payload.ObjKey][action.payload.modalType],
        newData,
      ];

      // state.Location[action.payload.index][action.payload.ObjKey][action.payload.modalType] = [
      //   ...state.Location[action.payload.index][action.payload.ObjKey][action.payload.modalType],
      //   Templates[action.payload.modalType],
      // ];
      // if (action.payload.modalType === "RoomDataArray") {
      //   state.Location[action.payload.index][action.payload.ObjKey][action.payload.modalType][
      //     state.Location[action.payload.index][action.payload.ObjKey][action.payload.modalType].length - 1
      //   ]["Location"] = state.Location[action.payload.index]["LocationData"]["dcTrack Location Code*"];
      // }
    },
    updateLocation: (state, action) => {
      state.Location[action.payload.index].LocationData[action.payload.ObjKey] = action.payload.value;
      if (action.payload.ObjKey === "dcTrack Location Code*") {
        for (let i = 0; i < state.Location[0].Rooms.RoomsArray.length; i++) {
          state.Location[0].RoomData.RoomDataArray[i]["Location *"] = action.payload.value;
        }
        for (let i = 0; i < state.Location[0].Assets.AssetsArray.length; i++) {
          state.Location[0].Assets.AssetsArray[i]["Location *"] = action.payload.value;
        }
        for (let i = 0; i < state.Location[0].Racks.RacksArray.length; i++) {
          state.Location[0].Racks.RacksArray[i]["Location *"] = action.payload.value;
        }
      }
    },
    //CURRENT
    updateCurrent: (state, action) => {
      state.Current[action.payload.key] = action.payload.value;
    },
    removeFromArray: (state, action) => {
      state["Array"] = state["Array"].filter((item, index) => index !== action.payload);
    },
    loginInOut: (state, action) => {
      state.Current["Login"] = action.payload.set;
    },
  },
});

export const { loginInOut, updateLocation, addToArray, updateKeyValueIn, removeFromArray, updateCurrent } = locationSlice.actions;
export default locationSlice.reducer;
