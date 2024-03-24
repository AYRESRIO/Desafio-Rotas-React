import { Outlet } from "react-router-dom";
import ListProducts from "../../../components/ListProducts";
export default function Products() {
  return (
    <>
      <div>
        <ListProducts />
        <Outlet />
      </div>
    </>
  );
}
