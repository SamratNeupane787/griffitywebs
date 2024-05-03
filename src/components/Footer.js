import React from "react";

function Footer() {
  return (
    <div className=" mt-12">
      <footer className="footer items-center  flex justify-center p-4 bg-slate-900 text-white ">
        <aside className="items-center grid-flow-col">
          <img src="./logo.png" className=" fill-current w-10 h-10" />
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
