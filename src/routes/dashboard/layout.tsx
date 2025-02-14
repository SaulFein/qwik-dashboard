// /src/routes/dashboard/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { SideNav } from "./sidenav";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchLatestInvoices, fetchRevenue } from "~/lib/data";

export const useFetchData = routeLoader$(async () => {
  return {
    revenue: await fetchRevenue(),
    latestInvoices: await fetchLatestInvoices(),
  };
});

export default component$(() => {
  return (
    <div class="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div class="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div class="flex-grow p-6 md:overflow-y-auto md:p-12">
        <Slot />
      </div>
    </div>
  );
});
