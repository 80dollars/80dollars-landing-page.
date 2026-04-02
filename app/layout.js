export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* هذا الرابط سيقوم بتحويل الروابط الزرقاء إلى التصميم الذهبي المنظم */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
