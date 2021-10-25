import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service Added Successfully');
                    reset();
                }
            })
    };

    return (
        <div className="add-service">
            <h1>Add New Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="Service Name" />
                <textarea {...register("description")} placeholder="Service Description" />
                <input type="number" {...register("price")} placeholder="Service Price" />
                <input {...register("image")} placeholder="Service Image URL" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;