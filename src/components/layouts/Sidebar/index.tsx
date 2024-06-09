import { FC } from "react";

interface SidebarProps {}
const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
