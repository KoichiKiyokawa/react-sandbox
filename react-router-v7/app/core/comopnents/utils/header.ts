type Age = `${number}s` | `${number}m` | `${number}h` | `${number}d`;
function ageToSeconds(age: Age): number {
  const unit = age[age.length - 1];
  const value = Number(age.slice(0, -1));
  switch (unit) {
    case "s":
      return value;
    case "m":
      return value * 60;
    case "h":
      return value * 60 * 60;
    case "d":
      return value * 60 * 60 * 24;
  }
  throw Error(`invalid age: ${age}`);
}

class HeaderBuilder {
  private headers: Record<string, string> = {};

  build() {
    return this.headers;
  }

  /**
   * @example
   * ```ts
   * export function headers() {
   *  return new HeadersBuilder().cacheControl({ maxAge: 3600 });
   * }
   * ```
   */
  cacheControl(
    arg:
      | { maxAge: Age }
      | { sMaxAge: Age }
      | { maxAge: Age; sMaxAge: Age }
      | "no-store"
  ) {
    const values: string[] = [];
    {
      if (arg === "no-store") values.push("no-store");
      else {
        if ("maxAge" in arg) values.push(`max-age=${ageToSeconds(arg.maxAge)}`);
        if ("sMaxAge" in arg)
          values.push(`s-maxage=${ageToSeconds(arg.sMaxAge)}`);
      }
    }

    this.append("Cache-Control", values.join(", "));
    return this;
  }

  append(name: string, value: string) {
    this.headers[name] = value;
    return this;
  }
}

new HeaderBuilder().cacheControl({ maxAge: "1m" });
