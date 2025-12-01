// src/pages/ManualVerification.js
export default function ManualVerification() {
  return (
    <div className="dashboard-container">
      <h2 className="page-title">Manual Verification</h2>
      <div className="card p-4 glass-card">
        <p>Review documents and manually verify driver details here.</p>
        <div className="alert alert-info mt-3">
          No pending documents to verify.
        </div>
      </div>
    </div>
  );
}
