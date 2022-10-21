import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: null,
    empID: null,
    fullName: null,
    address: null,
    nic: null,
    phoneNo: null,
    dob: null,
    recruitDate: null,
    image: null,
    type: null,
  },
];

const mapStaffDetails = (d = []) =>
  d.map((data) => ({
    id: data?._id,
    empID: data?.empID,
    fullName: data?.fullName,
    address: data?.address,
    nic: data?.nic,
    phoneNo: data?.phoneNo,
    dob: data?.dob,
    recruitDate: data?.recruitDate,
    image: data?.image,
    type: data?.type,
  }));

export const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    setStaff(state, action) {
      return {
        ...state,
        ...mapStaffDetails(action.payload),
      };
    },
    resetStaff(state) {
      return {
        ...state,
        ...initialState,
      };
    },
  },
});

export const { setStaff, resetStaff } = staffSlice.actions;

export default staffSlice.reducer;
