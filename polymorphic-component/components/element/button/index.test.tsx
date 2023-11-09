import { expectTypeOf, test } from "vitest";
import Button from ".";
import Link from "next/link";

test("type check", () => {
  <Button variant="primary">hoge</Button>;
  <Button variant="primary" element={<Link href="/" />}>
    hoge
  </Button>;

  // @ts-expect-error cannot use the type attribute, when passing the element attribute
  <Button variant="primary" type="submit" element={<Link href="/" />}>
    hoge
  </Button>;
});
