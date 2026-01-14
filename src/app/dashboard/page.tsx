"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  User, 
  Settings, 
  Package, 
  Heart, 
  LogOut, 
  ChevronRight,
  Shield,
  Bell,
  CreditCard,
  MapPin,
  Clock
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const menuItems = [
    { id: "profile", title: "My Profile", icon: <User size={20} />, description: "Manage your personal information and preferences." },
    { id: "orders", title: "My Orders", icon: <Package size={20} />, description: "Track your shop orders and service history." },
    { id: "wishlist", title: "Wishlist", icon: <Heart size={20} />, description: "View your saved configurations and lifestyle items." },
    { id: "settings", title: "Settings", icon: <Settings size={20} />, description: "Update your account security and notification settings." },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-white/10 bg-zinc-900/30">
                <h3 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
                  <User size={18} className="text-porsche-red" />
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block mb-1">Full Name</label>
                    <p className="text-lg font-medium">Alexander Porsche</p>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block mb-1">Email Address</label>
                    <p className="text-lg font-medium">alexander@porsche-enthusiast.com</p>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block mb-1">Phone</label>
                    <p className="text-lg font-medium">+49 711 911-0</p>
                  </div>
                </div>
                <button className="mt-8 text-xs uppercase tracking-widest font-bold text-porsche-red hover:text-white transition-colors">Edit Profile</button>
              </div>
              <div className="p-8 border border-white/10 bg-zinc-900/30">
                <h3 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
                  <MapPin size={18} className="text-porsche-red" />
                  Primary Address
                </h3>
                <div className="space-y-4 text-zinc-400">
                  <p>Porscheplatz 1</p>
                  <p>70435 Stuttgart</p>
                  <p>Germany</p>
                </div>
                <button className="mt-8 text-xs uppercase tracking-widest font-bold text-porsche-red hover:text-white transition-colors">Manage Addresses</button>
              </div>
            </div>
          </div>
        );
      case "orders":
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {[
              { id: "ORD-911-GT3", date: "Oct 24, 2023", status: "Delivered", total: "$120.00", item: "911 Turbo S Model Car" },
              { id: "SRV-4592", date: "Aug 12, 2023", status: "Completed", total: "$850.00", item: "Annual Maintenance - 911 Carrera" }
            ].map((order) => (
              <div key={order.id} className="p-6 border border-white/10 bg-zinc-900/30 flex flex-wrap items-center justify-between gap-6 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center">
                    <Package size={20} className="text-porsche-red" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">{order.id}</p>
                    <p className="font-bold uppercase">{order.item}</p>
                  </div>
                </div>
                <div className="text-right sm:text-left">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Date</p>
                  <p className="text-sm">{order.date}</p>
                </div>
                <div className="text-right sm:text-left">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Status</p>
                  <span className="text-[10px] px-2 py-1 bg-green-500/10 text-green-500 uppercase font-bold tracking-tighter">
                    {order.status}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">{order.total}</p>
                  <button className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-white">View Details</button>
                </div>
              </div>
            ))}
          </div>
        );
      case "wishlist":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="group relative aspect-video overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                alt="Saved Config"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
                <p className="text-[10px] uppercase tracking-[0.2em] text-porsche-red font-bold mb-2">Saved Configuration</p>
                <h3 className="text-2xl font-bold uppercase">911 Carrera GTS</h3>
                <button className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-porsche-red transition-colors">
                  Resume Building <ChevronRight size={14} />
                </button>
              </div>
            </div>
            <div className="p-8 border border-white/10 bg-zinc-900/30 flex flex-col justify-center items-center text-center">
              <Heart size={32} className="text-zinc-700 mb-4" />
              <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Your lifestyle wishlist is empty</p>
              <Link href="/shop" className="mt-6 text-xs uppercase tracking-widest font-bold text-porsche-red underline">Go to Shop</Link>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="max-w-2xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-6">
              <h3 className="text-sm uppercase tracking-widest font-bold text-zinc-500 border-b border-white/5 pb-4">Security</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Shield size={20} className="text-zinc-400" />
                  <div>
                    <p className="font-bold uppercase text-sm">Two-Factor Authentication</p>
                    <p className="text-xs text-zinc-500">Currently disabled. Recommended for security.</p>
                  </div>
                </div>
                <button className="px-4 py-2 border border-white/10 text-[10px] uppercase font-bold tracking-widest hover:bg-white hover:text-black transition-all">Enable</button>
              </div>
            </div>
            <div className="space-y-6 pt-4">
              <h3 className="text-sm uppercase tracking-widest font-bold text-zinc-500 border-b border-white/5 pb-4">Notifications</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Bell size={20} className="text-zinc-400" />
                  <div>
                    <p className="font-bold uppercase text-sm">Marketing Communications</p>
                    <p className="text-xs text-zinc-500">Receive updates on new models and events.</p>
                  </div>
                </div>
                <div className="w-10 h-5 bg-porsche-red rounded-full relative">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setActiveTab(item.id)}
                className="p-10 border border-white/10 hover:border-porsche-red transition-all duration-500 group cursor-pointer bg-zinc-900/30"
              >
                <div className="text-porsche-red mb-8 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-8">{item.description}</p>
                <div className="w-12 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-porsche-red transition-all duration-500" />
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <main className="pt-24 min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-center">
        <Link href="/" className="inline-flex items-center space-x-2 text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
        {activeTab !== "overview" && (
          <button 
            onClick={() => setActiveTab("overview")}
            className="text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold"
          >
            Overview
          </button>
        )}
      </div>

      <section className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-porsche-red uppercase tracking-[0.3em] font-bold text-sm mb-6 block">
              {activeTab === "overview" ? "Account Overview" : `Account / ${activeTab}`}
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold uppercase">
              {activeTab === "overview" ? (
                <>Welcome Back, <br/><span className="italic font-light">Porsche Driver.</span></>
              ) : (
                menuItems.find(i => i.id === activeTab)?.title
              )}
            </h1>
          </div>
          <button className="hidden md:flex items-center space-x-3 text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>

        <div className="min-h-[400px]">
          {renderContent()}
        </div>

        {activeTab === "overview" && (
          <div className="mt-20 p-12 border border-porsche-red/20 bg-porsche-red/5 rounded-sm animate-in fade-in duration-1000 delay-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold uppercase mb-4 italic">Ready for your next journey?</h2>
                <p className="text-zinc-400 max-w-2xl leading-relaxed">Your 911 Carrera GTS configuration is saved and ready for final review. Contact your dealer to proceed with the reservation.</p>
              </div>
              <Link href="/models" className="inline-block bg-white text-black px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-porsche-red hover:text-white transition-all duration-300 text-center whitespace-nowrap">
                View Configuration
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
