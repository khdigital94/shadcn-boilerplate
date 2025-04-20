import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Error } from "./pages/Error";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
	},
]);
