import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Deletemodal from '../../Shared/Deletemodal/Deletemodal';

const Allsellars = () => {

    const [deleteModal, setDeleteModal] = useState(null)
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/users?role=Sellar`)
            .then(res => res.json())
    })

    const handleCancel = () => {
        setDeleteModal(null)
    }

    const handleDelete = user => {
        console.log(user._id);
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    refetch()
                    toast.success('delete succesfully')
                }
            })
    }

    return (
        <div>
            <h2 className='text-center font-bold text-3xl underline my-10'>All Sellar</h2>
            <div className="overflow-x-auto w-full my-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sellar Name</th>
                            <th>Phone name</th>
                            <th>Role</th>
                            <th>verified</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((user, i) =>
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs btn-active">verified</button>
                                    </th>
                                    <th>
                                        <label htmlFor="confarmetion-modal" onClick={() => setDeleteModal(user)} className="btn btn-ghost btn-xs btn-active">Delete</label>

                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteModal &&
                <Deletemodal
                    title={'Are you sue you want to delete?'}
                    message={`if you delete ${deleteModal.name} it cannot be undone`}
                    handleCancel={handleCancel}
                    handleDelete={handleDelete}
                    deleteModal={deleteModal}
                ></Deletemodal>
            }
        </div>
    );
};

export default Allsellars;