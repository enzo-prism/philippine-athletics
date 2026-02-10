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
          background: "#e5e5e5",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <img
          alt="Philippine Sports Commission and Philippine Olympic Committee logos"
          src="https://res.cloudinary.com/dhqpqfw6w/image/upload/v1770697128/PATAFA_PSC_LOGO_xzerkv.jpg"
          style={{
            borderRadius: 24,
            height: 520,
            objectFit: "contain",
            width: 990,
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
