import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        //implementing onChange handler for inputs and dropdown
        const { name, value } = evt.target;
        update(name, value)
    }

    const onSubmit = evt => {
        // implementing submit handler to attach to jsx
        // prevent default behavior of reloading automatically
        evt.preventDefault()

        submit()
    }

    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add Team Member</h2>
                <button disabled={!values.name || !values.email || !values.role}>Submit</button>
            </div>

            <div className='form-group inputs'>
                {/* ////// TEXT INPUTS ///////// */}
                <label>Name:&nbsp;
                    <input 
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        placeholder='type name'
                        maxLength='20'
                        type='text'
                    />
                </label>

                <label>Email:&nbsp;
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        placeholder='type email'
                        maxLength='30'
                        type='email'
                    />
                </label>

                {/* ///// DROPDOWN ///// */}
                <label>Role:&nbsp;
                    <select onChange={onChange} value={values.role} name='role'>
                        <option value=''>-- Select a Role--</option>
                        <option value='student'>Student</option>
                        <option value='alumni'>Alumni</option>
                        <option value='team_lead'>Team Lead</option>
                    </select>
                </label>
            </div>

        </form>
    )
}