"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center bg-white bg-[url('/8198.jpg')] bg-cover">
      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-2xl px-12 py-10 space-y-4 max-w-lg">
        <p className="text-sm font-semibold tracking-[0.3em] text-indigo-500">
          404
        </p>
        <h1 className="text-4xl font-bold text-gray-900">
          We couldn&apos;t find that page
        </h1>
        <p className="text-gray-600">
          The link may be broken or the page might have been removed. Check the
          URL or head back to the homepage.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="btn bg-indigo-600 text-white border-0 hover:bg-indigo-700"
          >
            Back to home
          </Link>
          <button
            type="button"
            onClick={() => typeof window !== "undefined" && window.history.back()}
            className="btn border-indigo-200 text-indigo-600 hover:border-indigo-400"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

