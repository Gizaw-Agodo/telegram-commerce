import { DashboardHeader } from "@/features/shop/dashboard/components/dashboardHeader";
import { ManagementGrid } from "@/features/shop/dashboard/components/managementGrid";
import { StatsGrid } from "@/features/shop/dashboard/components/statGrid";
import { mockShops } from "@/mock/mockShops";
import { notFound } from "next/navigation";


interface ShopDashboardPageProps {
  params: Promise<{ slug: string;}>;
}

export default async function ShopDashboardPage({ params}: ShopDashboardPageProps) {
  const { slug } = await params;

  const shop = mockShops.find(
    (shop) => shop.slug === slug
  );

  if (!shop) {
    notFound();
  }

  return (
    <main className="container mx-auto max-w-5xl space-y-8 px-4 py-6">
      <DashboardHeader shop={shop} />
      <StatsGrid/>
      <ManagementGrid shopSlug={shop.slug} />
    </main>
  );
}