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
    "LocationIndex": 0,
    "RoomArrayIndex": 0,
    "AssetsArrayIndex": 0,
    "RacksArrayIndex": 0,
  },
};

// Fix Location Refactor to be Object not Array

// turn Modal.js into component, passing in State2.Location[//Section from something//].Sections Below (Not the LocationData)

const State2 = {
  Location: [
    {
      LocationData: {
        // will be larger Modal
        //hold standard Data
      },
      RoomDataArray: [], // change these to objects not arrays, that hold Array Data
      AssetsArray: [],
      RacksArray: [],
      Electrical: {
        Panels: [],
        Receptacles: [],
        UPS: [],
        RackATS: [],
        RackPDU: [],
        GroundBus: [],
        Other: [],
      },
      Mechanical: {
        "@COLOR": "", // Set color for each section
        AirConditioning: [],
        Humidifier: [],
      },
      FireDetectionProtection: {
        Detection: [],
        Protection: [],
        Rated: [],
      },
      FiberTrunkCabling: {
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

export { State };
export default Templates;
