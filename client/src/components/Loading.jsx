import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#fff", // white background
        gap: "1rem",
      }}
    >
      <span className="loader"></span>
      <p className="loading-text">
        Loading<span>.</span><span>.</span><span>.</span>
      </p>

      <style>{`
        .loader {
          transform: rotateZ(45deg);
          perspective: 1000px;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          color: orange; /* main ring color */
          position: relative;
        }
        .loader:before,
        .loader:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: inherit;
          height: inherit;
          border-radius: 50%;
          transform: rotateX(70deg);
          animation: spin 1s linear infinite;
        }
        .loader:after {
          color: black; /* secondary ring color */
          transform: rotateY(70deg);
          animation-delay: .4s;
        }

        @keyframes spin {
          0%, 100% {
            box-shadow: .2em 0px 0 0px currentcolor;
          }
          12% {
            box-shadow: .2em .2em 0 0 currentcolor;
          }
          25% {
            box-shadow: 0 .2em 0 0px currentcolor;
          }
          37% {
            box-shadow: -.2em .2em 0 0 currentcolor;
          }
          50% {
            box-shadow: -.2em 0 0 0 currentcolor;
          }
          62% {
            box-shadow: -.2em -.2em 0 0 currentcolor;
          }
          75% {
            box-shadow: 0px -.2em 0 0 currentcolor;
          }
          87% {
            box-shadow: .2em -.2em 0 0 currentcolor;
          }
        }

        /* Loading text animation */
        .loading-text {
          font-size: 1.1rem;
          font-weight: 500;
          color: black; /* main text color */
          display: flex;
          align-items: center;
        }
        .loading-text span {
          color: orange; /* bouncing dots color */
          animation: bounce 1s infinite;
          display: inline-block;
        }
        .loading-text span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .loading-text span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
