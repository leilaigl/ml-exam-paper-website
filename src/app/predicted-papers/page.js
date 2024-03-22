import Navigation from ".././components/Navigation";

export default function PredictedPapers() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="fixed left-0 top-0 h-full z-50">
        <Navigation />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        Predicted Papers
      </div>
    </main>
  );
}
