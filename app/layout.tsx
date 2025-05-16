import "./globals.scss";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <title>Min-Sehong Portfolio</title>
        <link rel="icon" href="/icons/github-logo.png"/>
      </head>
      <body style={{margin:0, overflowX:"hidden", width:"100vw"}}>
        {children}
      </body>
    </html>
  );
}
