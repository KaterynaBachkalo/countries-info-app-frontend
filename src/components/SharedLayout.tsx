import { Outlet } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import Loader from "./Loader";

import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchAvailableCountries } from "../redux/operations";

export const SharedLayout = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAvailableCountries());
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
      />
      <main>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
