
import React, { useRef } from "react";


function Button({
  children,
  href,
  type = "button",
  className = "",
  onClick,
}) {
  const spanRef = useRef(null);

  const handleHover = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    spanRef.current.style.left = `${e.clientX - rect.left}px`;
    spanRef.current.style.top = `${e.clientY - rect.top}px`;
  };

  const commonProps = {
    className: `btn ${className}`,
    onMouseEnter: handleHover,
    onMouseMove: handleHover,
  };

  // Render anchor tag
  if (href) {
    return (
      <a href={href} {...commonProps}>
        {children}
        <span ref={spanRef}></span>
      </a>
    );
  }

  // Render button tag
  return (
    <button type={type} onClick={onClick} {...commonProps}>
      {children}
      <span ref={spanRef}></span>
    </button>
  );
}

export default Button;