import { createBrowserRouter } from "react-router-dom";
import AccountCreation from "../Layouts/AccountCreation";
import AttendanceTable from "../Pages/Attendance/AttendanceTable";
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
    },
    {
        path: '/attendance',
        element: <AttendanceTable />
    }
])

export default router;