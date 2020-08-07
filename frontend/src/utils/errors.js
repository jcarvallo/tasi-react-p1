import { navigate } from "@reach/router";
export const handleError = (e) =>
         navigate("/error", {
           state: {
             error:
               e.response && e.response.data.error
                 ? e.response.data.error
                 : "Ups algo salio mal",
           },
         });
