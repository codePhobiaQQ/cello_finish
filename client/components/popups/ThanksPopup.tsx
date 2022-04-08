import Close from "../UI/close";
import useTypedSelector from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setThanks } from "../../redux/slices/AppSlice";

const ThanksPopup = () => {
  const thanks = useTypedSelector((state) => state.app.thanks);
  const dispatch = useDispatch();

  const closeThanksHandler = () => {
    dispatch(setThanks(false));
  };

  return (
    <>
      {thanks && (
        <div className="ThanksPopup">
          <Close onClick={closeThanksHandler} />
          <h2>Thank You</h2>
          <p>manager connect with you</p>
        </div>
      )}
    </>
  );
};

export default ThanksPopup;
