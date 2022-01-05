import axios from "axios";
import swal from "sweetalert";

export const getAllFoods = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.get("/getAllFoods");
    dispatch({ type: "GET_ALL_FOODS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const addFood = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("/addFood", reqObj);

    dispatch({ type: "LOADING", payload: false });
    swal("Successfull!", "New Food Added Successfully!", "success");
    setTimeout(() => {
      window.location.href = "/home";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const editFood = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("/editFood", reqObj);

    dispatch({ type: "LOADING", payload: false });
    swal("Successfull!", "Food Details Updated Successfully!", "success");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const deleteFood = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("/deleteFood", reqObj);

    dispatch({ type: "LOADING", payload: false });
    swal("Deleted!", "Food Deleted Successfully!", "success");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};