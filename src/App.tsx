import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <main className="h-screen bg-gradient-to-r from-stone-600 to-slate-900">
      <Outlet />
    </main>
  );
};
