import MainLayout from './layout/MainLayout'
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { InnerSidebar } from "@/layout/components/inner-sidebar"
import { ChevronLeft, ChevronRight } from "lucide-react"

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    }

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, [])

  return (
    <div className="h-screen flex">
      {!isMobile && (
        <aside className="w-[187px] resize-x overflow-hidden bg-black text-white p-[12px] pt-[16px]">
          <Button className="w-full justify-center cursor-pointer text-white bg-zinc-700 hover:bg-zinc-700">
            Main Menu Item
          </Button>
        </aside>
      )}

      <main className="flex-1 bg-gray-100 flex flex-col">
        {/* Header section */}
        <div className="h-16 border-b bg-white flex items-center px-6 gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 cursor-pointer"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            {isSidebarCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
          <h1 className="text-2xl font-semibold">Projects</h1>
        </div>

        {/* Content section */}
        <div className="flex-1 flex">
          <InnerSidebar isCollapsed={isSidebarCollapsed} onCollapse={setIsSidebarCollapsed}>
            <div className="p-4">
              <Button className="w-full justify-center cursor-pointer bg-zinc-50 text-black hover:bg-zinc-200 mb-2">
                Drafts
              </Button>
              <Button className="w-full justify-center cursor-pointer bg-zinc-50 text-black hover:bg-zinc-200 mb-2">
                Projects
              </Button>
            </div>
          </InnerSidebar>
          <div className="flex-1">
            <MainLayout />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
