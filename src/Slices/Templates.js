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

const State = {
  Location: [
    {
      Location: [],
      RoomDataArray: [],
      AssetsArray: [],
      RacksArray: [],
    },
  ],
  Current: {
    "dcTrack Location Name*": "",
    "Room Number": "",
  },
};

export { State };
export default Templates;
