import { useState } from "react";
import "./Sidebar.css";

function Sidebar({ onSelectCategory }) {
  const categories = [
    { en: "Chatgaiya Mix Balachao", bn: "চাটগাইয়া মিক্স বালাচাও" },
    { en: "Dry Fish", bn: "শুকনো মাছ" },
    { en: "Shutki", bn: "শুটকি" },
    { en: "Balachao", bn: "বালাচাও" },
    { en: "Naga Balachao", bn: "নাগা বালাচাও" },
    { en: "Premium Balachao", bn: "প্রিমিয়াম বালাচাও" },
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
    onSelectCategory(updated);
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
              {cat.bn} - {cat.en}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
