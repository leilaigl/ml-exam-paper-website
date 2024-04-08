"use client";
import { useParams } from "next/navigation";
import Navigation from "../../components/Navigation";

export default function PdfId() {
  const params = useParams();

  return (
    <main className="flex min-h-screen">
      <Navigation activePage="/predicted-papers" />
      <div className="flex flex-col flex-1 m-8 justify-center gap-y-5">
        <iframe src={`/papers/${params.pdfId}`} className="h-full">
          Your browser does not support PDFs.
        </iframe>
      </div>
    </main>
  );
}
