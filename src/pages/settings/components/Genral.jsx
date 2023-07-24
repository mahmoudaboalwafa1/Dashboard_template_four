import React, { useEffect, useState } from "react";
import style from "../../../css/pages/settings.module.css";
import useInput from "../../../context/useInput";
import { ChangeDataUser } from "../../../redux/actionMethod";
import { useDispatch } from "react-redux";
import GenralClasses from "../classNames/GenralClasses";

const Genral = () => {
  const fName = useInput("", "text", "");
  const lName = useInput("", "text", "");
  const [showEmail, setShowEmail] = useState(true);
  const [showBtn, setShowBtn] = useState("Change");
  const [email, setEmail] = useState("");
  const [placeholder, setPlaceholder] = useState("112mahmoudsayed@gmail.com");

  const dispatch = useDispatch();
  const ChangeEmail = () => {
    setShowEmail(!showEmail);
    setPlaceholder("now you can edit in Email");
  };

  useEffect(() => {
    const unSub = () => {
      if (
        fName[0].value.length > 0 &&
        lName[0].value.length > 0 &&
        email.length > 0
      ) {
        setShowBtn("Save");
      }
      if (showBtn === "Save") {
        setPlaceholder("");
        dispatch(ChangeDataUser(fName[0].value, lName[0].value, email));
      }
    };
    return unSub;
  }, [fName[0].value, lName[0].value, email]);

  const { mainClass, textCenter, textGray, alignCenter } = GenralClasses;

  return (
    <section className={mainClass}>
      <div className="container">
        <h1 className={textCenter}>General Info</h1>
        <p className={textGray}>General Information About Your Account</p>
        <form className="pt-20" onSubmit={(e) => e.preventDefault()}>
          <label className="text-gray">First Name</label>
          <input {...fName[0]} />

          <label className="text-gray">Last Name</label>
          <input {...lName[0]} />

          <label className="text-gray">Email</label>
          <div className={alignCenter}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              type="email"
              disabled={showEmail}
              className={showEmail && style.disable}
            />
            <button onClick={ChangeEmail} className="ps-20 text-blue">
              {showBtn}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Genral;
