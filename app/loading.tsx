export default function Loading() {
  return (
    <div className="flex w-screen items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-primary" />
      <span className="ml-4 text-lg text-muted-foreground">Loading...</span>
    </div>
  );
}
