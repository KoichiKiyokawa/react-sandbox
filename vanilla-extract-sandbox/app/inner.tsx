"use client";

import { button } from "@/styles/recipes/button/button.css";
import Link from "next/link";
import { useState } from "react";

const variants = ["primary", "secondary"] as const;
type Variant = (typeof variants)[number];

export const Inner = () => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>("primary");
  console.log({ selectedVariant });
  const handleVariantChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setSelectedVariant(e.target.value as Variant);
  };

  return (
    <>
      {variants.map((v) => (
        <label key={v}>
          <input
            type="radio"
            name="variant"
            value={v}
            checked={v === selectedVariant}
            onChange={handleVariantChange}
          />
          {v}
        </label>
      ))}

      <Link href="/about" className={button({ variant: selectedVariant })}>
        about
      </Link>
    </>
  );
};
