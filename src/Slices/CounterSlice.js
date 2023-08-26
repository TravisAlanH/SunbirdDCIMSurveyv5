import { createSlice } from "@reduxjs/toolkit";
import Templates, { State } from "./Templates";

const initialState = State;
// {
//   Location: [
//     {
//       Location: [],
//       RoomDataArray: [],
//       AssetsArray: [],
//       RacksArray: [],
//     },
//   ],
//   Current: {
//     "dcTrack Location Name*": "",
//     "Room Number": "",
//   },
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
