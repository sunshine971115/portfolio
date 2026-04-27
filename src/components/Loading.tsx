const Loading = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="flex h-16 items-center gap-2">
      <span className="h-3 w-5 rounded bg-accent animate-wave-1" />
      <span className="h-3 w-5 rounded bg-accent animate-wave-2" />
      <span className="h-3 w-5 rounded bg-accent animate-wave-3" />
      <span className="h-3 w-5 rounded bg-accent animate-wave-4" />
    </div>
  </div>
);

export default Loading;
