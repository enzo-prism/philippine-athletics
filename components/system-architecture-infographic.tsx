export function SystemArchitectureInfographic() {
  return (
    <figure className="border border-border bg-card p-4">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="system-architecture-title system-architecture-desc"
        className="h-auto w-full"
      >
        <title id="system-architecture-title">Philippine Athletics System Architecture</title>
        <desc id="system-architecture-desc">
          Relationship map among Patafa, Philom Sports, Department of Education, PSC, Philippine Olympic Committee, LGUs, and sponsors.
        </desc>

        <rect x="0" y="0" width="1200" height="720" fill="#f2f5f7" />

        <defs>
          <marker id="arrowheadData" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#1f4d7a" />
          </marker>
          <marker id="arrowheadAuthority" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#10202f" />
          </marker>
          <marker id="arrowheadFunding" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#8a1538" />
          </marker>
        </defs>

        <g fontFamily="system-ui, -apple-system, Segoe UI, sans-serif" fontSize="22" fontWeight="700" fill="#10202f">
          <rect x="470" y="60" width="260" height="96" fill="#ffffff" stroke="#10202f" />
          <text x="600" y="115" textAnchor="middle">PATAFA</text>

          <rect x="120" y="230" width="280" height="96" fill="#ffffff" stroke="#10202f" />
          <text x="260" y="286" textAnchor="middle">Philom Sports</text>

          <rect x="470" y="230" width="260" height="96" fill="#ffffff" stroke="#10202f" />
          <text x="600" y="286" textAnchor="middle">PSC</text>

          <rect x="820" y="230" width="280" height="96" fill="#ffffff" stroke="#10202f" />
          <text x="960" y="286" textAnchor="middle">POC</text>

          <rect x="120" y="420" width="320" height="96" fill="#ffffff" stroke="#10202f" />
          <text x="280" y="476" textAnchor="middle">Department of Education</text>

          <rect x="470" y="420" width="260" height="96" fill="#ffffff" stroke="#10202f" />
          <text x="600" y="476" textAnchor="middle">LGUs</text>

          <rect x="820" y="420" width="280" height="96" fill="#ffffff" stroke="#10202f" />
          <text x="960" y="476" textAnchor="middle">Sponsors</text>
        </g>

        <g strokeWidth="4" fill="none">
          <line
            x1="600"
            y1="156"
            x2="260"
            y2="230"
            stroke="#10202f"
            strokeDasharray="10 8"
            markerEnd="url(#arrowheadAuthority)"
          />
          <line
            x1="600"
            y1="156"
            x2="600"
            y2="230"
            stroke="#10202f"
            strokeDasharray="10 8"
            markerEnd="url(#arrowheadAuthority)"
          />
          <line
            x1="600"
            y1="156"
            x2="960"
            y2="230"
            stroke="#10202f"
            strokeDasharray="10 8"
            markerEnd="url(#arrowheadAuthority)"
          />

          <line x1="260" y1="326" x2="280" y2="420" stroke="#1f4d7a" markerEnd="url(#arrowheadData)" />
          <line x1="260" y1="326" x2="600" y2="420" stroke="#1f4d7a" markerEnd="url(#arrowheadData)" />
          <line x1="600" y1="326" x2="600" y2="420" stroke="#10202f" strokeDasharray="10 8" markerEnd="url(#arrowheadAuthority)" />
          <line x1="960" y1="326" x2="600" y2="420" stroke="#8a1538" markerEnd="url(#arrowheadFunding)" />
          <line x1="960" y1="326" x2="280" y2="420" stroke="#8a1538" markerEnd="url(#arrowheadFunding)" />
        </g>

        <g fontFamily="system-ui, -apple-system, Segoe UI, sans-serif" fontSize="16" fill="#3a4a57">
          <text x="60" y="650">Legend:</text>
          <line x1="130" y1="644" x2="200" y2="644" stroke="#1f4d7a" strokeWidth="4" markerEnd="url(#arrowheadData)" />
          <text x="212" y="650">Data flow</text>

          <line
            x1="350"
            y1="644"
            x2="420"
            y2="644"
            stroke="#10202f"
            strokeWidth="4"
            strokeDasharray="10 8"
            markerEnd="url(#arrowheadAuthority)"
          />
          <text x="432" y="650">Authority flow</text>

          <line x1="610" y1="644" x2="680" y2="644" stroke="#8a1538" strokeWidth="4" markerEnd="url(#arrowheadFunding)" />
          <text x="692" y="650">Funding flow</text>
        </g>
      </svg>
      <figcaption className="mt-2 text-xs text-muted-foreground">
        Institutional relationship map for demos. Entities and directional links are intentionally explicit for stakeholder walkthroughs.
      </figcaption>
    </figure>
  )
}
