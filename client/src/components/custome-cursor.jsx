// import { useEffect, useRef } from "react";

// export default function CustomCursor() {
//   const cursorRef = useRef(null);
//   const mouse = useRef({ x: 0, y: 0 });
//   const pos = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e) => {
//       mouse.current = { x: e.clientX, y: e.clientY };
//     };
//     window.addEventListener("mousemove", move);

//     const follow = () => {
//       // lerp (smooth transition)
//       pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
//       pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

//       if (cursorRef.current) {
//         cursorRef.current.style.transform = `translate(${pos.current.x - 1}px, ${pos.current.y - 1}px)`;
//       }

//       requestAnimationFrame(follow);
//     };

//     follow();

//     return () => {
//       window.removeEventListener("mousemove", move);
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="lg:block hidden"
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "12px",
//         height: "12px",
//         backgroundColor: "#fff",
//         borderRadius: "50%",
//         pointerEvents: "none",
//         zIndex: 9999,
//         mixBlendMode: "difference",
//         transform: "translate(-50%, -50%)",
//       }}
//     />
//   );
// }




import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="lg:block hidden"
      style={{
        
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "10px",
        height: "10px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        mixBlendMode: "difference", 
      }}
    />
  );
}


