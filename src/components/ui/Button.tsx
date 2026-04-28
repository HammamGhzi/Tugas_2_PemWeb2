interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  className,
  onClick,
}) => {
  const baseStyle =
    "px-6 py-4 rounded-xl font-medium transition-all duration-500 cursor-pointer";

  if (variant === "outline") {
    return (
      <button
        onClick={onClick}
        className={`group relative overflow-hidden border border-red-900 text-red-900 hover:text-white ${baseStyle} ${className}`}
      >
        {/* Background animasi dari tengah */}
        <span className="absolute inset-0 bg-red-900 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 z-0" />
        {/* Teks */}
        <span className="relative z-10">{label}</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`bg-red-900 text-white hover:bg-red-800 ${baseStyle} ${className}`}
    >
      {label}
    </button>
  );
};
export default Button;