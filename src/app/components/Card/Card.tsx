type CardProps = {
  title: string;
  color: string; // e.g., "red", "blue", "green"
};

export function Card({ title, color }: CardProps) {
  return (
    <div
      className={`h-full w-full flex items-center justify-center border rounded-md shadow-sm bg-${color}-500 text-white`}
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h3>
    </div>
  );
}
