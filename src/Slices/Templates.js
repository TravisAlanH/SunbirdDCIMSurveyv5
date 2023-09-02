let Templates = {
  Location: {
    "ID": "",
    "Name *": "",
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
    "# Operation *": "PLANNED",
    "Object *": "DEVICE",
    "ID": "",
    "Index": 0,
    "Name *": "",
    "Asset ID*": "",
    "Serial Number": "",
    "Make *": "", //
    "Model *": "", //
    "Type": "",
    "Cabinet **": "", //
    "U Position **": "", //
    "Mounting Type": "", //
    "Orientation **": "", //
    "Rails Used **": "", //
    "Power": "",
    "Network": "",
    "Fiber": "",
    "Location *": "",
  },
  RacksArray: {
    "ID": "",
    "Name *": "",
    "Serial Number*": "",
    "Make *": "",
    "Model *": "",
    "Type": "",
    "Position On Floor": "",
    "Height in UP": 0,
    "Width": "",
    "Depth": "",
    "RU Filled": "",
    "RU Available": "",
    "Grounded": "",
    "Location *": "",
  },
  RoomsArray: {
    "ID": "",
    "Name *": "",
    "Room Number*": "",
    "GPS Location": "",
    "Floor Type": "",
    "Floor Condition^": "",
    "Ceiling Type": "",
    "Ceiling Condition^": "",
    "Water Damage": "",
    "Water Damage Note": "",
    "Location *": "",
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
      Rooms: {
        "@COLOR": "#3C4A65",
        RoomsArray: [],
      }, // change these to objects not arrays, that hold Array Data
      Racks: {
        RacksArray: [],
        "@COLOR": "#43516C",
      },
      Assets: {
        AssetsArray: [],
        "@COLOR": "#4B5873",
      },
      //   Electrical: {
      //     "ID": [],
      //     "Name*": [],
      //     "@COLOR": "#525F7A",
      //     "PanelsArray": [],
      //     "ReceptaclesArray": [],
      //     "UPSArray": [],
      //     "RackATSArray": [],
      //     "RackPDUArray": [],
      //     "GroundBusArray": [],
      //     "OtherArray": [],
      //   },
      //   Mechanical: {
      //     "ID": [],
      //     "Name*": [],
      //     "@COLOR": "#606D87", // Set color for each section
      //     AirConditioningArray: [],
      //     HumidifierArray: [],
      //   },
      FireDetectionProtection: {
        "ID": [],
        "Name*": [],
        "@COLOR": "#6E7A94",
        FireDetectionProtectionArray: [],
      },
      FiberTrunkCabling: {
        "ID": [],
        "Name*": [],
        "@COLOR": "#7D88A2",
        FiberTrunkCablingArray: [],
      },
    },
  ],
  Current: {
    "dcTrack Location Name*": "",
    "Room Number": "",
    "LocationIndex": 0,
    "RoomsArrayIndex": 0,
    "AssetsArrayIndex": 0,
    "RacksArrayIndex": 0,
    "Login": 0,
  },
};

export { State, State2 };
export default Templates;
