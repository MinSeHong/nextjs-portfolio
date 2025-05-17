import "./globals.scss";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Min-Sehong Portfolio</title>
        <link rel="icon" href="/icons/github-logo.png"/>
      </head>
      <body style={{margin:0}}>
        {children}
      </body>
    </html>
  );
}
