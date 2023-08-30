const Templates = {
  Location: {
    "ID": "",
    "Name*": "",
    "# Operation *": "",
    "Object *": "",
    "dcTrack Location Name*": "",
    "dcTrack Location Code*": "",
    "dcTrack Location Hierarchy*": "",
    "dcTrack Location Parent*": "",
    "Can Contain Assets": true,
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
    "Device Name": "", //
    "Make": "", //
    "Model": "", //
    "Type": "",
    "Rack Location": "", //
    "RU Location": "", //
    "Height in UP": "",
    "Mounting Type": "", //
    "Orientation": "", //
    "Power": "",
    "Network": "",
    "Fiber": "",
    "Location": "",
  },
  RacksArray: {
    "ID": "",
    "Name*": "",
    "Serial Number*": "",
    "Make": "",
    "Model": "",
    "Type": "",
    "Position On Floor": "",
    "Height in UP": 5,
    "Width": "",
    "Depth": "",
    "RU Filled": "",
    "RU Available": "",
    "Grounded": "",
    "Location": "",
  },
  RoomDataArray: {
    "ID": "",
    "Name*": "",
    "Room Number*": "",
    "GPS Location": "",
    "Floor Type": "",
    "Floor Condition^": "",
    "Ceiling Type": "",
    "Ceiling Condition^": "",
    "Water Damage": "",
    "Water Damage Note": "",
    "Location": "",
  },
  FireProtectionArray: {
    "ID": "",
    "Name*": "",
    "Type": "",
    "Detection": "",
    "Protection": "",
    "Rated": "",
    "Location": "",
  },
};

const State2 = {
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
    "LocationIndex": 0,
    "RoomArrayIndex": 0,
    "AssetsArrayIndex": 0,
    "RacksArrayIndex": 0,
  },
};

// Fix Location Refactor to be Object not Array

// turn Modal.js into component, passing in State2.Location[//Section from something//].Sections Below (Not the LocationData)

const State = {
  Location: [
    {
      LocationData: {
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
      RoomData: {
        "@COLOR": "red",
        RoomDataArray: [],
      }, // change these to objects not arrays, that hold Array Data
      Racks: {
        RacksArray: [],
        "@COLOR": "yellow",
      },
      Assets: {
        AssetsArray: [],
        "@COLOR": "orange",
      },
      Electrical: {
        "ID": [],
        "Name*": [],
        "@COLOR": "green",
        "PanelsArray": [],
        "ReceptaclesArray": [],
        "UPSArray": [],
        "RackATSArray": [],
        "RackPDUArray": [],
        "GroundBusArray": [],
        "OtherArray": [],
      },
      Mechanical: {
        "ID": [],
        "Name*": [],
        "@COLOR": "blue", // Set color for each section
        AirConditioningArray: [],
        HumidifierArray: [],
      },
      FireDetectionProtection: {
        "ID": [],
        "Name*": [],
        "@COLOR": "purple",
        FireProtectionArray: [],
      },
      FiberTrunkCabling: {
        "ID": [],
        "Name*": [],
        "@COLOR": "pink",
        LIU: [],
      },
    },
  ],
  Current: {
    "dcTrack Location Name*": "",
    "Room Number": "",
    "LocationIndex": 0,
    "RoomArrayIndex": 0,
    "AssetsArrayIndex": 0,
    "RacksArrayIndex": 0,
  },
};

export { State, State2 };
export default Templates;
