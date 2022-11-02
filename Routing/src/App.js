import React from "react";
import BasicRouting from "./Components/Basic Routing/BasicRouting";
import LazyLoading from "./Components/Lazy Loading/LazyLoading";
import RouteParameters from "./Components/route-parameters/RouteParameters";
import RouteSecurity from "./Components/route-security/RouteSecurity";
import ResumeRoute from "./Components/RoutingResumeTask/ResumeRoute";
const App = () => {
  return (
    <>
      {/* <BasicRouting /> */}
      {/* <ResumeRoute /> */}
      {/* <RouteParameters /> */}
      {/* <LazyLoading/> */}
      <RouteSecurity/>
    </>
  );
};

export default App;
