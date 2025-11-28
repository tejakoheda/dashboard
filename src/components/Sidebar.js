// src/components/Sidebar.js
import React from "react";

/**
 * Simple fixed sidebar with a single "Home" item.
 * Props:
 *  - onNavigate(name) optional callback when user clicks an item
 */
export default function Sidebar({ onNavigate }) {
  const go = (name) => {
    if (typeof onNavigate === "function") onNavigate(name);
    else {
      // fallback: update hash so you can read it (or later wire react-router)
      window.location.hash = name === "home" ? "#/" : `#/${name}`;
    }
  };

  return (
    <nav className="sidebar d-none d-md-block" aria-label="Main sidebar">
      <div className="sidebar-inner">
        <ul className="sidebar-list list-unstyled">
          <li className="sidebar-item">
            <button
              className="sidebar-link btn-plain"
              onClick={() => go("home")}
              aria-current={
                window.location.hash === "#/" || window.location.hash === ""
                  ? "true"
                  : "false"
              }
            >
              <span className="sidebar-icon" aria-hidden>
                🏠
              </span>
              <span className="sidebar-text">Dashboard</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
