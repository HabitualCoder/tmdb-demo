import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 px-6 bg-background border-t text-center text-muted-foreground">
      <span>&copy; {new Date().getFullYear()} Movie Streaming Service</span>
    </footer>
  );
};

export default Footer;
