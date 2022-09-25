import { createSlice } from "@reduxjs/toolkit";


const initialState: EmployeeState = {
    employeesList: []
}

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        setEmployees: (state, action) => {
            state.employeesList = action.payload;
        },
        addEmployee: (state, action) => {
            state.employeesList.push(action.payload);
        },
        removeEmployee: (state, action) => {
            console.log("removeEmployee", action.payload?.name);

            const newList = state.employeesList.filter((item) => item?.id !== action.payload.id);
            state.employeesList = newList;
        },
        updateEmployeeDetails: (state, action) => {
            const newList = state.employeesList.map((item) => item.id === action.payload.id ? action.payload : item)
            state.employeesList = newList;
        },
        forDemo: (state, action) => {
            console.log('log from global state : ', action.payload);
            state.employeesList = null
        }

    }
})

export const { setEmployees, addEmployee, removeEmployee, updateEmployeeDetails, forDemo } = employeeSlice.actions

export default employeeSlice.reducer