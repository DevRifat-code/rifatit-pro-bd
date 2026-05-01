
"use client";

import { useState } from "react";

export default function Admin() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding:40 }}>
      <h2>Admin Panel</h2>

      <input
        placeholder="Product name"
        onChange={(e) => setName(e.target.value)}
        style={{ padding:10 }}
      />

      <button style={{ marginLeft:10 }}>Save</button>

      <p>Current: {name}</p>
    </div>
  );
}
