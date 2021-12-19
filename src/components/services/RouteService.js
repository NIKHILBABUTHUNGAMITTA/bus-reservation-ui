import axios from 'axios';

const addRouteService = (route) => {
    console.log(`getRoutebyIdService`);
    return axios.post(`/route/addroute`, route);
}

const updateRouteService = (route) => {
    console.log(`getRoutebyIdService`);
    return axios.post(`/route/updateroute`, route);
}

const deleteRouteService = (routeId) => {
    console.log(`getRoutebyIdService`);
    return axios.post(`/route/deletebyid${routeId}`);
}
const getRouteByIdService = (routeId) => {
    console.log(`getRoutebyIdService`);
    return axios.get(`/route/getroutebyid/${routeId}`);
}
const getAllRouteService = () => {
    console.log(`getRoutebyIdService`);
    return axios.get(`/route/getallroute`);
}


export { addRouteService, updateRouteService, deleteRouteService,getRouteByIdService, getAllRouteService,};
