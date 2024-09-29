'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Folder, Home, BarChart2, FileText, Settings, ChevronRight } from "lucide-react"

export default function ProductManagement() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <div className="bg-teal-600 text-white p-2 rounded-md">
            <span className="font-bold">lemon</span>
            <span className="ml-1">inc.</span>
          </div>
        </div>
        <nav className="mt-6">
          {[
            { name: "Home", icon: Home },
            { name: "Stores", icon: Folder },
            { name: "Products", icon: Folder, active: true },
            { name: "Catalogue", icon: FileText },
            { name: "Promotions", icon: BarChart2 },
            { name: "Reports", icon: BarChart2 },
            { name: "Docs", icon: FileText },
            { name: "Settings", icon: Settings },
          ].map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center px-6 py-3 text-gray-500 hover:bg-gray-100 ${
                item.active ? "bg-blue-50 text-blue-600" : ""
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
            <div className="flex space-x-2">
              <Button variant="outline">Add Category</Button>
              <Button>Add Product</Button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Shoes Category */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Shoes</h2>
                <div className="space-y-4">
                  {[
                    { name: "Nike Air Jordan", price: "₹12,000", brand: "Nike" },
                    { name: "Nike Dunk Low", price: "₹8,000", brand: "Nike" },
                  ].map((product) => (
                    <div key={product.name} className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                      <div>
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.price}</p>
                        <p className="text-xs text-blue-500">{product.brand}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* T-shirt Category */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">T-shirt</h2>
                {/* Add T-shirt products here if needed */}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {/* User Profile */}
      <div className="absolute bottom-4 left-4">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="Andy Samberg" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Andy Samberg</p>
            <p className="text-xs text-gray-500">andy.samberg@mail.com</p>
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  )
}