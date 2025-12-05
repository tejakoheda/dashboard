// src/pages/DriverPages/AutoVerification.js
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useDriverContext } from "../../context/DriverContext";
import { glassTableStyles } from "./ManualVerification"; // Reuse styles
import "./drivers.css";

export default function AutoVerification() {
  const { drivers } = useDriverContext();
  const [searchTerm, setSearchTerm] = useState("");

  const autoDrivers = drivers.filter(
    (d) =>
      d.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.phone.includes(searchTerm)
  );

  const columns = [
    {
      name: "Driver Name",
      selector: (row) => `${row.firstName} ${row.lastName}`,
      sortable: true,
    },
    { name: "Mobile", selector: (row) => row.phone },
    {
      name: "DL Check",
      cell: (row) => (
        <span style={{ color: "#4ade80", fontWeight: "bold" }}>✔ Verified</span>
      ),
    },
    {
      name: "RC Check",
      cell: (row) => (
        <span style={{ color: "#4ade80", fontWeight: "bold" }}>✔ Verified</span>
      ),
    },
    {
      name: "Background",
      cell: (row) => (
        <span
          style={{
            color: row.status === "verified" ? "#4ade80" : "#fbbf24",
            fontWeight: "bold",
          }}
        >
          {row.status === "verified" ? "✔ Cleared" : "⟳ In Progress"}
        </span>
      ),
    },
    {
      name: "System Log",
      cell: (row) => (
        <span
          style={{
            fontSize: "0.75rem",
            padding: "4px 8px",
            borderRadius: "4px",
            background:
              row.status === "pending"
                ? "rgba(251, 191, 36, 0.1)"
                : "rgba(74, 222, 128, 0.1)",
            color: row.status === "pending" ? "#fbbf24" : "#4ade80",
            border: `1px solid ${
              row.status === "pending" ? "#fbbf24" : "#4ade80"
            }`,
          }}
        >
          {row.status === "pending" ? "Processing" : "Completed"}
        </span>
      ),
    },
  ];

  return (
    <div className="driver-page-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h2 className="page-title">Auto Verification Logs</h2>
        <div className="search-container" style={{ margin: 0 }}>
          <input
            type="text"
            placeholder="Search system logs..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="glass-table-card">
        <DataTable
          columns={columns}
          data={autoDrivers}
          pagination
          customStyles={glassTableStyles}
          highlightOnHover
          noDataComponent={
            <div style={{ padding: "20px", color: "#fff" }}>No logs found.</div>
          }
        />
      </div>
    </div>
  );
}
