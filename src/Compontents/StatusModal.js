import React from 'react';

const StatusModal = ({ attendance }) => {

    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="overflow-x-auto m-5">
                        <table className="table table-compact w-full">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(attendance).map((key, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{key}</td>
                                                <td>{attendance[key].status}</td>
                                            </tr>
                                        )
                                    }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatusModal;