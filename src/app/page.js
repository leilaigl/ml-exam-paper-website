import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Navigation activePage="/" />
      <div className="flex flex-col flex-1 m-8 justify-center gap-y-5">
      </div>
    </main>
  );
}
