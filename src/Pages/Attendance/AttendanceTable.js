import React, { useState } from 'react';
import logo from '../../Assets/Logo/ultimate hrm logo-05-02 2.png';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Compontents/Loading';
import StatusModal from '../../Compontents/StatusModal';

const AttendanceTable = () => {
    const [attendance, setAttendance] = useState(null);
    const { data, isLoading } = useQuery({
        queryKey: ['test'],
        queryFn: async () => {
            const res = await fetch('https://test.nexisltd.com/test', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('Access_Token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    console.log(data);
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <img src={logo} className='mt-12 ml-14' alt="" />
            <h2 className='bg-[#1678CB] text-4xl text-white w-[480px] mx-auto px-14 py-4 rounded'>Attendance information</h2>
            <div className="overflow-x-auto mx-auto w-9/12 mt-20">
                <table className="table w-full">
                    <thead>
                        <tr className='bg-white'>
                            {/* <th>Profile</th> */}
                            <th>Brance</th>
                            <th>Employee Name</th>
                            <th>position</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(data).map(key => {
                                return (
                                    <tr key={key}>
                                        {/* <td>
                                            <div className="avatar">
                                                <div className="w-12 mask mask-squircle">
                                                    <img src={data[key].profile_pic} alt='profile_Photo' />
                                                </div>
                                            </div>
                                        </td> */}
                                        <td>{data[key].branch}</td>
                                        <td>{data[key].name}</td>
                                        <td>{data[key].position}</td>
                                        <td>
                                            <label onClick={() => setAttendance(data[key].attendance)} htmlFor="my-modal-3" className="btn btn-sm btn-info">open status</label>
                                        </td>
                                    </tr>
                                )
                            }
                            )
                        }


                    </tbody>
                </table>
            </div>
            {attendance && <StatusModal attendance={attendance} />}
        </div>
    );
};

export default AttendanceTable;