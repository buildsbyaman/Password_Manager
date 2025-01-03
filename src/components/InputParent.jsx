import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";

const InputParent = ({ dispatchstate }) => {
  const inputemail = useRef("");
  const inputpassword = useRef("");
  const inputname = useRef("");
  const inputDOC = useRef("");
  const websiteUrl = useRef("");

  const showToast = () => {
    toast.success("Password Stored successfully!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
     if (
       !inputemail.current.value ||
       !inputpassword.current.value ||
       !inputname.current.value ||
       !inputDOC.current.value ||
       !websiteUrl.current.value
     ) {
       toast.error("Please fill all fields before submitting!");
       return;
     }
     showToast();
    const data = {
      inputwebsiteUrl: websiteUrl.current.value,
      inputemail: inputemail.current.value,
      inputpassword: inputpassword.current.value,
      inputname: inputname.current.value,
      inputDOC: inputDOC.current.value,
    };
    dispatchstate({
      type: "ADD",
      data: data,
    });

    inputemail.current.value = "";
    inputpassword.current.value = "";
    inputname.current.value = "";
    inputDOC.current.value = "";
    websiteUrl.current.value = "";
  };

  return (
    <div className="InputParent">
      <form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            placeholder="Enter Your Email here"
            ref={inputemail}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            placeholder="Enter Your Password here"
            ref={inputpassword}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword2" class="form-label">
            Username
          </label>
          <input
            placeholder="Enter Your Username here"
            ref={inputname}
            type="text"
            class="form-control"
            id="exampleInputPassword2"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword2" class="form-label">
            Website
          </label>
          <input
            placeholder="Enter Website URL here"
            ref={websiteUrl}
            type="text"
            class="form-control"
            id="exampleInputPassword2"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword3" class="form-label">
            Date Of Creation
          </label>
          <input
            ref={inputDOC}
            type="date"
            class="form-control"
            id="exampleInputPassword3"
          />
        </div>

        <button class="btn btn-primary">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default InputParent;
