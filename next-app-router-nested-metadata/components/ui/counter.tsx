import { atom, useRecoilState } from "recoil";

const counterAtom = atom({ key: "counter", default: 0 });

export function Counter() {
  const [count, setCount] = useRecoilState(counterAtom);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
