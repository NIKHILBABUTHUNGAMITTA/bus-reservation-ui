import {getRouteByIdService,getAllRouteService} from "./services/RouteService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getRouteById, GetAllRoute } from '../redux/RouteSlice';
import axios from "axios";
import { Store } from "redux";
import { Provider } from "react";

const RouteData = () => {

    const [routeid, setRid] = useState('');
    const dispatch = useDispatch();
    const routeDataFromStore = useSelector((state) => state.route.routeState);
    const routeList = useSelector((state) => state.route.routeList);

    const handleRoute = (r) => {
        console.log('handleRoute');
        setRid(r.target.value);
    }

    const submitGetRouteById = (evt) => {
        // axios.get(`http://localhost:8082/route/getroutebyid/${route.routeid}`)
        // axios.get(`http://localhost:8082/viewRoute`)
        evt.preventDefault();
        console.log('submitGetRouteById');
        getRouteByIdService(routeid)
            .then((response) => { dispatch(getRouteById(response.data)) })
            .catch(() => {
                alert(`Route with ${routeid} not found.`);
            });
        console.log(Object.keys(routeList));
        setRid('');
    }

    const submitGetAllRoute = (evt) => {
        // axios.get(`http://localhost:8082/route/getallroute`)
        evt.preventDefault();
        console.log('submitGetAllRoutes');
        getAllRouteService()
            .then((response) => {
                dispatch(getAllRouteService(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }
      return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Route Component</h1>
            <p>Fetch data from backend, store it in redux store and get it to component</p>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find employee by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetRouteById}>
                    <input className="form-control mt-3" type="number" id="routeId" name="routeId" value={routeid} onChange={handleRoute} placeholder="Enter routeId to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Route" />
                </form>
                <p>Data from store: {routeDataFromStore.routeId} {routeDataFromStore.from} {routeDataFromStore.to}</p>
            </div>

            <div>
                <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find all route</p>
                    {/* <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllRoute} value="Find All Route" />
                        </form>
                    </div > */}
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>Rid</th>
                                <th>From</th>
                                <th>To</th>
                            </tr>
                        </thead>
                        <tbody>
                            {routeList.map((route, k) => {
                                return (
                                    <tr k={k}> <td>{route.routeId}</td>  <td>{route.from}</td> <td>{route.to}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Some other functionality</p>
            </div>



        </div>
    );
}
export default RouteData;