import { publicRoutes } from ".";

const routeGuard = async (props) => {
  const userData = true;
  let next = {
    isAllowed: true,
    newLocation: "/",
  };
  if (userData) {
    return next;
  } else {
    console.log(props.children.props.location.pathname);
    let actualPath = props.children.props.location.pathname.split("/");
    if(publicRoutes.includes(actualPath[1])){
      return next;
    }else{
      next.isAllowed = false
      return next;
    }
    
  }
};

export default routeGuard;
