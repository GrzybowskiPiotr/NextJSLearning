import { fetchCardData } from '../lib/data';
import { Card } from '../ui/dashboard/cards';

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    totalPendingInvoices,
    totalPaidInvoices,
    numberOfCustomers,
  } = await fetchCardData();
  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Totla Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}
