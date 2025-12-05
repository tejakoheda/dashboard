// src/pages/DriverPages/DriverList.js
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useDriverContext } from "../../context/DriverContext";
import { glassTableStyles } from "./ManualVerification"; // Reuse styles
import "./drivers.css";

export default function DriversPage() {
  const { drivers } = useDriverContext();
  const [searchTerm, setSearchTerm] = useState("");

  const verifiedDrivers = drivers.filter(
    (d) =>
      d.status === "verified" &&
      (d.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.phone.includes(searchTerm) ||
        (d.regNumber &&
          d.regNumber.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const columns = [
    {
      name: "Name",
      selector: (row) => `${row.firstName} ${row.lastName}`,
      sortable: true,
      grow: 1.5,
      allowOverflow: true,
      cell: (row) => (
        <div className="name-cell-container">
          <span
            className="driver-name-text"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            {row.firstName} {row.lastName}
          </span>
          <div className="hover-popup">
            <div className="popup-header">Driver Details</div>
            <p>
              <strong>Reg No:</strong> {row.regNumber}
            </p>
            <p>
              <strong>Mobile:</strong> {row.phone}
            </p>
            <p>
              <strong>Address:</strong> {row.city}
            </p>
          </div>
        </div>
      ),
    },
    { name: "Mobile", selector: (row) => row.phone },
    {
      name: "Vehicle",
      selector: (row) => row.vehicleType,
      cell: (row) => (
        <span>
          {row.vehicleType}{" "}
          <small style={{ color: "#94a3b8" }}>({row.regNumber})</small>
        </span>
      ),
    },
    { name: "City", selector: (row) => row.city, sortable: true },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <span
          style={{
            color: "#4ade80",
            fontWeight: "700",
            textTransform: "uppercase",
            fontSize: "0.75rem",
            background: "rgba(74, 222, 128, 0.1)",
            padding: "4px 8px",
            borderRadius: "6px",
            border: "1px solid rgba(74, 222, 128, 0.2)",
          }}
        >
          ● Active
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
        <h2 className="page-title">Verified Drivers List</h2>
        <div className="search-container" style={{ margin: 0 }}>
          <input
            type="text"
            placeholder="Search verified drivers..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="glass-table-card">
        <DataTable
          columns={columns}
          data={verifiedDrivers}
          pagination
          customStyles={glassTableStyles}
          highlightOnHover
          noDataComponent={
            <div style={{ padding: "20px", color: "#fff" }}>
              No verified drivers found.
            </div>
          }
        />
      </div>
    </div>
  );
}
