export const metadata = {
 title: "Detalles de producto",
 description: "Detalles de un producto",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
   <section>
    {children}
   </section>
 );
}
