import { createBrowserRouter } from "react-router-dom";
import AccountCreation from "../Layouts/AccountCreation";
import Contacts from "../Pages/Slots/Contacts";
import Name from "../Pages/Slots/Name";
import Password from "../Pages/Slots/Password";
import SignIn from "../Pages/Slots/SignIn";
import SignUp from "../Pages/Slots/SignUp";
const router = createBrowserRouter([
    {
        path: '/',
        element: <AccountCreation />,
        children: [

            {
                path: '/',
                element: <SignUp />,
                children: [
                    {
                        path: '/',
                        element: <Name />,
                    },
                    {
                        path: '/contacts',
                        element: <Contacts />,
                    },
                    {
                        path: '/password',
                        element: <Password />,
                    },
                ]
            },
            {
                path: '/login',
                element: <SignIn />
            }

        ]
    }
])

export default router;