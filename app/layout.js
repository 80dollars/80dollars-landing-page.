export const metadata = {
  title: '80DOLLARS.COM | Premium Domain',
  description: 'Rare 8-character digital asset for sale',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* هذا السطر هو اللي راح يجيب الألوان والستايل فوراً */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-black m-0 p-0 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
