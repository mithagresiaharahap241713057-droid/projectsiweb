import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data'; // Langkah 1: Import fungsi

export default async function Page() {
  const revenue = await fetchRevenue(); // Langkah 2: Panggil fungsi

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card masih dikomentari sesuai langkah awal di dokumen[cite: 1] */}
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card title="Total Customers" value={numberOfCustomers} type="customers" /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* LANGKAH PENTING: Hapus komentar di bawah ini agar grafik muncul[cite: 1] */}
        <RevenueChart revenue={revenue} /> 
        
        {/* LatestInvoices dibiarkan dikomentari dulu sampai kamu masuk ke langkah berikutnya[cite: 1] */}
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}