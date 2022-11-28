import { useQuery } from '@tanstack/react-query';

const Allusers = () => {

    const { data: allUsers = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/users?role=Buyer`)
            .then(res => res.json())
    })

    return (
        <div className="overflow-x-auto w-full my-5">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Buyer Name</th>
                        <th>email</th>
                        <th>Role</th>
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
                                    <button className="btn btn-ghost btn-xs btn-active">Delete</button>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Allusers;