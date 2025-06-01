import { Card } from "@/app/components/Card/Card";
import GridOfCards from "@/app/components/GridOfCards/GridOfCards";

export default function FindNumber() {
  return (
    <div className="h-screen flex flex-col">
      <div className="container mx-auto p-4 flex-1 flex flex-col">
        <div className="flex-1 pb-4">
          <Card title="vienas" color="blue" />
        </div>
        <div className="flex-3 overflow-auto">
          <GridOfCards />
        </div>
      </div>
    </div>
  );
}
