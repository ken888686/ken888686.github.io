import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      <span className="absolute -left-48 -top-48 -z-10 h-[500px] w-[500px] rounded-full bg-orange-500 bg-opacity-20 blur-3xl" />
      <Navbar />
      <span className="absolute -bottom-48 -right-48 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500 bg-opacity-20 blur-3xl" />
    </main>
  );
}
