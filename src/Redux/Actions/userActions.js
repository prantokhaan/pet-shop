import axios from "axios";
import swal from "sweetalert";


export const userLogin = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post(
      "http://localhost:5000/users/login",
      reqObj
    );
    localStorage.setItem("user", JSON.stringify(response.data));
    swal("Logged In!", "User Logged In Successfully!", "success");
    dispatch({ type: "LOADING", payload: false });
    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user?.role === "admin") {
        window.location.href = "/";
      } else {
        window.location.href = "/";
      }
    }, 500);
  } catch (error) {
    console.log(error);
    swal("Oops!", "Something Went Wrong!", "warning");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const userRegister = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post(
      "http://localhost:5000/users/register",
      reqObj
    );
    swal("Register!", "User Registered Successfully!", "success");
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);

    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    swal("Oops!", "Something Went Wrong!", "warning");
    dispatch({ type: "LOADING", payload: false });
  }
};
