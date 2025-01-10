import React from "react";

interface TextFieldPageProps {
	label: string;
	id: string;
	name: string;
	type: string;
	placeholder: string;
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	onBlur: React.FocusEventHandler<HTMLInputElement>;
	error: string | boolean | undefined;
	required?: boolean;
}

const TextFieldPage: React.FC<TextFieldPageProps> = ({
	label,
	id,
	name,
	type,
	placeholder,
	value,
	onChange,
	onBlur,
	error,
	required = false,
}) => {
	return (
		<div className="flex flex-col">
			<label htmlFor={id} className="text-green-600 font-normal tracking-wide text-sm">
				{label}
				{required && <span className="text-red-500">*</span>}
			</label>
			<input
				id={id}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				className={`p-2 px-2 border ${error ? "border-red-500" : "border-green-900"
					} text-sm bg-transparent text-white focus:outline-none focus:ring-1 focus:ring-green-900 focus:border-none transition-colors`}
			/>
			{error && <div className="text-red-500 text-sm">{error}</div>}
		</div>
	);
};

export default TextFieldPage;