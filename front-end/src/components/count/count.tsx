import useCountStore from "../../store/count/useCountStore";

export function Count() {
  const { count, increment } = useCountStore();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Click me</button>
    </div>
  );
}
