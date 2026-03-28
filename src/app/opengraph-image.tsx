import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Daylen Hicks — Software Engineer & AI Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          backgroundColor: "#0c0c0c",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "2px",
              backgroundColor: "#3B82F6",
            }}
          />
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: "#3B82F6",
            }}
          >
            Portfolio
          </span>
        </div>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#f0f0f0",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Daylen Hicks
        </h1>

        <p
          style={{
            fontSize: "36px",
            fontWeight: 500,
            color: "#3B82F6",
            margin: "16px 0 0 0",
          }}
        >
          Software Engineer & AI Developer
        </p>

        <p
          style={{
            fontSize: "22px",
            color: "#888888",
            margin: "24px 0 0 0",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Building full-stack apps and AI-powered solutions at NC A&T
        </p>

        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "48px",
            paddingTop: "32px",
            borderTop: "1px solid #222222",
          }}
        >
          {[
            { value: "1st", label: "Place Hackathon" },
            { value: "3.6", label: "GPA at NC A&T" },
            { value: "500+", label: "Users Shipped" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: 900,
                  color: "transparent",
                  WebkitTextStroke: "2px #f0f0f0",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.15em",
                  color: "#888888",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "16px",
            color: "#555555",
          }}
        >
          daylenhicks.com
        </div>
      </div>
    ),
    { ...size }
  );
}
