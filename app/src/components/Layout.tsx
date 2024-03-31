interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
        
      <div className="">{children}</div>

      <div className="w-full h-[56px] bg-[#1f1f1f]"></div>
    </div>
  );
};

export default Layout;
