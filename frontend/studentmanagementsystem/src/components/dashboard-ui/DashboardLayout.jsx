import { useState } from "react";
import { Menu, X } from "lucide-react";

function DashboardLayout({ sidebar, header, children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Overlay (mobile) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200
            transform transition-transform duration-300
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:static lg:translate-x-0
          `}
        >
          {/* Close button (mobile only) */}
          <div className="flex justify-end p-4 lg:hidden">
            <button onClick={() => setIsSidebarOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {sidebar}
        </aside>

        {/* Main */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 lg:px-8">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden mr-3 text-slate-600"
            >
              <Menu size={24} />
            </button>

            <div className="flex-1">
              {header}
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
