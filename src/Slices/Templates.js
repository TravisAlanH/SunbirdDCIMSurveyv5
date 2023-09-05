let Templates = {
  Location: {
    "# Operation *": "ADD",
    "Object *": "LOCATION",
    "Name *": "", //
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
    "# Operation *": "ADD", //
    "Object *": "DEVICE-RACKABLE", //
    "Name *": "", //
    "Make *": "", //
    "Model Name *": "", //
    "Class *": "", //
    "Mounting *": "", //
    "Form Factor *": "",
    "Rack Units *": 0,
    "Height *": 0,
    "Width": 0,
    "Depth": 0,
    "Weight": 0,
    "Units": "US",
    "Asset ID *": "",
    "Cabinet **": "", //
    "U Position **": "", //
    "Orientation **": "", //
    "Rails Used **": "", //
    "Location *": "",
    "Status": "PLANNED",
  },
  RacksArray: {
    "# Operation *": "ADD", //
    "Object *": "CABINET",
    "Name *": "",
    "Make *": "",
    "Model Name *": "",
    "Row Label *": "",
    "Position in Row *": "",
    "Serial Number": "",
    "Class": "",
    "Mounting *": "",
    "Form Factor *": "",
    "Rack Units *": 0,
    "Height *": 0,
    "Width": 0,
    "Depth": 0,
    "Weight": 0,
    "Units": "",
    "RU Filled": "",
    "RU Available": "",
    "Grounded": "",
    "Location *": "",
    "Status": "PLANNED",
  },
  RoomsArray: {
    "# Operation *": "ADD", //
    "Object *": "LOCATION",
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
    "Status": "PLANNED",
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

const State = {
  Location: [
    {
      LocationData: {
        "# Operation *": "ADD",
        "Object *": "LOCATION",
        "dcTrack Location Code*": "",
        "New dcTrack Location Code": "",
        "dcTrack Location Name*": "",
        "dcTrack Location Hierarchy*": "",
        "dcTrack Location Parent*": "",
        "Can Contain Assets": "",
        "Is Default Location": "",
        "Location Type": "",
        "Units": "",
        "Data Center Area*": "",
        "Outer Room Dim - L": "",
        "Outer Room Dim - W": "",
        "Data Center Height Raised Floor": "",
        "Data Center Height Finished Floor to Finished Ceiling": "",
        "Data Center Height Finished Ceiling to Slab Ceiling": "",
        "Country*": "",
        "Street": "",
        "Street (Line 2)": "",
        "City": "",
        "State": "",
        "Postal Code": "",
        "Drawing North": "",
        "Grid Label": "",
        "Vertical Row Orientation": "",
        "Horizontal Row Orientation": "",
        "Location Picture Path": "",
        "Enable Virtual Power Chain": "",
        "Power IQ Appliance": "",
        "Power IQ Object Type": "",
        "Power IQ Object ID": "",
        "Power IQ Object Name": "",
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
      // FireDetectionProtection: {
      //   "ID": [],
      //   "Name*": [],
      //   "@COLOR": "#6E7A94",
      //   FireDetectionProtectionArray: [],
      // },
      // FiberTrunkCabling: {
      //   "ID": [],
      //   "Name*": [],
      //   "@COLOR": "#7D88A2",
      //   FiberTrunkCablingArray: [],
      // },
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
    "LocalStorage": false,
  },
  DataRacks: [],
  DataAssets: [],
};

export { State };
export default Templates;
