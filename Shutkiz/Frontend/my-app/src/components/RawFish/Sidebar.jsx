import { useState } from "react";
import "./Sidebar.css";

function Sidebar({ onSelectCategory }) {
  const categories = [
    { en: "Pomfret", bn: "রূপচাঁদা" },
    { en: "Lakka Fish", bn: "লাক্ষা মাছ" },
    { en: "Salmon Fish", bn: "টাইলা মাছ" },
    { en: "Lal Poa", bn: "লাল পোয়া" },
    { en: "Datina Fish", bn: "দাতিনা মাছ" },
    { en: "Red Snapper Fish", bn: "লাল কোরাল মাছ" },
    { en: "Kalo Chanda Fish", bn: "কালো চাঁদা" },
  ];

  const [selected, setSelected] = useState([]);

  const toggleCategory = (cat) => {
    let updated;
    if (selected.includes(cat.en)) {
      updated = selected.filter(c => c !== cat.en);
    } else {
      updated = [...selected, cat.en];
    }
    setSelected(updated);
    onSelectCategory(updated); // pass selected categories up
  };

  return (
    <aside className="sidebar">
      <h3>Categories</h3>
      <ul>
        {categories.map((cat, i) => (
          <li key={i}>
            <label>
              <input
                type="checkbox"
                checked={selected.includes(cat.en)}
                onChange={() => toggleCategory(cat)}
              />
              {cat.en} ({cat.bn})
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
