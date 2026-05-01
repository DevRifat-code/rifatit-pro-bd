"use client";

import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#0b0f19", color: "#fff" }}>
      <header style={{
        background: "#1a1f2e",
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #2a2f3e"
      }}>
        <h1 style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>Admin Panel</h1>
        
        <nav style={{ display: "flex", gap: "24px" }}>
          <Link href="/admin" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>
            Dashboard
          </Link>
          <Link href="/admin/products" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px" }}>
            Products
          </Link>
          <Link href="/admin/orders" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px" }}>
            Orders
          </Link>
          <Link href="/admin/users" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px" }}>
            Users
          </Link>
          <Link href="/admin/settings" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px" }}>
            Settings
          </Link>
        </nav>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <span style={{ fontSize: "14px", color: "#aaa" }}>Admin</span>
          <button style={{
            padding: "8px 16px",
            background: "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px"
          }}>
            Logout
          </button>
        </div>
      </header>

      <main style={{ padding: "32px" }}>
        {children}
      </main>
    </div>
  );
}
