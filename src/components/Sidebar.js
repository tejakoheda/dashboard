// src/components/Sidebar.js
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // State to manage the open/close status of the Drivers dropdown
  const [isDriversOpen, setDriversOpen] = useState(false);

  // Automatically open the dropdown if we are on a drivers sub-page
  useEffect(() => {
    if (location.pathname.startsWith("/drivers")) {
      setDriversOpen(true);
    }
  }, [location.pathname]);

  const go = (path) => {
    navigate(path);
  };

  const toggleDrivers = () => {
    setDriversOpen(!isDriversOpen);
  };

  return (
    <nav className="sidebar d-none d-md-block" aria-label="Main sidebar">
      <div className="sidebar-inner">
        <ul className="sidebar-list list-unstyled">
          {/* Dashboard Link */}
          <li className="sidebar-item">
            <button
              className="sidebar-link btn-plain"
              onClick={() => go("/")}
              aria-current={location.pathname === "/" ? "true" : "false"}
            >
              <span className="sidebar-icon" aria-hidden>
                🏠
              </span>
              <span className="sidebar-text">Dashboard</span>
            </button>
          </li>

          {/* Drivers Dropdown Trigger */}
          <li className="sidebar-item">
            <button
              className="sidebar-link btn-plain"
              onClick={toggleDrivers}
              aria-expanded={isDriversOpen}
              aria-current={
                location.pathname.startsWith("/drivers") ? "true" : "false"
              }
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flex: 1,
                }}
              >
                <span className="sidebar-icon" aria-hidden>
                  👨‍✈️
                </span>
                <span className="sidebar-text">Drivers Management</span>
              </div>
              <span className={`dropdown-arrow ${isDriversOpen ? "open" : ""}`}>
                ▼
              </span>
            </button>

            {/* Dropdown Menu */}
            {isDriversOpen && (
              <ul className="sidebar-submenu list-unstyled">
                <li>
                  <button
                    className={`submenu-link ${
                      location.pathname === "/drivers" ? "active" : ""
                    }`}
                    onClick={() => go("/drivers")}
                  >
                    Drivers List
                  </button>
                </li>
                <li>
                  <button
                    className={`submenu-link ${
                      location.pathname === "/drivers/onboarding"
                        ? "active"
                        : ""
                    }`}
                    onClick={() => go("/drivers/onboarding")}
                  >
                    Driver Onboarding
                  </button>
                </li>
                <li>
                  <button
                    className={`submenu-link ${
                      location.pathname === "/drivers/manual-verification"
                        ? "active"
                        : ""
                    }`}
                    onClick={() => go("/drivers/manual-verification")}
                  >
                    Manual Verification
                  </button>
                </li>
                <li>
                  <button
                    className={`submenu-link ${
                      location.pathname === "/drivers/auto-verification"
                        ? "active"
                        : ""
                    }`}
                    onClick={() => go("/drivers/auto-verification")}
                  >
                    Auto Verifications
                  </button>
                </li>
                <li>
                  <button
                    className={`submenu-link ${
                      location.pathname === "/drivers/feedback" ? "active" : ""
                    }`}
                    onClick={() => go("/drivers/feedback")}
                  >
                    Driver Feedback
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
