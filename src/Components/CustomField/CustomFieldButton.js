import React from "react";
import CustomFieldModal from "./CustomFieldModal";

export default function CustomFieldButton() {
  // Get the button that opens the modal
  var modal = document.getElementById("myModalAddField");

  // Get the <span> element that closes the modal

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  return (
    <div>
      {/* // button that looks like all the over buttons that says "+ Field" */}
      <button
        id="myBtn"
        onClick={() => {
          var modal = document.getElementById("myModalAddField");
          modal.style.display = "block";
        }}
      >
        Open Modal
      </button>
      <div id="myModalAddField" className="modal">
        {/* <!-- Modal content --> */}
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              var modal = document.getElementById("myModalAddField");
              modal.style.display = "none";
            }}
          >
            &times;
          </span>
          <CustomFieldModal />
        </div>
      </div>
    </div>
  );
}
