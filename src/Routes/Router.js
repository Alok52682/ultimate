import { createBrowserRouter } from "react-router-dom";
import AccountCreation from "../Layouts/AccountCreation";
import Contacts from "../Pages/Slots/Contacts";
import Name from "../Pages/Slots/Name";
const router = createBrowserRouter([
    {
        path: '/',
        element: <AccountCreation />,
        children: [
            {
                path: '/',
                element: <Name />,
            },
            {
                path: '/contacts',
                element: <Contacts />,
            },
        ]
    }
])

export default router;