import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-apollo';
import { ADD_BOOK_MUTATION } from '../queries'

export default function FormBook() {
    const { handleSubmit, register, errors } = useForm();
    const [addBook, {loading, error, data}] = useMutation(ADD_BOOK_MUTATION);
    const onSubmit = values => {
        console.log(values);
        addBook({
            variables: values
        })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <label>Name:</label>
            <input
                name="name"
                ref={register({ required: true })}
            />
            {errors.name && <div className = 'text-danger'>Your input is required</div>}
            <label>Author:</label>
            <input
                name="author"
                ref={register({ required: true })}
            />
            {errors.author && <div className = 'text-danger'>Your input is required</div>}
            <label>Description:</label>
            <input
                name="short_description"
                ref={register({ required: true })}
            />
            {errors.description && <div className = 'text-danger'>Your input is required</div>}
            <label>Price:</label>
            <input
                name="price"
                ref={register({ required: true, validate: value => !isNaN(value) })}
            />
            {errors.price && <div className = 'text-danger'>Your input is required and should be a number</div>}
            <label>Photo URL:</label>
            <input
                name="photo"
                ref={register({ required: true })}
            />
            {errors.photo && <div className = 'text-danger'>Your input is required</div>}
            <div>
                <button type="submit" className='btn btn-primary'>Submit</button>
            </div>
        </form>
    )
}
