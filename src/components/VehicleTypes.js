// src/components/VehicleTypes.js
export default function VehicleTypes() {
  const types = [
    { name: "Auto", emoji: "🛺", value: 999 },
    { name: "Bike", emoji: "🏍️", value: 999 },
    { name: "Mini", emoji: "🚗", value: 999 },
    { name: "Prime", emoji: "🚘", value: 999 },
    { name: "EV Car", emoji: "🔋🚙", value: 999 },
    { name: "EV Bike", emoji: "🔋🏍️", value: 999 },
  ];

  return (
    <div className="vehicle-types-card glass-card">
      <h3 className="section-title">Vehicle Types</h3>

      <div className="vehicle-grid">
        {types.map((t) => (
          <div key={t.name} className="vehicle-item">
            <span className="vehicle-emoji">
              <b>{t.emoji}</b>
            </span>
            <span className="vehicle-name">
              <b>{t.name}</b>
            </span>
            <br />
            <span className="vehicle-value">{t.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
