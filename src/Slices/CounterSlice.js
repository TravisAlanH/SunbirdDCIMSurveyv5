import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Location: [
    {
      Location: [
        {
          "ID": "",
          "Name*": "",
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
      ],
      RoomDataArray: [
        {
          "ID": "",
          "Name*": "",
          "Room Number*": "",
          "GPS Location": "",
          "Floor Type": "",
          "Floor Condition": "",
          "Ceiling Type": "",
          "Ceiling Condition": "",
          "Water Damage": "",
          "Water Damage Note": "",
        },
      ],
      AssetsArray: [
        {
          "ID": "",
          "Name*": "",

          "Asset ID*": "",
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
          "ID": "",
          "Name*": "",

          "Serial Number*": "",
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
  Current: {
    "dcTrack Location Name*": "",
    "Room Number": "",
  },
};

const Templates = {
  Location: {
    "ID": "",
    "Name*": "",
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
  AssetsArray: {
    "ID": "",
    "Name*": "",

    "Asset ID*": "",
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
  RacksArray: {
    "ID": "",
    "Name*": "",

    "Serial Number*": "",
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
  RoomDataArray: {
    "ID": "",
    "Name*": "",
    "Room Number*": "",
    "GPS Location": "",
    "Floor Type": "",
    "Floor Condition": "",
    "Ceiling Type": "",
    "Ceiling Condition": "",
    "Water Damage": "",
    "Water Damage Note": "",
  },
};

// let LocationTemplate = {
//   "ID": "",
//   "Name*": "",

//   "# Operation *": "",
//   "Object *": "",
//   "dcTrack Location Code*": "",
//   "dcTrack Location Name*": "",
//   "dcTrack Location Hierarchy*": "",
//   "dcTrack Location Parent*": "",
//   "Can Contain Assets": "",
//   "Data Center Area*": "",
//   "Country*": "",
//   "Enable AC Virtual Power Chain": "",
//   "Is Default Location": "",
//   "Capacity(kW)": "",
// };

// let AssetsTemplate = {
//   "ID": "",
//   "Name*": "",

//   "Asset ID*": "",
//   "Serial Number": "",
//   "Device Name": "",
//   "Make": "",
//   "Model": "",
//   "Type": "",
//   "Rack Location": "",
//   "RU Location": "",
//   "Mounting Type": "",
//   "Power": "",
//   "Network": "",
//   "Fiber": "",
// };

// let RacksTemplate = {
//   "ID": "",
//   "Name*": "",

//   "Serial Number*": "",
//   "Make": "",
//   "Model": "",
//   "Type": "",
//   "Position On Floor": "",
//   "Height in UP": "",
//   "Width": "",
//   "Depth": "",
//   "RU Filled": "",
//   "RU Available": "",
//   "Grounded": "",
// };

// let RoomDataTemplate = {
//   "ID": "",
//   "Name*": "",
//   "Room Number*": "",
//   "GPS Location": "",
//   "Floor Type": "",
//   "Floor Condition": "",
//   "Ceiling Type": "",
//   "Ceiling Condition": "",
//   "Water Damage": "",
//   "Water Damage Note": "",
// };

const locationSlice = createSlice({
  name: "location", // Use lowercase name for consistency
  initialState,
  reducers: {
    updateKeyValueIn: (state, action) => {
      state.Location[action.payload.index][action.payload.modalType][action.payload.arrayIndex][action.payload.key] = action.payload.value;
      if (action.payload.key === "Name*") {
        state.Location[action.payload.index][action.payload.modalType][action.payload.arrayIndex]["ID"] = action.payload.value;
      }
    },
    addToArray: (state, action) => {
      state.Location[action.payload.index][action.payload.modalType] = [...state.Location[action.payload.index][action.payload.modalType], Templates[action.payload.modalType]];
    },
    //CURRENT
    updateCurrent: (state, action) => {
      state.Current[action.payload.key] = action.payload.value;
    },
    removeFromArray: (state, action) => {
      state["Array"] = state["Array"].filter((item, index) => index !== action.payload);
    },
  },
});

export const { addToArray, updateKeyValueIn, removeFromArray, updateCurrent } = locationSlice.actions;
// export {locationSlice.reducers} = locationSlice.actions
export default locationSlice.reducer;
