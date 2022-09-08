import PopupWithoutForm from "./PopupWithoutForm";
import SuccessIcon from '../images/success.png';
import ErrorIcon from '../images/fail.png';

function PopupAuthInfo(props) {
  return (
    <PopupWithoutForm
      name="result"
      title={
        props.answer
          ? "Вы успешно зарегистрировались!"
          : "Что-то пошло не так! Попробуйте ещё раз."
      }
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <img src={props.answer ? SuccessIcon : ErrorIcon} alt={props.answer ? "Успех" : "Ошибка"} className="popup__icon" />
    </PopupWithoutForm>
  )  
}

export default PopupAuthInfo;