export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <head />
      <body>
        <p>this is the layout</p>
        {children}
      </body>
    </html>
  );
}
