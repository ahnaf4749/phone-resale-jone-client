import { useQuery } from '@tanstack/react-query';

const Allsellars = () => {

    const { data: allUsers = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/users?role=Sellar`)
            .then(res => res.json())
    })

    const handleDelete = id => {
        console.log(id);
    }

    return (
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
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs btn-active">Delete</button>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Allsellars;