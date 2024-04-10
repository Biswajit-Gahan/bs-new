import React, { useEffect, useState } from "react";
import { MessageBoxContainer } from "./message.box.styles";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { sendMail } from "../../utils/axios/email";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import regex from "../../utils/regex";
// import { firedb } from "../../utils/firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const MessageBox = () => {
  const [inputs, setInputs] = useState(() => ({
    username: "",
    usermobile: "",
    useremail: "",
    exReq: "",
  }));

  const [buttonState, setButtonState] = useState(() => ({
    isLoading: false,
    isError: false,
    isChecked: false,
    isSuccess: false,
  }));

  const checkAllInputs = () => {
    return Object.keys(inputs).every(
      // eslint-disable-next-line eqeqeq
      (item) => inputs[item] != "" && regex[item].test(inputs[item])
    );
  };

  const handleInputs = (event) => {
    setButtonState((prevData) => ({
      ...prevData,
      isError: false,
      isLoading: false,
      isSuccess: false,
    }));
    const { id, value } = event.target;

    setInputs((prevData) => ({ ...prevData, [id]: value }));

    if (regex[id].test(value)) {
      event.target.style.color = "white";
    } else {
      event.target.style.color = "red";
    }
  };

  useEffect(() => {
    const check = checkAllInputs();
    if (check) {
      setButtonState((prevData) => ({ ...prevData, isChecked: true }));
    } else {
      setButtonState((prevData) => ({ ...prevData, isChecked: false }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs]);

  const handleSubmit = async () => {
    if (buttonState.isChecked && !buttonState.isLoading) {
      setButtonState((prevData) => ({ ...prevData, isLoading: true }));
      try {
        const toEmail = process.env.REACT_APP_EMAIL_DEFAULT_ADDRESS;
        const subject = "General Enquiry For Bishnu Steel";
        const content = `
          <h3>Sender's Details</h3>
          <p><strong>Name:</strong> ${inputs.username}</p>
          <p><strong>Mobile No.</strong>: ${inputs.usermobile}</p>
          <p><strong>Email ID:</strong> ${inputs.useremail}</p>
          <br/>
          <h3><strong>Message:</strong></h3>
          <p>${inputs.exReq}</p>
        `;

        const { data } = await sendMail.post(
          process.env.REACT_APP_EMAIL_SEND_API,
          {
            toEmail,
            subject,
            content,
          }
        );

        if (data.statusCode === 200) {
          setButtonState((prevData) => ({
            ...prevData,
            isLoading: false,
            isSuccess: true,
            isError: false,
          }));
          setInputs(() => ({
            username: "",
            usermobile: "",
            useremail: "",
            exReq: "",
          }));
        } else {
          setButtonState((prevData) => ({
            ...prevData,
            isLoading: false,
            isError: true,
          }));
        }

        // TODO: TEMPRARILY DISABLED THE FIREBASE DB

        // const docRef = await addDoc(collection(firedb, "general_inquiry"), {
        //   username: inputs.username,
        //   useremail: inputs.useremail,
        //   usermobile: inputs.usermobile,
        //   exReq: inputs.exReq,
        //   requestdate: serverTimestamp(),
        // });
      } catch (err) {
        setButtonState((prevData) => ({
          ...prevData,
          isLoading: false,
          isError: true,
        }));
      }
    }
  };

  return (
    <MessageBoxContainer>
      <div className="strap-design"></div>
      <div className="message-box-wrapper">
        <div className="header-container">
          <h2 className="header-text anime" data-move="move-up">
            Still Need Help ?
          </h2>
          <p
            className="header-tag anime"
            data-move="move-left"
            data-delay={0.2}>
            Fill the details,
            <br />
            We'll get back to you.
          </p>
        </div>
        <div className="message-container">
          <input
            value={inputs.username}
            type="text"
            id="username"
            className="input input-name anime"
            placeholder="Full Name..."
            data-move="move-up"
            data-delay={0.3}
            onInput={handleInputs}
          />
          <input
            value={inputs.usermobile}
            type="text"
            id="usermobile"
            className="input input-mobile anime"
            placeholder="Mobile Number..."
            data-move="move-up"
            data-delay={0.4}
            onInput={handleInputs}
          />
          <input
            value={inputs.useremail}
            type="text"
            id="useremail"
            className="input input-email anime"
            placeholder="Email ID..."
            data-move="move-up"
            data-delay={0.5}
            onInput={handleInputs}
          />
          <textarea
            value={inputs.exReq}
            className="input input-message anime"
            id="exReq"
            placeholder="Message..."
            data-move="move-up"
            data-delay={0.6}
            onInput={handleInputs}></textarea>
          <button
            className="input submit-button anime"
            data-move="move-up"
            data-delay={0.7}
            onClick={handleSubmit}
            style={{
              cursor: buttonState.isChecked ? "pointer" : "not-allowed",
            }}>
            {buttonState.isLoading ? (
              <>
                <RestartAltIcon /> Please Wait...
              </>
            ) : buttonState.isError ? (
              <>
                <ErrorOutlineIcon />
                Error, Please Send Again!
              </>
            ) : buttonState.isSuccess ? (
              <>
                <DoneAllIcon />
                Sent Successfully.
              </>
            ) : (
              <>
                <SendRoundedIcon />
                Send Message.
              </>
            )}
          </button>
        </div>
      </div>
    </MessageBoxContainer>
  );
};

export default MessageBox;
