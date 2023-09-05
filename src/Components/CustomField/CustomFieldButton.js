import React from "react";
import CustomFieldModal from "./CustomFieldModal";

export default function CustomFieldButton() {
  var modal = document.getElementById("myModalAddField");
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  return (
    <div>
      <button
        className="orangeButton"
        id="myBtn"
        onClick={() => {
          var modal = document.getElementById("myModalAddField");
          modal.style.display = "block";
        }}
      >
        Custom Fields
      </button>
      <div id="myModalAddField" className="modal">
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
