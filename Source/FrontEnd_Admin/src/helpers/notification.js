import {toast} from "react-toastify";

const options = {
  hideProgressBar: true,
  pauseOnFocusLoss: false
};

const notify = {
  error: (message) => toast.error(message, options),
  warn: (message) => toast.warn(message, options),
  success: (message) => toast.success(message, options),
  info: (message) => toast.info(message, options),
};

export default notify;