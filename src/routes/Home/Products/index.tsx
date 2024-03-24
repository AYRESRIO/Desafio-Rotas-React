
import { Outlet } from "react-router-dom";
import ListProducts from "../../../components/ListProducts";
export default function Products() {
  return (
    <>
     <ListProducts/>
     <Outlet/>
    </>
  );
}
