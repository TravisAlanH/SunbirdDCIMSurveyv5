import { createSlice } from "@reduxjs/toolkit";
import Templates, { State } from "./Templates";

const initialState = State;

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateKeyValueIn: (state, action) => {
      state.Location[action.payload.index][action.payload.ObjKey][action.payload.modalType][action.payload.arrayIndex][action.payload.key] =
        action.payload.value;
      if (state.Current["LocalStorage"]) localStorage.setItem("PulseState", JSON.stringify(state));
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
      if (state.Current["LocalStorage"]) localStorage.setItem("PulseState", JSON.stringify(state));
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
      if (state.Current["LocalStorage"]) localStorage.setItem("PulseState", JSON.stringify(state));
    },
    //CURRENT
    updateCurrent: (state, action) => {
      state.Current[action.payload.key] = action.payload.value;
      if (state.Current["LocalStorage"]) localStorage.setItem("PulseState", JSON.stringify(state));
    },
    removeFromArray: (state, action) => {
      state["Array"] = state["Array"].filter((item, index) => index !== action.payload);
      if (state.Current["LocalStorage"]) localStorage.setItem("PulseState", JSON.stringify(state));
    },

    removeFromAssetsArray: (state, action) => {
      state.Location[0]["Assets"]["AssetsArray"] = state.Location[0]["Assets"]["AssetsArray"].filter(
        (item, index) => index !== action.payload.removeIndex
      );
      if (state.Current["LocalStorage"]) localStorage.setItem("PulseState", JSON.stringify(state));
    },

    loginInOut: (state, action) => {
      state.Current["Login"] = action.payload.set;
    },
    getRackData: (state, action) => {
      state.DataRacks = action.payload;
      if (state.Current["LocalStorage"]) localStorage.setItem("PulseState", JSON.stringify(state));
    },
    getAssetData: (state, action) => {
      state.DataAssets = action.payload;
      if (state.Current["LocalStorage"]) localStorage.setItem("PulseState", JSON.stringify(state));
    },
    setLocalStorage: (state, action) => {
      state.Current["LocalStorage"] = state.Current["LocalStorage"] = action.payload.LocalStorage;
      if (state.Current.LocalStorage) localStorage.setItem("PulseState", JSON.stringify(state));
    },
    setLocalStorageData: (state, action) => {
      state.Location = action.payload.data.Location;
      state.Current = action.payload.data.Current;
    },
    addRemoveCustomFieldsFromAssets: (state, action) => {
      for (let i = 0; i < state.Location[0].Assets.AssetsArray.length; i++) {
        if (action.payload.checked) {
          state.Location[0].Assets.AssetsArray[i][action.payload.value] = "";
        } else {
          delete state.Location[0].Assets.AssetsArray[i][action.payload.value];
        }
      }
      if (state.Current["LocalStorage"]) localStorage.setItem("PulseState", JSON.stringify(state));
    },
  },
});

export const {
  setLocalStorageData,
  setLocalStorage,
  removeFromAssetsArray,
  addRemoveCustomFieldsFromAssets,
  getRackData,
  getAssetData,
  loginInOut,
  updateLocation,
  addToArray,
  updateKeyValueIn,
  removeFromArray,
  updateCurrent,
} = locationSlice.actions;
export default locationSlice.reducer;
