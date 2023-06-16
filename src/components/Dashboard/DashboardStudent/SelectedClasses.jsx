import React from 'react';
import useStudent from '../../../hooks/useStudent';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';

const SelectedClasses = () => {
    useTitle('Selected Class')

    const [isStudent, , refetch] = useStudent();

    const handleDeleteLecture = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://summer-camp-server-tau-three.vercel.app/classes-cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <section className='mt-20'>
            <div className="overflow-x-auto mx-40 min-h-screen">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className='text-center font-semibold uppercase'>Lecture Name</th>
                            <th className='text-center font-semibold uppercase'>Instructor</th>
                            <th className='text-center font-semibold uppercase'>Delete</th>
                            <th className='text-center font-semibold uppercase'>Pay</th>
                        </tr>
                    </thead>
                    <tbody className='items-center'>
                        {
                            isStudent?.map((s, index) =>
                                <tr key={s._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td className='text-center font-semibold'>
                                        {s.lecture.name}
                                    </td>
                                    <td className='text-center font-semibold'>
                                        {s.lecture.instructor}
                                    </td>
                                    <td className='text-center'>
                                        <button onClick={() => handleDeleteLecture(s._id)} className='btn text-white bg-red-600 hover:bg-red-700'><FaTrashAlt /></button>
                                    </td>
                                    <td className='text-center'>
                                        <Link
                                            to={{
                                                pathname: `/dashboard/studentClasses/pay/${s._id}`,
                                            }}
                                        >
                                            <button className='btn text-white bg-green-500 hover:bg-green-600' >Pay</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default SelectedClasses;