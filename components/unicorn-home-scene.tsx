"use client"

import UnicornScene from "unicornstudio-react/next"

export function UnicornHomeScene() {
  return (
    <UnicornScene
      projectId="TBeVNSgsX813yn7xC6FZ"
      sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
      width="100%"
      height="100%"
      production
      lazyLoad
      fps={60}
      scale={1}
      dpi={1.5}
    />
  )
}
