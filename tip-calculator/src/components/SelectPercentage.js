export function SelectPercentage({ tip, setTip, children }) {
  return (
    <div>
      <label htmlFor="percentage">{children}</label>
      <select id="percentage" value={tip} onChange={e => setTip(Number(e.target.value))}>
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
