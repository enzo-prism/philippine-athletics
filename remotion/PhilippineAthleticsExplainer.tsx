import React from "react";
import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {athleteSummaries} from "../lib/data/athletes";
import {clubs} from "../lib/data/clubs";
import {coaches} from "../lib/data/coaches";
import {competitions} from "../lib/data/competitions";
import {demoFlowConfigs} from "../lib/demo/flows";

const SCENE_DURATIONS = {
  intro: 150,
  problem: 180,
  product: 210,
  rankings: 210,
  governance: 240,
  outro: 180,
} as const;

export const EXPLAINER_DURATION = Object.values(SCENE_DURATIONS).reduce(
  (total, duration) => total + duration,
  0,
);

const COLORS = {
  ink: "#11243d",
  navy: "#1d3657",
  red: "#c8383f",
  gold: "#f6c95d",
  mist: "#eef2f7",
  panel: "rgba(255,255,255,0.92)",
  line: "rgba(17,36,61,0.12)",
  muted: "#506176",
};

const recognizedClubs = clubs.filter(
  (club) => club.isRecognized || (club.recognitions?.length ?? 0) > 0,
).length;
const recognizedCoaches = coaches.filter(
  (coach) => coach.isRecognized || (coach.recognitions?.length ?? 0) > 0,
).length;

const introStats = [
  {label: "Athletes", value: athleteSummaries.length},
  {label: "Clubs", value: clubs.length},
  {label: "Coaches", value: coaches.length},
  {label: "Competitions", value: competitions.length},
] as const;

const governanceStats = [
  {label: "Recognized clubs", value: recognizedClubs},
  {label: "Recognized coaches", value: recognizedCoaches},
  {label: "Audience demos", value: Object.keys(demoFlowConfigs).length},
] as const;

const rise = (frame: number, fps: number, delay = 0) => {
  const progress = spring({
    fps,
    frame: frame - delay,
    config: {
      damping: 18,
      mass: 0.9,
      stiffness: 120,
    },
  });

  return {
    opacity: progress,
    transform: `translateY(${interpolate(progress, [0, 1], [42, 0])}px)`,
  };
};

const settle = (frame: number, fps: number, delay = 0) =>
  spring({
    fps,
    frame: frame - delay,
    config: {
      damping: 20,
      mass: 0.95,
      stiffness: 110,
    },
  });

const BrowserShot: React.FC<{
  src: string;
  title: string;
  frame: number;
  accent?: string;
  objectPosition?: string;
  tilt?: number;
}> = ({src, title, frame, accent = COLORS.red, objectPosition = "top center", tilt = -3}) => {
  const {fps} = useVideoConfig();
  const entrance = settle(frame, fps);
  const scale = interpolate(entrance, [0, 1], [1.08, 1]);
  const drift = interpolate(frame, [0, 120], [0, -28], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        flex: 1,
        height: "100%",
        background: "rgba(255,255,255,0.98)",
        border: `1px solid ${COLORS.line}`,
        borderRadius: 28,
        boxShadow: "0 48px 120px rgba(14, 27, 45, 0.24)",
        overflow: "hidden",
        transform: `perspective(1600px) rotateY(${tilt}deg) rotateX(2deg) scale(${scale})`,
      }}
    >
      <div
        style={{
          height: 56,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "0 20px",
          borderBottom: `1px solid ${COLORS.line}`,
          background: "rgba(255,255,255,0.98)",
        }}
      >
        <div style={{display: "flex", gap: 8}}>
          {["#ff5f57", "#ffbd2f", "#28c840"].map((dot) => (
            <div
              key={dot}
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: dot,
              }}
            />
          ))}
        </div>
        <div
          style={{
            fontSize: 20,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: COLORS.muted,
            fontWeight: 700,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginLeft: "auto",
            width: 96,
            height: 4,
            background: accent,
            borderRadius: 999,
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          height: "calc(100% - 56px)",
          background: COLORS.mist,
        }}
      >
        <Img
          src={src}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition,
            transform: `translateY(${drift}px)`,
          }}
        />
      </div>
    </div>
  );
};

const MetricRail: React.FC<{
  frame: number;
  items: ReadonlyArray<{label: string; value: number}>;
}> = ({frame, items}) => {
  const {fps} = useVideoConfig();

  return (
    <div style={{display: "flex", gap: 18, flexWrap: "wrap"}}>
      {items.map((item, index) => (
        <div
          key={item.label}
          style={{
            ...rise(frame, fps, 8 + index * 5),
            minWidth: 180,
            padding: "18px 22px",
            borderRadius: 22,
            border: `1px solid ${COLORS.line}`,
            background: COLORS.panel,
            boxShadow: "0 18px 48px rgba(17, 36, 61, 0.08)",
          }}
        >
          <div
            style={{
              fontSize: 40,
              color: COLORS.navy,
              fontWeight: 800,
              lineHeight: 1,
              marginBottom: 10,
            }}
          >
            {item.value}
          </div>
          <div
            style={{
              fontSize: 18,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: COLORS.muted,
              fontWeight: 700,
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

const BulletColumn: React.FC<{
  frame: number;
  title: string;
  items: string[];
}> = ({frame, title, items}) => {
  const {fps} = useVideoConfig();

  return (
    <div
      style={{
        ...rise(frame, fps, 10),
        padding: 34,
        borderRadius: 30,
        border: `1px solid ${COLORS.line}`,
        background: COLORS.panel,
        boxShadow: "0 32px 80px rgba(17, 36, 61, 0.1)",
      }}
    >
      <div
        style={{
          fontSize: 18,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: COLORS.red,
          fontWeight: 800,
          marginBottom: 18,
        }}
      >
        {title}
      </div>
      <div style={{display: "flex", flexDirection: "column", gap: 18}}>
        {items.map((item, index) => (
          <div
            key={item}
            style={{
              ...rise(frame, fps, 18 + index * 7),
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                marginTop: 10,
                borderRadius: 999,
                background: index === 1 ? COLORS.gold : COLORS.red,
                flexShrink: 0,
              }}
            />
            <div
              style={{
                fontSize: 28,
                color: COLORS.ink,
                lineHeight: 1.28,
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SectionLabel: React.FC<{text: string; frame: number; delay?: number}> = ({
  text,
  frame,
  delay = 0,
}) => {
  const {fps} = useVideoConfig();

  return (
    <div
      style={{
        ...rise(frame, fps, delay),
        fontSize: 20,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: COLORS.red,
        fontWeight: 800,
        marginBottom: 18,
      }}
    >
      {text}
    </div>
  );
};

const HeadlineBlock: React.FC<{
  frame: number;
  title: string;
  body: string;
  width?: number | string;
}> = ({frame, title, body, width = 760}) => {
  const {fps} = useVideoConfig();

  return (
    <div style={{maxWidth: width}}>
      <div style={rise(frame, fps, 4)}>
        <div
          style={{
            fontSize: 82,
            lineHeight: 0.96,
            fontWeight: 800,
            color: COLORS.ink,
            marginBottom: 24,
          }}
        >
          {title}
        </div>
      </div>
      <div style={rise(frame, fps, 10)}>
        <div
          style={{
            fontSize: 30,
            lineHeight: 1.45,
            color: COLORS.muted,
            fontWeight: 500,
          }}
        >
          {body}
        </div>
      </div>
    </div>
  );
};

const CalloutTag: React.FC<{
  frame: number;
  delay: number;
  text: string;
  top: number;
  left?: number;
  right?: number;
}> = ({frame, delay, text, top, left, right}) => {
  const {fps} = useVideoConfig();

  return (
    <div
      style={{
        ...rise(frame, fps, delay),
        position: "absolute",
        top,
        left,
        right,
        padding: "16px 20px",
        borderRadius: 999,
        border: `1px solid rgba(255,255,255,0.36)`,
        background: "rgba(17, 36, 61, 0.82)",
        color: "white",
        fontSize: 22,
        fontWeight: 700,
        boxShadow: "0 18px 48px rgba(0, 0, 0, 0.24)",
        backdropFilter: "blur(8px)",
      }}
    >
      {text}
    </div>
  );
};

const FrameShell: React.FC<{children: React.ReactNode}> = ({children}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const vignette = interpolate(frame, [0, durationInFrames], [0.2, 0.35], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.mist,
        backgroundImage:
          "radial-gradient(circle at 18% 18%, rgba(200,56,63,0.14) 0, transparent 30%), radial-gradient(circle at 84% 12%, rgba(17,36,61,0.12) 0, transparent 28%), linear-gradient(135deg, rgba(255,255,255,0.9), rgba(237,242,247,0.96))",
        color: COLORS.ink,
        fontFamily:
          'Geist, Inter, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,36,61,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17,36,61,0.04) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          opacity: 0.45,
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at center, transparent 45%, rgba(8, 19, 34, ${vignette}) 100%)`,
        }}
      />
      <div style={{position: "absolute", inset: 32, border: `1px solid ${COLORS.line}`}} />
      {children}
    </AbsoluteFill>
  );
};

const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <FrameShell>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 46,
          height: "100%",
          padding: "88px 96px 76px",
        }}
      >
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
          <div>
            <SectionLabel text="Product analysis" frame={frame} />
            <div
              style={{
                ...rise(frame, 30, 4),
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginBottom: 24,
              }}
            >
              <Img
                src={staticFile("icon.svg")}
                style={{width: 84, height: 84, objectFit: "contain"}}
              />
              <div
                style={{
                  fontSize: 28,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: COLORS.navy,
                  fontWeight: 800,
                }}
              >
                Philippine Athletics
              </div>
            </div>
            <HeadlineBlock
              frame={frame}
              title="One national system for athlete identity, rankings, and trust."
              body="The current app already behaves like an athletics operating layer: public discovery, official results, role-based intake, and recognition signals that make the story credible."
            />
          </div>
          <MetricRail frame={frame} items={introStats} />
        </div>
        <div style={{position: "relative"}}>
          <BrowserShot
            src={staticFile("remotion/homepage.png")}
            title="Homepage"
            frame={frame}
            objectPosition="top center"
          />
          <CalloutTag frame={frame} delay={18} text="Discover athletes, clubs, coaches, and meets" top={118} right={-14} />
          <CalloutTag frame={frame} delay={26} text="Official partners and membership entry points" top={742} left={-24} />
        </div>
      </div>
    </FrameShell>
  );
};

const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <FrameShell>
      <div style={{padding: "96px 112px", height: "100%", display: "flex", flexDirection: "column"}}>
        <SectionLabel text="Why this matters" frame={frame} />
        <div style={{display: "flex", gap: 42, alignItems: "stretch", flex: 1}}>
          <div style={{flex: 0.9, display: "flex", alignItems: "center"}}>
            <HeadlineBlock
              frame={frame}
              title="Philippine athletics needs a shared official story."
              body="Without a unified layer, athlete identity, sanctioned meet data, and safety signals get fragmented across institutions. This product turns those moving parts into one trusted surface."
              width={700}
            />
          </div>
          <div style={{flex: 1.1, display: "flex", alignItems: "center"}}>
            <BulletColumn
              frame={frame}
              title="What the repo shows"
              items={[
                "Athletes, clubs, coaches, competitions, and membership all connect through the same public system.",
                "Rankings and profile evidence are driven by a shared performance engine instead of page-by-page drift.",
                "Recognition and SafeSport signals are surfaced where parents, institutions, and local programs actually make decisions.",
              ]}
            />
          </div>
        </div>
      </div>
    </FrameShell>
  );
};

const ProductScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <FrameShell>
      <div style={{padding: "88px 96px", height: "100%"}}>
        <SectionLabel text="What the product does" frame={frame} />
        <div style={{display: "grid", gridTemplateColumns: "0.82fr 1.18fr", gap: 42, height: "calc(100% - 48px)"}}>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", gap: 28}}>
            <HeadlineBlock
              frame={frame}
              title="It makes the ecosystem legible."
              body="The app is not just a directory. It creates a single front door for participation, visibility, and verification across athletes, institutions, sponsors, and local government."
              width={620}
            />
            <div style={{display: "grid", gap: 16}}>
              {[
                "Search and profile pages make athletes discoverable by name and membership number.",
                "Membership and club pathways give programs a clear onboarding route.",
                "Competition pages and rankings tell a season-wide story instead of isolated meet results.",
              ].map((item, index) => (
                <div
                  key={item}
                  style={{
                    ...rise(frame, fps, 18 + index * 6),
                    padding: "18px 22px",
                    borderRadius: 22,
                    background: COLORS.panel,
                    border: `1px solid ${COLORS.line}`,
                    fontSize: 24,
                    lineHeight: 1.4,
                    color: COLORS.ink,
                    boxShadow: "0 18px 48px rgba(17, 36, 61, 0.08)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div style={{position: "relative"}}>
            <BrowserShot
              src={staticFile("remotion/homepage.png")}
              title="Discovery and entry points"
              frame={frame}
              objectPosition="top center"
              tilt={-5}
            />
            <CalloutTag frame={frame} delay={20} text="Athlete and club discovery" top={164} right={36} />
            <CalloutTag frame={frame} delay={30} text="Membership entry for schools, programs, and supporters" top={436} left={28} />
            <CalloutTag frame={frame} delay={40} text="Season navigation for competitions and events" top={768} right={16} />
          </div>
        </div>
      </div>
    </FrameShell>
  );
};

const RankingsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <FrameShell>
      <div style={{padding: "88px 96px", height: "100%"}}>
        <SectionLabel text="Why it works" frame={frame} />
        <div style={{display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 42, height: "calc(100% - 48px)"}}>
          <div style={{position: "relative"}}>
            <BrowserShot
              src={staticFile("remotion/rankings.png")}
              title="Evidence-backed rankings"
              frame={frame}
              objectPosition="top center"
              tilt={-2}
            />
            <CalloutTag frame={frame} delay={18} text="Top 3 and full results are anchored to the same filters" top={154} right={34} />
            <CalloutTag frame={frame} delay={28} text="Each ranking links to the athlete with preserved event, year, gender, and age-group context" top={830} left={28} />
          </div>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", gap: 24}}>
            <HeadlineBlock
              frame={frame}
              title="Rankings are a trust feature, not just a list."
              body="The repo documents a shared evidence engine across rankings, athlete profiles, and intake previews. That means stakeholders can trace performance back to specific meets instead of trusting disconnected UI snapshots."
              width={640}
            />
            <div
              style={{
                ...rise(frame, fps, 20),
                borderRadius: 28,
                border: `1px solid ${COLORS.line}`,
                background: "linear-gradient(135deg, rgba(29,54,87,0.96), rgba(17,36,61,0.96))",
                color: "white",
                padding: "26px 30px",
                boxShadow: "0 28px 80px rgba(17, 36, 61, 0.18)",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.72)",
                  fontWeight: 800,
                  marginBottom: 14,
                }}
              >
                Current repo signal
              </div>
              <div style={{display: "grid", gap: 14}}>
                {[
                  "One competition-evidence source of truth",
                  "Strict deep-link context between rankings and profiles",
                  "Preview parity between intake and live rankings",
                ].map((item) => (
                  <div key={item} style={{fontSize: 25, lineHeight: 1.35, fontWeight: 600}}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FrameShell>
  );
};

const GovernanceScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <FrameShell>
      <div style={{padding: "88px 96px", height: "100%"}}>
        <SectionLabel text="Governance layer" frame={frame} />
        <div style={{display: "grid", gridTemplateColumns: "0.88fr 1.12fr", gap: 42, height: "calc(100% - 48px)"}}>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <div>
              <HeadlineBlock
                frame={frame}
                title="Governance is built into the product surface."
                body="The strongest differentiator in the codebase is not just discovery. It is the operational guardrails: sanctioned-results intake, recognition badges, SafeSport cues, and audience-specific demo flows for federation, institutions, and LGUs."
                width={620}
              />
            </div>
            <MetricRail frame={frame} items={governanceStats} />
          </div>
          <div style={{display: "grid", gridTemplateRows: "1fr 1fr", gap: 24}}>
            <div style={{position: "relative"}}>
              <BrowserShot
                src={staticFile("remotion/data-portal.png")}
                title="Results Intake Portal"
                frame={frame}
                objectPosition="top center"
                tilt={-4}
              />
              <CalloutTag frame={frame} delay={22} text="Structured CSV upload, mapping, validation, and review" top={92} right={22} />
            </div>
            <div style={{position: "relative"}}>
              <BrowserShot
                src={staticFile("remotion/recognition.png")}
                title="Recognition and SafeSport"
                frame={frame}
                objectPosition="top center"
                tilt={-1}
              />
              <CalloutTag frame={frame} delay={30} text="Parents and institutions can verify who is officially trusted" top={120} left={24} />
            </div>
          </div>
        </div>
      </div>
    </FrameShell>
  );
};

const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <FrameShell>
      <Img
        src={staticFile("infographics/system-architecture.svg")}
        style={{
          position: "absolute",
          inset: 120,
          width: "calc(100% - 240px)",
          height: "calc(100% - 240px)",
          objectFit: "contain",
          opacity: 0.12,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(17,36,61,0.94), rgba(17,36,61,0.82) 56%, rgba(200,56,63,0.7) 100%)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr 0.92fr",
          gap: 54,
          height: "100%",
          padding: "96px 110px 84px",
          color: "white",
          fontFamily: 'Geist, Inter, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
          <div>
            <SectionLabel text="Final take" frame={frame} />
            <div
              style={{
                ...rise(frame, fps, 4),
                fontSize: 88,
                lineHeight: 0.95,
                fontWeight: 800,
                marginBottom: 24,
              }}
            >
              Philippine Athletics becomes the shared source of truth.
            </div>
            <div
              style={{
                ...rise(frame, fps, 12),
                fontSize: 30,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.86)",
                maxWidth: 760,
              }}
            >
              Athletes gain visibility. Institutions gain accountable reporting.
              Families and local programs gain trust. And the federation gets one
              story it can stand behind.
            </div>
          </div>
          <div
            style={{
              ...rise(frame, fps, 20),
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 22,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.66)",
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: 68,
                height: 4,
                background: COLORS.gold,
                borderRadius: 999,
              }}
            />
            Short product explainer generated from the current repo build
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gap: 18,
            alignSelf: "center",
          }}
        >
          {[
            "Athlete identity and discovery",
            "Evidence-backed rankings and meet context",
            "Sanctioned intake with governance guardrails",
            "Recognition and SafeSport trust signals",
          ].map((item, index) => (
            <div
              key={item}
              style={{
                ...rise(frame, fps, 10 + index * 6),
                padding: "20px 24px",
                borderRadius: 24,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.1)",
                fontSize: 28,
                fontWeight: 600,
                lineHeight: 1.3,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </FrameShell>
  );
};

export const PhilippineAthleticsExplainer: React.FC = () => {
  let cursor = 0;

  return (
    <AbsoluteFill>
      <Sequence from={cursor} durationInFrames={SCENE_DURATIONS.intro}>
        <IntroScene />
      </Sequence>
      {(cursor += SCENE_DURATIONS.intro, null)}
      <Sequence from={cursor} durationInFrames={SCENE_DURATIONS.problem}>
        <ProblemScene />
      </Sequence>
      {(cursor += SCENE_DURATIONS.problem, null)}
      <Sequence from={cursor} durationInFrames={SCENE_DURATIONS.product}>
        <ProductScene />
      </Sequence>
      {(cursor += SCENE_DURATIONS.product, null)}
      <Sequence from={cursor} durationInFrames={SCENE_DURATIONS.rankings}>
        <RankingsScene />
      </Sequence>
      {(cursor += SCENE_DURATIONS.rankings, null)}
      <Sequence from={cursor} durationInFrames={SCENE_DURATIONS.governance}>
        <GovernanceScene />
      </Sequence>
      {(cursor += SCENE_DURATIONS.governance, null)}
      <Sequence from={cursor} durationInFrames={SCENE_DURATIONS.outro}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
