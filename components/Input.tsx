"use client";

export default function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
  disabled = false,
}: any) {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
}
