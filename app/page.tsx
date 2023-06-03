import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mb-10 py-20">
        <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />
        <h1 className="text-3xl mt-2 text-black font-bold mb-5">
          Welcome to the Amazon Web Scraper
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
