import React from "react";

const SocialIcon = ({ icon, color, link }) => {
  return (
    <div
      className="social-icon"
      style={{ background: color }}
      onClick={() => {
        window.open(link, "_balnk");
      }}
    >
      {icon}
    </div>
  );
};

export default SocialIcon;
