import {useForm} from 'react-hook-form';
import {registerSchema} from '../registerSchema.js';
import {yupResolver} from "@hookform/resolvers/yup";

export default function RegisterForm() {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
    } = useForm({
        resolver: yupResolver(registerSchema),
        modeL: "onTouched"
    })
    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };
    return (
        <div
            style={styles.container}>
            <h2 style={{textAlign: 'center', marginBottom: 20}}>Create Account</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div style={{marginBottom: 15}}>
                    <input
                        placeholder="Full Name"
                        {...register('fullName')}
                        style={inputStyle}
                    />
                    {errors.fullName && <p style={errorStyle}>{errors.fullName.message}</p>}
                </div>

                {/* Email */}
                <div style={{marginBottom: 15}}>
                    <input
                        placeholder="Email"
                        {...register('email')}
                        style={inputStyle}
                    />
                    {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div style={{marginBottom: 15}}>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register('password')}
                        style={inputStyle}
                    />
                    {errors.password && (
                        <p style={errorStyle}>{errors.password.message}</p>
                    )}
                </div>

                {/* Confirm Password */}
                <div style={{marginBottom: 20}}>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        {...register('confirmPassword')}
                        style={inputStyle}
                    />
                    {errors.confirmPassword && (
                        <p style={errorStyle}>{errors.confirmPassword.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    style={buttonStyle}
                >
                    Register
                </button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "400px",
        margin: "50px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        fontFamily: "Arial",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    field: {
        marginBottom: "15px",
        display: "flex",
        flexDirection: "column",
    },
    checkboxField: {
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    error: {
        color: "red",
        fontSize: "14px",
        marginTop: "5px",
    },
    success: {
        color: "green",
        fontWeight: "bold",
        marginBottom: "15px",
    },
    button: {
        padding: "10px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};
const inputStyle = {
    width: '80%',
    padding: 10,
    borderRadius: 8,
    border: '1px solid #ddd',
};
const buttonStyle = {
    width: '90%',
    padding: 12,
    borderRadius: 8,
    border: 'none',
    background: '#4f46e5',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
}
const errorStyle = {
    color: 'red',
    fontSize: 13,
    margin: "5px 0 0 30px",
    display: 'flex',
};
