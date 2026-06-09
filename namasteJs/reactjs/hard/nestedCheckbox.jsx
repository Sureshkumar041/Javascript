import { useState } from "react";
import "./styles.css";

const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

const Checkboxes = ({ data, handleChange, selectedItem }) => {
  return (
    <div>
      {data.map((p, pi) => (
        <div key={pi}>
          <div
            style={{
              display: "flex",
              alignItem: "center",
              gap: "2px",
              padding: "4px",
            }}
          >
            <input
              type="checkbox"
              checked={
                selectedItem.filter((si) => si.id === p.id).length
                  ? true
                  : false
              }
              onChange={() => {
                handleChange({
                  id: p.id,
                });
              }}
            ></input>
            <span>{p.label}</span>
          </div>
          {p.children && p.children.length > 0 && (
            <div style={{ marginLeft: "20px" }}>
              <Checkboxes
                data={p.children}
                handleChange={handleChange}
                selectedItem={selectedItem}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function NestedCheckbox() {
  const [selectedItem, setSelectedItem] = useState([]);

  const handleChange = (val) => {
    const exists = selectedItem.some((e) => e.id === val.id);

    if (exists) {
      setSelectedItem(selectedItem.filter((e) => e.id !== val.id));
    } else {
      setSelectedItem([...selectedItem, val]);
    }
  };

  return (
    <div>
      <h2>Nested Checkbox</h2>
      <Checkboxes
        data={CheckboxesData}
        handleChange={handleChange}
        selectedItem={selectedItem}
      />
    </div>
  );
}
