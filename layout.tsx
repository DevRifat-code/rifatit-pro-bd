
export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin:0, fontFamily:'sans-serif', background:'#0b0f19', color:'#fff' }}>
        {children}
      </body>
    </html>
  );
}
