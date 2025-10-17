function Layout({ children }) {

  return (
    <div
      style={{
        backgroundColor: "#eaf1fdff",
        padding: "3px",
        minHeight: "1074px",
      }}
    >

      <main>{children}</main>
    </div>
  );
}

export default Layout;
