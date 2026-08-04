export function BillInput({ bill, setBill, children }) {
  return (
    <div>
        <label htmlFor="bill">{children}</label>
        <input id='bill' type='text' placeholder="Bill value" value={bill} onChange={e => setBill(Number(e.target.value))}/>
    </div>
  );
}