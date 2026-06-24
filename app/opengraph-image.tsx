import { ImageResponse } from "next/og";

export const alt = "Rangan Balaji — Builder, Developer, Student";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0d0d0d",
          backgroundImage:
            "radial-gradient(circle, hsl(213 14% 22%) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          padding: "90px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "hsl(213 14% 58%)",
            display: "flex",
          }}
        >
          Builder • Developer • Student
        </div>
        <div
          style={{
            fontSize: 132,
            fontStyle: "italic",
            color: "hsl(0 0% 92%)",
            marginTop: 24,
            display: "flex",
          }}
        >
          Rangan Balaji
        </div>
        <div
          style={{
            fontSize: 34,
            fontWeight: 300,
            color: "hsl(0 0% 64%)",
            marginTop: 28,
            maxWidth: 900,
            display: "flex",
          }}
        >
          Building software, products, and ideas that solve real problems.
        </div>
      </div>
    ),
    { ...size }
  );
}
