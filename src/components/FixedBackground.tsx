"use client";

export default function FixedBackground() {
  return (
    <>
      <div className="min-h-screen w-full bg-transparent fixed -z-10">
        <div className="fixedGridGradient" />
      </div>
      <div className="min-h-svh w-full bg-gray-9 fixed -z-20 dark:bg-gray-10">
        <div className="fixedRadialGradient" />
      </div>
    </>
  );
}
