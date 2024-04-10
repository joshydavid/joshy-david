interface PingProps {
  bgColor?: string;
}

export default function Ping({ bgColor = "bg-green" }: PingProps) {
  return (
    <span className="relative flex h-3 w-3">
      <span
        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${bgColor}`}
      ></span>
      <span
        className={`relative inline-flex rounded-full h-3 w-3 ${bgColor}`}
      ></span>
    </span>
  );
}
