export default function AssetIcon({
  ticker,
  color,
  size = 36,
}: {
  ticker: string;
  color: string;
  size?: number;
}) {
  return (
    <div
      className="flex items-center justify-center rounded-full font-semibold shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: `${color}22`,
        color,
        fontSize: size * 0.34,
      }}
    >
      {ticker.slice(0, 1)}
    </div>
  );
}
