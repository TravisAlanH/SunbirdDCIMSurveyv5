import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Location: [
    {
      Location: {
        "# Operation *": "",
        "Object *": "",
        "dcTrack Location Code*": "",
        "dcTrack Location Name*": "",
        "dcTrack Location Hierarchy*": "",
        "dcTrack Location Parent*": "",
        "Can Contain Assets": "",
        "Data Center Area*": "",
        "Country*": "",
        "Enable AC Virtual Power Chain": "",
        "Is Default Location": "",
        "Capacity(kW)": "",
      },
      RoomData: {
        "Room Number": "",
        "GPS Location": "",
        "Floor Type": "",
        "Floor Condition": "",
        "Ceiling Type": "",
        "Ceiling Condition": "",
        "Water Damage": "",
        "Water Damage Note": "",
      },
      AssetsArray: [
        {
          "Asset ID": "",
          "Serial Number": "",
          "Device Name": "",
          "Make": "",
          "Model": "",
          "Type": "",
          "Rack Location": "",
          "RU Location": "",
          "Mounting Type": "",
          "Power": "",
          "Network": "",
          "Fiber": "",
        },
      ],
      RacksArray: [
        {
          "Serial Number": "",
          "Make": "",
          "Model": "",
          "Type": "",
          "Position On Floor": "",
          "Height in UP": "",
          "Width": "",
          "Depth": "",
          "RU Filled": "",
          "RU Available": "",
          "Grounded": "",
        },
      ],
    },
  ],
};

let AssetsTemplate = {
  "Asset ID": "",
  "Serial Number": "",
  "Device Name": "",
  "Make": "",
  "Model": "",
  "Type": "",
  "Rack Location": "",
  "RU Location": "",
  "Mounting Type": "",
  "Power": "",
  "Network": "",
  "Fiber": "",
};

let RacksTemplate = {
  "Serial Number": "",
  "Make": "",
  "Model": "",
  "Type": "",
  "Position On Floor": "",
  "Height in UP": "",
  "Width": "",
  "Depth": "",
  "RU Filled": "",
  "RU Available": "",
  "Grounded": "",
};

const locationSlice = createSlice({
  name: "location", // Use lowercase name for consistency
  initialState,
  reducers: {
    updateKeyValueInLocation: (state, action) => {
      state.Location[action.payload.index].Location[action.payload.key] = action.payload.value;
    },
    updateKeyValueInRoomData: (state, action) => {
      state.Location[action.payload.index].RoomData[action.payload.key] = action.payload.value;
    },
    updateKeyValueInAssets: (state, action) => {
      state.Location[action.payload.index].AssetsArray[action.payload.arrayIndex][action.payload.key] = action.payload.value;
    },
    addToAssets: (state, action) => {
      state.Location[action.payload.index].AssetsArray = [...state.Location[action.payload.index].AssetsArray, AssetsTemplate];
    },
    updateKeyValueInRack: (state, action) => {
      state.Location[action.payload.index].RacksArray[action.payload.arrayIndex][action.payload.key] = action.payload.value;
    },
    addToRack: (state, action) => {
      state.Location[action.payload.index].RacksArray = [...state.Location[action.payload.index].RacksArray, RacksTemplate];
    },
    removeFromArray: (state, action) => {
      state["Array"] = state["Array"].filter((item, index) => index !== action.payload);
    },
    updateArrayValue: (state, action) => {
      state["Array"][action.payload.index] = action.payload.value;
    },
  },
});

/* The line `export const { updateLocationName, updateLocationCode, addToArray, removeFromArray,
updateArrayValue } = locationSlice.actions;` is exporting specific action creators from the
`locationSlice` slice. */
export const { addToAssets, removeFromArray, updateArrayValue, updateKeyValueInLocation, updateKeyValueInRoomData, updateKeyValueInAssets, updateKeyValueInRack, addToRack } = locationSlice.actions;
// export {locationSlice.reducers} = locationSlice.actions
export default locationSlice.reducer;
