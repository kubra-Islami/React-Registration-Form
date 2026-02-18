import {useState} from "react";
import {useForm} from 'react-hook-form';
import {registerSchema} from '../registerSchema.js';
import {yupResolver} from "@hookform/resolvers/yup";
import "./register.css";

export default function RegisterForm() {
    const [success, setSuccess] = useState(false);

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
        <div className="register-container">
            <div className="register-form-section">
                <div className="form-card">
                    <h2>Create Account</h2>
                    <p className="subtitle">Join us and start your journey today</p>

                    {success && (
                        <div className="success-message">
                            Registration Successful!
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" {...register("fullName")} />
                            <p className="error">{errors.fullName?.message}</p>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" {...register("email")} />
                            <p className="error">{errors.email?.message}</p>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" {...register("password")} />
                            <p className="error">{errors.password?.message}</p>
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" {...register("confirmPassword")} />
                            <p className="error">{errors.confirmPassword?.message}</p>
                        </div>

                        <div className="checkbox-group">
                            <input type="checkbox" {...register("terms")} />
                            <span>I agree to the Terms & Conditions</span>
                        </div>
                        <p className="error">{errors.terms?.message}</p>

                        <button type="submit" className="submit-btn">
                            Register
                        </button>

                    </form>
                </div>
            </div>

            <div className="register-image-section">
                <div className="overlay">
                    <h1>Welcome Back</h1>
                    <p>Build modern applications with confidence.</p>
                </div>
            </div>
        </div>
    );
}

