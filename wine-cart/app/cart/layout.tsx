import { FooterContent, HeaderContent, HeaderContent2 } from '@/components';

export const metadata = {
  title: 'Wine Store',
  description: 'Generated by 20194884',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HeaderContent2 />
        {children}
        <FooterContent />
      </body>
    </html>
  );
}
