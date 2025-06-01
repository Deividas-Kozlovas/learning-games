import { Card } from "../Card/Card";

export default function GridOfCards() {
  const cards = Array.from({ length: 9 }, (_, i) => `Card ${i + 1}`);

  return (
    <div className="grid grid-cols-3 gap-3 h-full">
      {cards.map((title) => (
        <Card key={title} title={title} color="blue" />
      ))}
    </div>
  );
}
