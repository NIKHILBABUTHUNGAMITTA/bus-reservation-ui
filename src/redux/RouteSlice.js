import { createSlice } from "@reduxjs/toolkit";
import Route from "../components/models/Route";

const RouteSlice = createSlice({
    name: 'route',
    initialState: {
        routeState: new Route (),
        routeList: []
    },

    reducers: {
        addRoute: (state, action) => {
            console.log('RouteSlice reducers addRoute');
            state.routeState = action.payload;
        },
        
        updateRoute: (state, action) => {
            console.log('RouteSlice reducers updateRoute');
            state.routeState = action.payload;
        },

        deleteRoute: (state, action) => {
            console.log('RouteSlice reducers deleteRoute');
            state.routeState = action.payload;
        },

        // viewRoute: (state, action) => {
        //     console.log('RouteSlice reducers viewRoute');
        //     state.routeState = action.payload;
        // },

        viewRouteId: (state, action) => {
            console.log('RouteSlice reducers viewRouteById');
            state.routeState = action.payload;
        },

        viewAllRoute: (state, action) => {
            console.log('RouteSlice reducers viewAllRoute');
            state.routeState = action.payload;
        },
    }
})
export const { addRoute,updateRoute,deleteRoute,getRouteById,getAllRoute } = RouteSlice.actions;

export default RouteSlice.reducer;