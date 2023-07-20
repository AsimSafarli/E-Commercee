import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../../Uitl/Status";

const initialState={
    products:[],
    productStatus:STATUS.IDLE
}