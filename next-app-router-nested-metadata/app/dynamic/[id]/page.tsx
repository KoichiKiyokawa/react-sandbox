"use client";

export default function DynamicPage({ params }: { params: { id: string } }) {
  return <h1>Dynamic Page {params.id}</h1>;
}
