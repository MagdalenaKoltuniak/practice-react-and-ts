import { useState } from 'react';
import { BillInput } from './BillInput';
import { Output } from './Output';
import { Reset } from './Reset';
import { SelectPercentage } from './SelectPercentage';

export function TipCalculator() {
  const [bill, setBill] = useState('');
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const tip = bill * (((yourTip + friendTip) / 2) / 100);

  const handleReset = () => {
    setBill(0);
    setYourTip(0);
    setFriendTip(0);
  };

  return (
    <div>
      <BillInput bill={bill} setBill={setBill}>How much was the bill?</BillInput>
      <SelectPercentage tip={yourTip} setTip={setYourTip}>How did you like the service?</SelectPercentage>
      <SelectPercentage tip={friendTip} setTip={setFriendTip}>How did your friend like the service?</SelectPercentage>


      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset handleReset={handleReset} />
        </>)}
    </div>
  );
}
