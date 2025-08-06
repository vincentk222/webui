"use client";
import { useEffect, useState } from "react";

export default function PdfViewer() {
  const [files, setFiles] = useState<string[]>([]);
  const [selected, setSelected] = useState("" );
  const [display, setDisplay] = useState("" );

  useEffect(() => {
    fetch("/api/pdfs")
      .then((res) => res.json())
      .then((data) => setFiles(data))
      .catch(() => setFiles([]));
  }, []);

  return (
    <div className="space-y-2 mb-6">
      <h1 className="text-black font-medium">PDF</h1>
      <div>
        <select
          className="border p-1 rounded w-full"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="" disabled>
            Sélectionnez un fichier
          </option>
          {files.map((file) => (
            <option key={file} value={file}>
              {file}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={() => setDisplay(selected)}
        disabled={!selected}
        className="bg-blue-500 text-white px-2 py-1 rounded disabled:opacity-50"
      >
        Afficher
      </button>
      {display && (
        <iframe
          src={`/pdf/${display}`}
          className="w-full h-64"
          title="PDF viewer"
        />
      )}
    </div>
  );
}
