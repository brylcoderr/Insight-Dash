"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Charts } from "@/components/dashboard/charts"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { TopProducts } from "@/components/dashboard/top-products"

const statsData = [
  {
    title: "Total Revenue",
    value: "$12,345",
    description: "Revenue this month",
    data: [
      { name: "1", value: 200 },
      { name: "2", value: 300 },
      { name: "3", value: 250 },
      { name: "4", value: 400 },
      { name: "5", value: 350 },
    ],
  },
  {
    title: "Active Users",
    value: "1,234",
    description: "Active users this week",
    data: [
      { name: "1", value: 100 },
      { name: "2", value: 200 },
      { name: "3", value: 150 },
      { name: "4", value: 300 },
      { name: "5", value: 250 },
    ],
  },
  {
    title: "Conversion Rate",
    value: "2.4%",
    description: "Conversions this month",
    data: [
      { name: "1", value: 1.2 },
      { name: "2", value: 2.1 },
      { name: "3", value: 1.8 },
      { name: "4", value: 2.4 },
      { name: "5", value: 2.2 },
    ],
  },
  {
    title: "Average Order Value",
    value: "$89.99",
    description: "Average per transaction",
    data: [
      { name: "1", value: 75 },
      { name: "2", value: 82 },
      { name: "3", value: 90 },
      { name: "4", value: 85 },
      { name: "5", value: 89 },
    ],
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {statsData.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
        <div className="grid gap-8 mb-8">
          <Charts />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <RecentActivity />
          <TopProducts />
        </div>
      </main>
      <Footer />
    </div>
  )
}