import { toast } from "react-toastify";

toast.configure({
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
});

export default function ({ type, message }) {
  return toast[type](message);
}
