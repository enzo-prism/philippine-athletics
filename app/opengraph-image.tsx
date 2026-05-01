import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#fbfaf6",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "74px 86px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#ffffff",
            border: "3px solid #d8d2c5",
            borderRadius: 36,
            display: "flex",
            height: 250,
            justifyContent: "center",
            width: 250,
          }}
        >
          <svg width="174" height="174" viewBox="0 0 24 24" aria-hidden="true">
            <rect width="24" height="24" rx="5.5" fill="#fbfaf6" />
            <path
              d="M20 13c0 5-3.5 7.5-8 8.5C7.5 20.5 4 18 4 13V6l8-3 8 3v7Z"
              fill="#fff"
              stroke="#0a2348"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.45"
            />
            <path
              d="m9 12 2 2 4-4"
              fill="none"
              stroke="#1d4ed8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
            />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            width: 720,
          }}
        >
          <div
            style={{
              color: "#b5122b",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 0,
              textTransform: "uppercase",
            }}
          >
            National Athletics Operating System
          </div>
          <div
            style={{
              color: "#0a2348",
              fontSize: 86,
              fontWeight: 800,
              letterSpacing: 0,
              lineHeight: 0.94,
            }}
          >
            Philippine Athletics
          </div>
          <div
            style={{
              color: "#475569",
              fontSize: 31,
              lineHeight: 1.25,
              maxWidth: 620,
            }}
          >
            Athletes, clubs, coaches, and events in one minimal operating surface.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
