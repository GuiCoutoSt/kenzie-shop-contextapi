import toast from "react-hot-toast";

export const notifyError = (message) => {
  toast.error(message, {
    duration: 2000,

    style: {
      fontWeight: "900",
      backgroundColor: "#E8073D",
      color: "#FFF",
    },
  });
};

export const notifySuccess = (message) => {
  toast.success(message, {
    duration: 2000,

    style: {
      fontWeight: "900",
      backgroundColor: "#4BAE16",
      color: "#FFF",
    },
  });
};
