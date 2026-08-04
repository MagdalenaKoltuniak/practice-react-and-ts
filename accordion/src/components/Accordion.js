import {useState}  from 'react';
import AccordionItem from "./AccordionItem";

export default function Accordion({faqs}) {
  const [curOpen, setCurOpen] = useState(null);

  return <div className="accordion">
    {faqs.map((faq, index) => (
      <AccordionItem 
        key={faq.title} 
        num={index} 
        title={faq.title} 
        curOpen={curOpen} 
        onOpen={setCurOpen}>{faq.text}</AccordionItem>
    ))}
  </div>;
}
