import AccordionItem from "./AccordionItem";

export default function Accordion({faqs}) {
  return <div className="accordion">
    {faqs.map((faq, index) => (
      <AccordionItem key={faq.title} num={index} title={faq.title} text={faq.text}/>
    ))}
  </div>;
}
