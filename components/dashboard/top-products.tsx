"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const products = [
  {
    name: "Premium Package",
    sales: 892,
    percentage: 85,
  },
  {
    name: "Basic Bundle",
    sales: 654,
    percentage: 65,
  },
  {
    name: "Starter Kit",
    sales: 543,
    percentage: 45,
  },
  {
    name: "Pro Subscription",
    sales: 432,
    percentage: 35,
  },
  {
    name: "Enterprise Plan",
    sales: 321,
    percentage: 25,
  },
]

export function TopProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {products.map((product) => (
            <div key={product.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-medium">{product.name}</p>
                <span className="text-sm text-muted-foreground">
                  {product.sales} sales
                </span>
              </div>
              <Progress value={product.percentage} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}