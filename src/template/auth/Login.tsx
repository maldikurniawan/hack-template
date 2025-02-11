import { MatrixRainingEffect } from "@/template"
import { useState } from "react";
import { TbEye, TbEyeOff, TbLoader2 } from "react-icons/tb"
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik";
import * as Yup from "yup";
import { ButtonLogin, TextField } from "@/components";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const [isShow, setIsShow] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema: Yup.object({
			username: Yup.string().required("Username harus diisi"),
			password: Yup.string().required("Password harus diisi"),
		}),
		onSubmit: (values) => {
			setLoading(true);
			setTimeout(() => {
				if (values.username === "admin" && values.password === "admin") {
					navigate("/");
				} else {
					alert("Username or Password is wrong!");
				}
				setLoading(false);
			}, 1000);
		},
	});

	return (
		<div className="relative overflow-hidden">
			<MatrixRainingEffect />
			<div className="relative w-screen h-screen overflow-hidden flex font-light">
				<div className="flex w-full items-center justify-center p-10">
					<div className="w-full md:w-96 h-fit p-10 bg-white/10 backdrop-blur-lg shadow-lg">
						<Link to={"/"} className="flex items-center mb-4">
							<img
								src="images/anonymous.png"
								alt="Logo Anonymous"
								className="w-20 h-20 rounded-full"
							/>
							<div className="text-xl text-[#0F0] font-bold text-center">
								Anonymous
							</div>
						</Link>
						<form onSubmit={formik.handleSubmit} className="space-y-4 text-[#0F0]">
							<TextField
								label="Username"
								id="username"
								name="username"
								type="text"
								placeholder="Username"
								color="lightGreen"
								value={formik.values.username}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.username && formik.errors.username}
							/>
							<div className="relative">
								<TextField
									label="Password"
									id="password"
									name="password"
									type={isShow ? "text" : "password"}
									placeholder="Password"
									color="lightGreen"
									value={formik.values.password}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.touched.password && formik.errors.password}
								/>
								<div
									className="absolute top-7 text-[#0F0] right-2 cursor-pointer"
									onClick={() => setIsShow(!isShow)}
								>
									{isShow ? <TbEyeOff size={24} /> : <TbEye size={24} />}
								</div>
							</div>
							<div className="pt-4">
								<ButtonLogin
									type="submit"
									disabled={loading}
								>
									{loading ? (
										<TbLoader2 size={20} className="animate-spin mx-auto" />
									) : (
										"Login"
									)}
								</ButtonLogin>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login