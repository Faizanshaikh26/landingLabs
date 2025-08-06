import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function CustomAccordion({ items }) {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="space-y-4 ">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between text-left py-4 hover:text-primaryText transition-colors"
          >
            <span className="text-lg font-medium text-primaryText pr-8">{item.question}</span>
            <div className="flex-shrink-0">
              {openItems.includes(index) ? (
                <Minus className="w-5 h-5 text-primaryText transition-transform duration-200" />
              ) : (
                <Plus className="w-5 h-5 text-primaryText transition-transform duration-200" />
              )}
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openItems.includes(index) ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-secondaryText leading-relaxed pr-8 pt-2">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
