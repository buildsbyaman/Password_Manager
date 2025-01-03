import React from "react";
import { MdDeleteForever } from "react-icons/md";
import EmptyData from "./EmptyData";
import { toast, ToastContainer } from "react-toastify";

const ShowDatabase = ({ state, dispatchstate }) => {
  const showToast = () => {
    toast.success("Password Deleted successfully!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const handleDeleteclick = (inputemail) => {
    showToast();

    dispatchstate({
      type: "DELETE",
      email: inputemail,
    });
  };

  return (
    <>
      {state.length === 0 ? (
        <EmptyData></EmptyData>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {state.map((item) => (
            <div
              className="card"
              style={{ display: "flex", width: "20rem", margin: "10px auto" }}
              key={item.inputemail}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ padding: "10px 0px" }}>
                  <strong>Username:</strong> {item.inputname}
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    onClick={() => handleDeleteclick(item.inputemail)}
                    style={{ cursor: "pointer" }}
                  >
                    <MdDeleteForever />
                  </span>
                </h5>
                <p className="card-text">
                  <strong>Email:</strong> {item.inputemail}
                </p>
                <p className="card-text">
                  <strong>Password:</strong> {item.inputpassword}
                </p>
                <p className="card-text">
                  <strong>WebsiteURL:</strong> {item.inputwebsiteUrl}
                </p>
                <p className="card-text">
                  <strong>Date Of Creation:</strong> {item.inputDOC}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default ShowDatabase;
