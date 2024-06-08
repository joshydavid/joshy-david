import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div className="flex w-screen items-center justify-center gap-4">
      <ClipLoader size="30" color="white" speedMultiplier={0.5} />{" "}
      <h2>Loading...</h2>
    </div>
  );
}
