export function Output({ bill, tip }) {
  return (
    <h3>You pay ${bill + tip} (${bill} + ${tip.toFixed(2)} tip)</h3>
  );
}
