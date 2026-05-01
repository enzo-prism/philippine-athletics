import { athleteSummaries } from "./athletes"
import { matchesIdOrSlug, slugify } from "./utils"

export type CoachEvidenceLevel = "High" | "Medium" | "Lower"

export type CoachProfileFact = {
  label: string
  value: string
  detail?: string
}

export type CoachResearchSource = {
  label: string
  url: string
  description: string
}

export type Coach = {
  id: string
  slug: string
  name: string
  role?: string
  alsoKnownAs?: string[]
  specialty: string
  location: string
  club: string
  clubId?: string
  experience: string
  evidenceLevel?: CoachEvidenceLevel
  evidenceNotes?: string[]
  profileFacts?: CoachProfileFact[]
  researchSources?: CoachResearchSource[]
  badges?: string[]
  isRecognized?: boolean
  recognitions?: string[]
  recognitionDetails?: { label: string; issuer: string; validThrough?: string }[]
  certifications?: string[]
  bio?: string
  achievements?: string[]
  isStub?: boolean
  contact?: {
    email?: string
    phone?: string
  }
}

export const coaches: Coach[] = [
  {
    id: "coach-dario-de-rosas",
    slug: "dario-de-rosas",
    name: "Dario De Rosas",
    role: "National track and field head coach",
    specialty: "Multi-events, jumps, combined events, national-team planning",
    location: "Philippines",
    club: "Philippine National Team",
    experience: "Longtime national-team coach; publicly active in 2025-2026 national-team and Philippine Open coverage.",
    evidenceLevel: "High",
    evidenceNotes: [
      "PNA's April 2025 Philippine Open report identifies De Rosas as a national coach and quotes him on the national-team selection role of the championships.",
      "Daily Tribune's April 2026 Singapore Open report says national team coaches Dario De Rosas and Isidro Del Prado called the shots for the squad.",
      "The PSC 2025 eligible national athletes and coaches masterlist includes Dario De Rosas under athletics.",
    ],
    profileFacts: [
      { label: "Current public role", value: "National coach / head-coach evidence", detail: "Named in 2025 PNA and 2026 Daily Tribune coverage." },
      { label: "Discipline", value: "Multi-events", detail: "National Academy of Sports lists him as a multi-events Philippine Track and Field Team national coach." },
      { label: "Recent delegation evidence", value: "2026 Singapore Open", detail: "Reported as one of the coaches calling the shots for the Philippine squad." },
      { label: "PSC status", value: "2025 eligible list", detail: "Listed in the PSC masterlist for athletics." },
    ],
    badges: ["National coach", "Multi-events", "PSC eligible list"],
    isRecognized: true,
    recognitions: ["Publicly documented Philippine national-team coach"],
    certifications: ["Multi-events Philippine Track and Field Team National Coach"],
    achievements: [
      "Named by PNA as a national coach present for the 2025 ICTSI Philippine Athletics Championships announcement.",
      "Identified by Daily Tribune as one of the national team coaches leading the 2026 Singapore Open squad.",
      "Listed by National Academy of Sports as a multi-events Philippine Track and Field Team national coach.",
      "Longtime national-coaching presence also referenced in 2016 and 2023 national coaching staff coverage.",
    ],
    bio:
      "Dario De Rosas is one of the clearest currently visible national-team coaching names in Philippine athletics. Recent public evidence places him at the center of national-team planning around the Philippine Athletics Championships and the 2026 Singapore Open squad, while National Academy of Sports material identifies his discipline lane as multi-events.",
    researchSources: [
      {
        label: "PNA Philippine Open report",
        url: "https://www.pna.gov.ph/index.php/articles/1248153",
        description: "April 2025 government news coverage naming De Rosas as a national coach.",
      },
      {
        label: "Daily Tribune Singapore Open report",
        url: "https://tribune.net.ph/2026/04/16/bautista-pockets-bronze",
        description: "April 2026 report naming De Rosas with Isidro Del Prado as national-team coaches for the squad.",
      },
      {
        label: "National Academy of Sports coaches",
        url: "https://nas.edu.ph/our-coaches/",
        description: "Lists De Rosas as a multi-events Philippine Track and Field Team national coach.",
      },
      {
        label: "PSC 2025 eligible masterlist",
        url: "https://psc.gov.ph/psc_site/wp-content/uploads/2025/11/2025_MASTERLIST-OF-ELIGIBLES-as-of-07-OCTOBER.pdf",
        description: "Official PSC masterlist including Dario De Rosas under athletics.",
      },
    ],
  },
  {
    id: "coach-jeoffrey-chua",
    slug: "jeoffrey-chua",
    name: "Jeoffrey Chua",
    role: "National coach / deputy-coach evidence",
    specialty: "Sprints and hurdles",
    location: "Philippines",
    club: "Philippine National Team",
    experience: "National-team sprints and hurdles coach; publicly active in Philippine Open and international delegation coverage.",
    evidenceLevel: "High",
    evidenceNotes: [
      "PNA's 2023 national-team staff report lists Jeoffrey Chua for sprints and hurdles.",
      "PNA's 2025 Philippine Open report names Chua as a national coach.",
      "PSC 2025 and 2024 eligible masterlists include Jeoffrey Chua under athletics.",
    ],
    profileFacts: [
      { label: "Current public role", value: "National coach", detail: "Named in 2025 PNA coverage and PSC eligible lists." },
      { label: "Discipline", value: "Sprints and hurdles", detail: "Listed in 2023 national coaching staff coverage." },
      { label: "Recent delegation evidence", value: "2025 India / Thailand teams", detail: "Named among accompanying coaches in 2025 coverage." },
      { label: "PSC status", value: "2025 eligible list", detail: "Included in the PSC national athletes/coaches benefit list." },
    ],
    badges: ["National coach", "Sprints and hurdles", "PSC eligible list"],
    isRecognized: true,
    recognitions: ["Publicly documented Philippine national-team coach"],
    certifications: ["Sprints and hurdles national coaching staff"],
    achievements: [
      "Listed in 2023 PNA coverage as the national staff coach for sprints and hurdles.",
      "Named as a national coach in PNA's 2025 ICTSI Philippine Athletics Championships coverage.",
      "Reported as deputy coach in 2025 Philippine Athletics Championships discussion coverage.",
      "Named among coaches accompanying Philippine teams to 2025 international meets.",
    ],
    bio:
      "Jeoffrey Chua's public profile is strongest around the sprint and hurdles lane. PNA staff coverage, Philippine Open reports, and PSC eligibility records all support listing him as a national-team coach, with recent delegation mentions keeping the profile current.",
    researchSources: [
      {
        label: "PNA 2023 national staff report",
        url: "https://www.pna.gov.ph/articles/1192565",
        description: "Lists Chua as the sprints and hurdles member of the national coaching staff.",
      },
      {
        label: "PNA 2025 Philippine Open report",
        url: "https://www.pna.gov.ph/index.php/articles/1248153",
        description: "Names Chua as a national coach at the Philippine Open PSA Forum.",
      },
      {
        label: "PSC 2025 eligible masterlist",
        url: "https://psc.gov.ph/psc_site/wp-content/uploads/2025/11/2025_MASTERLIST-OF-ELIGIBLES-as-of-07-OCTOBER.pdf",
        description: "Official PSC masterlist including Jeoffrey Chua under athletics.",
      },
      {
        label: "Manila Bulletin India delegation",
        url: "https://mb.com.ph/2025/08/08/lopena-pama-banner-ph-team-in-india-trackfest",
        description: "Names Chua among coaches for a 2025 Philippine international team.",
      },
    ],
  },
  {
    id: "coach-isidro-del-prado",
    slug: "isidro-del-prado",
    name: "Isidro Del Prado",
    role: "National team coach",
    specialty: "Middle sprint, 400m, relay development",
    location: "Philippines",
    club: "Philippine National Team",
    experience: "Olympian, Asian champion, Philippine 400m record holder, and national-team coach.",
    evidenceLevel: "High",
    evidenceNotes: [
      "Daily Tribune's April 2026 Singapore Open coverage names Del Prado with Dario De Rosas as national team coaches for the squad.",
      "PNA's 2023 national staff report lists Isidro Del Prado for middle sprint.",
      "The PSC 2025 eligible masterlist includes Isidro Del Prado under athletics.",
    ],
    profileFacts: [
      { label: "Current public role", value: "National team coach", detail: "Named in 2026 Singapore Open coverage." },
      { label: "Discipline", value: "Middle sprint / 400m", detail: "Listed in PNA staff coverage as middle sprint." },
      { label: "Athlete legacy", value: "1984 Olympian", detail: "Philippine Olympians lists him in the Los Angeles 400m." },
      { label: "National record", value: "400m 45.57", detail: "Philippine Athletics and World Athletics list the mark from 1984." },
    ],
    badges: ["National coach", "Olympian", "400m national record holder"],
    isRecognized: true,
    recognitions: ["Publicly documented Philippine national-team coach", "2026 Philippine Sports Hall of Fame inductee"],
    certifications: ["Middle sprint national coaching staff"],
    achievements: [
      "Named a national team coach for the 2026 Singapore Open squad.",
      "Listed in 2023 national coaching staff coverage for middle sprint.",
      "Two-time Asian 400m champion according to World Athletics profile honors.",
      "Set the Philippine men's 400m record of 45.57 in 1984.",
      "Announced as a 2026 Philippine Sports Hall of Fame inductee.",
    ],
    bio:
      "Isidro Del Prado brings one of the strongest athlete-to-coach resumes in the Philippine system: Olympian, Asian champion, national 400m record holder, and current/recently documented national-team coach. The profile should be read as both a staff record and a living sprint-development lineage.",
    researchSources: [
      {
        label: "Daily Tribune Singapore Open report",
        url: "https://tribune.net.ph/2026/04/16/bautista-pockets-bronze",
        description: "April 2026 report naming Del Prado as a national-team coach for the squad.",
      },
      {
        label: "PNA 2023 national staff report",
        url: "https://www.pna.gov.ph/articles/1192565",
        description: "Lists Del Prado as the middle sprint coach on the national staff.",
      },
      {
        label: "Philippine Athletics records",
        url: "https://www.philippineathletics.org/records",
        description: "Official record listing for Del Prado's Philippine 400m marks.",
      },
      {
        label: "Philippine Olympians profile",
        url: "https://www.philippineolympians.org/oly/1984-olympics-los-angeles-athletics-del-prado-isidro",
        description: "Olympian biography and post-athlete coaching background.",
      },
      {
        label: "World Athletics profile",
        url: "https://worldathletics.org/athletes/philippines/isidro-del-prado-14354415",
        description: "Official athlete profile with honors and personal bests.",
      },
      {
        label: "GMA Hall of Fame report",
        url: "https://www.gmanetwork.com/news/sports/othersports/983674/onyok-velasco-ramon-fernandez-among-2026-ph-sports-hall-of-fame-inductees/story/",
        description: "Reports Del Prado as part of the 2026 Philippine Sports Hall of Fame class.",
      },
    ],
  },
  {
    id: "coach-sean-guevarra",
    slug: "sean-guevarra",
    name: "Sean Guevarra",
    alsoKnownAs: ["Sean Guevara"],
    role: "PATAFA multi-event national team head coach",
    specialty: "Multi-events, jumps, coach education",
    location: "Philippines",
    club: "Philippine National Team",
    experience: "National team head-coach evidence, deputy training director evidence, World Athletics coach education credentials.",
    evidenceLevel: "High",
    evidenceNotes: [
      "National Academy of Sports lists Sean Guevarra as PATAFA Multi-Event National Team Head Coach and PATAFA Deputy Training Director.",
      "PNA's 2023 national staff report lists Sean Guevarra/Guevara in multi-event coaching.",
      "PSC 2025 and 2024 eligible masterlists use the spelling Sean Guevara under athletics.",
    ],
    profileFacts: [
      { label: "Current public role", value: "Multi-event national team head coach", detail: "Listed by National Academy of Sports." },
      { label: "Also listed as", value: "Sean Guevara", detail: "PSC and some PNA/event coverage use the one-r spelling." },
      { label: "Credentials", value: "World Athletics Level IV / III", detail: "NAS lists Level IV jumps and Level III multi-events." },
      { label: "Athlete legacy", value: "High jump national record holder", detail: "NAS describes him as a former national team athlete and record holder." },
    ],
    badges: ["National team head coach", "Multi-events", "World Athletics lecturer"],
    isRecognized: true,
    recognitions: ["Publicly documented Philippine national-team coach"],
    certifications: [
      "World Athletics Level IV Jumps Specialty Coach",
      "World Athletics Level III Multi-Events Coach",
      "World Athletics Certified Level II Lecturer",
    ],
    achievements: [
      "Listed by National Academy of Sports as PATAFA Multi-Event National Team Head Coach.",
      "Listed by National Academy of Sports as PATAFA Deputy Training Director.",
      "Listed in 2023 PNA coverage as part of the national coaching staff for multi-events.",
      "Described by NAS as a former national team athlete and high jump national record holder.",
      "Named in youth-team and international delegation coverage under the Sean Guevara spelling.",
    ],
    bio:
      "Sean Guevarra is a high-confidence national coaching profile, though public sources vary between Guevarra and Guevara. The strongest public biography comes from the National Academy of Sports, which places him in multi-events leadership, deputy training direction, World Athletics education, and high-jump athlete legacy.",
    researchSources: [
      {
        label: "National Academy of Sports coaches",
        url: "https://nas.edu.ph/our-coaches/",
        description: "Lists role, PATAFA leadership function, World Athletics credentials, and athlete background.",
      },
      {
        label: "PNA 2023 national staff report",
        url: "https://www.pna.gov.ph/articles/1192565",
        description: "Lists Sean Guevarra/Guevara in the multi-event national coaching staff.",
      },
      {
        label: "PSC 2025 eligible masterlist",
        url: "https://psc.gov.ph/psc_site/wp-content/uploads/2025/11/2025_MASTERLIST-OF-ELIGIBLES-as-of-07-OCTOBER.pdf",
        description: "Official PSC masterlist including Sean Guevara under athletics.",
      },
      {
        label: "PNA Singapore long jump report",
        url: "https://www.pna.gov.ph/articles/1200278",
        description: "Mentions Sean Guevarra as national coach connected to John Mike Lera's long-jump pathway.",
      },
    ],
  },
  {
    id: "coach-emerson-obiena",
    slug: "emerson-obiena",
    name: "Emerson Obiena",
    role: "National pole vault coach",
    specialty: "Pole vault",
    location: "Philippines",
    club: "Philippine National Team",
    experience: "Pole vault coach, former SEA Games medalist, and first coach of EJ Obiena.",
    evidenceLevel: "High",
    evidenceNotes: [
      "PNA's 2023 national staff report lists Emerson Obiena for pole vault.",
      "The PSC 2025 eligible masterlist includes Emerson Obiena under athletics.",
      "Recent GMA and Philstar coverage identify Emerson as EJ Obiena's first coach and document his ongoing competitive/coaching presence.",
    ],
    profileFacts: [
      { label: "Current public role", value: "Pole vault national coach", detail: "Listed in PNA national staff coverage and PSC eligible lists." },
      { label: "Discipline", value: "Pole vault", detail: "Former national vaulter and coach." },
      { label: "Athlete legacy", value: "SEA Games medalist", detail: "Recent GMA coverage cites SEA Games silver and bronze medals." },
      { label: "Coaching lineage", value: "EJ Obiena's first coach", detail: "Multiple sources identify him as EJ's coach from childhood into youth years." },
    ],
    badges: ["National coach", "Pole vault", "SEA Games medalist"],
    isRecognized: true,
    recognitions: ["Publicly documented Philippine national-team coach"],
    certifications: ["Pole vault national coaching staff"],
    achievements: [
      "Listed in 2023 PNA coverage as the national coaching staff member for pole vault.",
      "Included in the PSC 2025 eligible masterlist under athletics.",
      "Coached EJ Obiena in his foundational pole vault years.",
      "Won World Masters Games gold in the men's 60+ pole vault in 2025.",
      "Recognized in recent coverage as a former SEA Games pole vault medalist.",
    ],
    bio:
      "Emerson Obiena's coach profile combines formal national-staff evidence with one of the most visible athlete-development stories in Philippine athletics: the early pole-vault pathway of EJ Obiena. The current public record supports listing him as a pole vault national coach while noting that EJ's elite international program also includes other specialist staff.",
    researchSources: [
      {
        label: "PNA 2023 national staff report",
        url: "https://www.pna.gov.ph/articles/1192565",
        description: "Lists Emerson Obiena as the pole vault member of the national coaching staff.",
      },
      {
        label: "PSC 2025 eligible masterlist",
        url: "https://psc.gov.ph/psc_site/wp-content/uploads/2025/11/2025_MASTERLIST-OF-ELIGIBLES-as-of-07-OCTOBER.pdf",
        description: "Official PSC masterlist including Emerson Obiena under athletics.",
      },
      {
        label: "GMA World Masters report",
        url: "https://www.gmanetwork.com/news/sports/othersports/947389/ej-obiena-s-father-emerson-rules-world-masters-games/story/",
        description: "Documents Emerson's 2025 World Masters gold and first-coach role for EJ.",
      },
      {
        label: "Philstar Father's Day feature",
        url: "https://www.philstar.com/sports/2024/06/16/2363746/olympian-ej-obiena-growing-up-my-dad-was-my-superhero",
        description: "Documents Emerson as EJ's youth coach and former national pole vaulter.",
      },
    ],
  },
  {
    id: "coach-karl-francisco",
    slug: "karl-francisco",
    name: "Karl Francisco",
    role: "National team coach evidence needs roster confirmation",
    specialty: "Throws, track and field coaching, team delegation support",
    location: "Philippines",
    club: "Philippine National Team",
    experience: "Publicly visible through team/delegation mentions and UP Track and Field coaching background.",
    evidenceLevel: "Medium",
    evidenceNotes: [
      "The supplied research trail includes PATAFA social snippets identifying Karl Francisco among national team coaches, but those posts are not cleanly crawlable here.",
      "Additional social-source discovery ties Karl Francisco to Philippine throwers at the 2026 Asian Throwing Championships.",
      "Independent public sources confirm Karl Francisco as a UP Track and Field coach and place him among coaches connected with Philippine athletes at the 2025 Taiwan Open.",
      "Until PATAFA publishes a current staff roster, this profile should remain marked as medium-confidence rather than treated like a PSC/PNA-confirmed listing.",
    ],
    profileFacts: [
      { label: "Public role evidence", value: "Team coach / national-team social snippet", detail: "Needs official roster confirmation." },
      { label: "Discipline context", value: "Throws / team support", detail: "PATAFA social evidence connects him with Philippine throwers." },
      { label: "College coaching", value: "UP Track and Field", detail: "Robinsons Retail donation coverage names him among UP coaches." },
      { label: "Recent athlete context", value: "2025 Taiwan Open", detail: "FEU Advocate names him among coaches of Philippine representatives." },
      { label: "Confidence", value: "Medium", detail: "Useful profile, but national-staff evidence is not as official as PNA/PSC entries." },
    ],
    badges: ["Throws", "UP Track and Field", "Roster confirmation needed"],
    recognitions: ["Publicly documented coaching profile with medium-confidence national-team evidence"],
    certifications: ["Track and field coaching background"],
    achievements: [
      "Connected through PATAFA social evidence with Philippine throwers at the 2026 Asian Throwing Championships.",
      "Named among UP Track and Field coaches in 2023 donation coverage.",
      "Named among coaches of Philippine representatives Susan Ramadan and Tochukwu Okolo in 2025 Taiwan Open coverage.",
      "Included in the working national-coach list because PATAFA social snippets reportedly identify him among National Team Coaches.",
    ],
    bio:
      "Karl Francisco is included as a conservative, medium-confidence national-coach profile. The public record clearly supports a track-and-field coaching background, PATAFA social evidence around throwers, and 2025 athlete-support context, while the national-team label still needs a clean staff roster or PSC/PNA listing.",
    researchSources: [
      {
        label: "PATAFA throwing team social post",
        url: "https://www.facebook.com/PhilippineAthletics/posts/all-the-best-to-our-throwers-competing-in-the-asian-throwing-championships-on-ma/958969733551413/",
        description: "PATAFA social evidence connecting Francisco with the Philippine throwing group.",
      },
      {
        label: "Robinsons Retail UP Track report",
        url: "https://www.robinsonsretailholdings.com.ph/2023/12/30/southstar-drug-turns-over-donation-to-up-track-and-field-team/",
        description: "Names Karl Francisco among UP Track and Field coaches.",
      },
      {
        label: "FEU Advocate Taiwan Open report",
        url: "https://feuadvocate.net/lady-trackster-ramadan-makes-first-intl-appearance-in-2025-taiwan-open/",
        description: "Names Karl Francisco among coaches for Philippine athletes at the 2025 Taiwan Open.",
      },
      {
        label: "PATAFA about page",
        url: "https://www.philippineathletics.org/about",
        description: "Official PATAFA site confirms federation role but does not yet publish a complete coaching staff roster.",
      },
    ],
  },
  {
    id: "coach-roselyn-hamero",
    slug: "roselyn-hamero",
    name: "Roselyn Hamero",
    role: "National team coach / coach educator evidence",
    specialty: "Throws, coach education, youth-team support",
    location: "Philippines",
    club: "Philippine National Team",
    experience: "Former athlete, collegiate head coach, World Athletics lecturer, and youth/international delegation coach evidence.",
    evidenceLevel: "Medium",
    evidenceNotes: [
      "PATAFA social snippets supplied by the user identify Roselyn Hamero among National Team Coaches, but those posts are not cleanly crawlable here.",
      "Independent 2025 youth-team coverage names Sean Guevara and Roselyn Hamero among coaches accompanying a Philippine SEA Youth Athletics delegation.",
      "World Athletics and regional coaching-course coverage support her coach-education credentials.",
    ],
    profileFacts: [
      { label: "Public role evidence", value: "National/youth team coach", detail: "Supported by youth delegation coverage and PATAFA social snippets." },
      { label: "Discipline", value: "Throws / coach education", detail: "World Athletics describes her as a throws coach from the Philippines." },
      { label: "Coach education", value: "World Athletics lecturer", detail: "Sarawak course coverage identifies her as a qualified World Athletics lecturer." },
      { label: "College coaching", value: "FEU athletics", detail: "FEU coverage names her as head coach for the UAAP women's title team." },
    ],
    badges: ["Coach educator", "Throws", "Youth team support"],
    isRecognized: true,
    recognitions: ["Publicly documented coach educator and national/youth delegation coach"],
    certifications: ["World Athletics lecturer evidence", "Throws coaching background"],
    achievements: [
      "Named in 2025 SEA Youth Athletics coverage among coaches accompanying the Philippine youth delegation.",
      "Identified by World Athletics as a throws coach from the Philippines engaged in coach education.",
      "Identified in Sarawak course coverage as a qualified World Athletics lecturer from the Philippines.",
      "Led FEU's women's athletics team back to a UAAP title according to FEU's 2024 report.",
    ],
    bio:
      "Roselyn Hamero's profile is strongest as a coach educator and throws/college coach with national-youth delegation evidence. Because the cleanest current national-staff mentions appear to be PATAFA social snippets rather than a published roster, the app marks her national-coach status as medium-confidence instead of overstating certainty.",
    researchSources: [
      {
        label: "World Athletics coaching feature",
        url: "https://worldathletics.org/news/feature/athletics-coaching-elearning-initiatives-asia",
        description: "Describes Hamero as a throws coach from the Philippines and coach-education participant.",
      },
      {
        label: "Sarawak Tribune coaching course",
        url: "https://www.sarawaktribune.com/45-teachers-gain-insights-into-athletic-coaching/",
        description: "Identifies Hamero as a qualified World Athletics lecturer from the Philippines.",
      },
      {
        label: "FEU athletics title report",
        url: "https://www.feu.edu.ph/feu-regains-uaap-womens-athletics-title-mens-team-finishes-close-2nd/",
        description: "Names Hamero as FEU head coach after the UAAP women's athletics title.",
      },
      {
        label: "Abante SEA Youth report",
        url: "https://www.abante.com.ph/2025/11/20/jecel-vibas-jeralyn-rodriguez-tig-3-gold-sa-sea-youth-athletics/",
        description: "Names Roselyn Hamero among coaches accompanying a Philippine youth athletics delegation.",
      },
    ],
  },
  {
    id: "coach-bonifacio-lorana",
    slug: "bonifacio-lorana",
    name: "Bonifacio Loraña",
    alsoKnownAs: ["Bonifacio Lorana"],
    role: "National team coach evidence",
    specialty: "Middle distance, sprints, relay/team delegation support",
    location: "Philippines",
    club: "Philippine National Team",
    experience: "Philippine team delegation coach evidence; father-coach foundation for the Loraña middle-distance twins.",
    evidenceLevel: "Medium",
    evidenceNotes: [
      "Manila Bulletin and Journal coverage of the 2025 Indian Open names Bonifacio Loraña/Lorana among coaches accompanying Philippine athletes.",
      "Tiebreaker Times describes him as a well-respected coach for the Philippine National Team.",
      "The profile remains medium-confidence because he is not visible in the PSC 2025 athletics snippet set reviewed here.",
    ],
    profileFacts: [
      { label: "Public role evidence", value: "Philippine team coach", detail: "Named with Jeoffrey Chua in 2025 Indian Open coverage." },
      { label: "Discipline context", value: "Middle distance / relay", detail: "Coverage connected him with a team including 100m and 800m athletes." },
      { label: "Family pathway", value: "Hassan and Hussein Loraña", detail: "Tiebreaker Times credits him with shaping the twins' foundation." },
      { label: "Name spelling", value: "Loraña / Lorana", detail: "Sources vary by accent usage." },
    ],
    badges: ["Philippine team coach", "Middle distance support", "Name spelling varies"],
    recognitions: ["Publicly documented Philippine team delegation coach"],
    certifications: ["National team coaching evidence"],
    achievements: [
      "Named among coaches for the Philippine team competing at the 2025 Indian Open.",
      "Described by Tiebreaker Times as a well-respected coach for the Philippine National Team.",
      "Credited with helping shape the athletics foundation of Hassan and Hussein Loraña.",
    ],
    bio:
      "Bonifacio Loraña is best supported by recent delegation coverage and athlete-development context. The app presents him as a medium-confidence national-team coach profile because public sources connect him to Philippine teams, but PATAFA has not published a complete current roster.",
    researchSources: [
      {
        label: "Manila Bulletin Indian Open report",
        url: "https://mb.com.ph/2025/08/08/lopena-pama-banner-ph-team-in-india-trackfest",
        description: "Names Bonifacio Loraña among coaches for the Philippine team at the 2025 Indian Open.",
      },
      {
        label: "Journal Indian Open report",
        url: "https://journalnews.com.ph/lopena-3-others-vying-in-indian-open/",
        description: "Also names Bonifacio Loraña/Lorana with the Philippine delegation.",
      },
      {
        label: "Tiebreaker Times Loraña twins feature",
        url: "https://tiebreakertimes.com.ph/tbt/lorana-twins-thrilled-to-compete-side-by-side-anew-this-time-for-ateneo/356582",
        description: "Describes Bonifacio Loraña as a respected coach for the Philippine National Team.",
      },
    ],
  },
  {
    id: "coach-saturnino-salazar",
    slug: "saturnino-salazar",
    name: "Saturnino Salazar",
    role: "Race walk / endurance coach evidence",
    specialty: "Race walk, endurance, running mechanics",
    location: "Philippines",
    club: "Philippine National Team",
    experience: "Coach of national race-walk record setter Carlos De Imus; former national record holder.",
    evidenceLevel: "Medium",
    evidenceNotes: [
      "2025 Manila Standard and Manila Bulletin coverage identify Saturnino Salazar as Carlos De Imus's coach at the Asian Race Walking Championships.",
      "The same coverage describes Salazar as a national record holder.",
      "The supplied PATAFA social snippet reportedly names him as National Team Coach; this profile keeps the formal national-staff label medium-confidence until an official roster is published.",
    ],
    profileFacts: [
      { label: "Public role evidence", value: "Race-walk coach", detail: "Named as Carlos De Imus's coach in 2025 Asian Race Walk coverage." },
      { label: "Athlete coached", value: "Carlos De Imus", detail: "De Imus set a Philippine 20km race walk record in Japan." },
      { label: "Athlete legacy", value: "National record holder", detail: "Reported by Manila Standard and Manila Bulletin." },
      { label: "Discipline", value: "Race walk / endurance", detail: "Coaching evidence centers on walking and running mechanics." },
    ],
    badges: ["Race walk", "Endurance", "National record holder"],
    recognitions: ["Publicly documented race-walk coach"],
    certifications: ["Race walk coaching evidence"],
    achievements: [
      "Coached Carlos De Imus during his 2025 Philippine 20km race walk record performance.",
      "Identified in 2025 coverage as a national record holder.",
      "Longtime running-clinic coach presence documented in public running-community sources.",
    ],
    bio:
      "Saturnino Salazar's strongest current evidence is the Carlos De Imus race-walk breakthrough: recent coverage places Salazar with De Imus and PATAFA leadership at the Asian Race Walking Championships, where De Imus reset the Philippine 20km walk mark. The national-team label is useful but kept medium-confidence pending a clean PATAFA roster.",
    researchSources: [
      {
        label: "Manila Standard De Imus report",
        url: "https://manilastandard.net/sports/sports-plus/314569647/de-imus-poised-for-seag-gold.html",
        description: "Names Saturnino Salazar as De Imus's coach and a national record holder.",
      },
      {
        label: "Manila Bulletin De Imus report",
        url: "https://mb.com.ph/2025/3/16/de-imus-eclipses-ph-record-in-20km-walk",
        description: "Also identifies Salazar with De Imus at the Asian Race Walking Championships.",
      },
      {
        label: "The Bull Runner clinic list",
        url: "https://thebullrunner.com/list-of-running-clinics-in-mm/",
        description: "Older public running-clinic listing showing Salazar's running-coach role.",
      },
    ],
  },
  {
    id: "coach-eduardo-buenavista",
    slug: "eduardo-buenavista",
    name: "Eduardo “Vertek” Buenavista",
    role: "National team coach / marathon head coach evidence",
    specialty: "Long distance, marathon, road racing",
    location: "Philippines",
    club: "Philippine National Team",
    experience: "Two-time Olympian, former Philippine marathon record holder, and current/recent national marathon coach.",
    evidenceLevel: "High",
    evidenceNotes: [
      "PNA's 2023 national staff report lists Eduardo Buenavista for long distance.",
      "PSC 2025 eligible masterlist includes Eduardo Buenavista under athletics.",
      "2025-2026 marathon coverage describes him as national team coach or head coach of the marathon squad.",
    ],
    profileFacts: [
      { label: "Current public role", value: "National marathon / long-distance coach", detail: "Supported by 2025-2026 marathon coverage." },
      { label: "Discipline", value: "Long distance / marathon", detail: "Listed in PNA staff coverage for long distance." },
      { label: "Athlete legacy", value: "Two-time Olympian", detail: "Philippine Olympians lists Sydney 2000 and Athens 2004." },
      { label: "Record lineage", value: "Former marathon record holder", detail: "Wagdos and Salaño broke his 2:18:44 record in 2026." },
    ],
    badges: ["National coach", "Marathon", "Two-time Olympian"],
    isRecognized: true,
    recognitions: ["Publicly documented Philippine national-team coach"],
    certifications: ["Long distance national coaching staff", "Marathon squad head-coach evidence"],
    achievements: [
      "Listed in 2023 PNA coverage as the long-distance national staff coach.",
      "Described in 2025 Tempo coverage as head coach of the SEA Games marathon squad.",
      "Described in 2026 Abante coverage as a national team coach.",
      "Two-time Olympian in athletics, with Sydney 2000 and Athens 2004 appearances.",
      "Former Philippine marathon record holder at 2:18:44.",
    ],
    bio:
      "Eduardo “Vertek” Buenavista is the safest long-distance coaching profile in this set. His current/recent national-team role is supported by PNA, PSC, Tempo, and Abante coverage, and his athlete legacy gives the marathon squad profile immediate credibility.",
    researchSources: [
      {
        label: "PNA 2023 national staff report",
        url: "https://www.pna.gov.ph/articles/1192565",
        description: "Lists Buenavista as the long-distance national coaching staff member.",
      },
      {
        label: "Tempo marathon squad report",
        url: "https://tempo.mb.com.ph/2025/12/11/fighting-chance-for-marathon-bets-vertek/",
        description: "Describes Buenavista as head coach of the SEA Games marathon squad.",
      },
      {
        label: "Abante Asian Games marathon report",
        url: "https://www.abante.com.ph/2026/03/02/sonny-wagdos-asian-games-marathon/",
        description: "Describes Buenavista as a former SEA Games gold medalist, two-time Olympian, and current national team coach.",
      },
      {
        label: "Philippine Olympians profile",
        url: "https://www.philippineolympians.org/oly/2004-olympics-athens-athletics-buenavista-eduardo",
        description: "Olympian biography, hometown, events, and marathon personal best context.",
      },
      {
        label: "PSC 2025 eligible masterlist",
        url: "https://psc.gov.ph/psc_site/wp-content/uploads/2025/11/2025_MASTERLIST-OF-ELIGIBLES-as-of-07-OCTOBER.pdf",
        description: "Official PSC masterlist including Eduardo Buenavista under athletics.",
      },
    ],
  },
  {
    id: "coach-djundi-binas",
    slug: "djundi-binas",
    name: "Djundi Biñas",
    alsoKnownAs: ["Djundi Binas"],
    role: "National coach evidence needs roster confirmation",
    specialty: "Jumps, performance coaching, strength and conditioning",
    location: "Manila / Cebu, Philippines",
    club: "Philippine National Team",
    experience: "World Athletics Level 2 jumps coach, former national athlete, and Philippine delegation coach evidence.",
    evidenceLevel: "Medium",
    evidenceNotes: [
      "TrainWithDjundi lists Biñas as a current National Coach for the Philippine Athletics Team; that is a self-published source, so it is not treated as official by itself.",
      "PNA's 2023 report identifies him as John Mike Lera's coach and references national coach Sean Guevarra in the same long-jump pathway.",
      "2024 Thailand Open coverage names Djundi Binas among coaches accompanying Philippine athletes.",
    ],
    profileFacts: [
      { label: "Public role evidence", value: "Philippine delegation coach", detail: "Named among coaches accompanying 2024 Thailand Open athletes." },
      { label: "Self-published role", value: "Current National Coach", detail: "Listed on TrainWithDjundi; marked with source caution." },
      { label: "Discipline", value: "Jumps", detail: "World Athletics Level 2 jumps specialization according to his coaching site." },
      { label: "Athlete coached", value: "John Mike Lera", detail: "PNA names Biñas as Lera's coach after a 2023 Singapore Open silver." },
    ],
    badges: ["Jumps", "World Athletics L2", "Delegation coach evidence"],
    recognitions: ["Publicly documented jumps coach with national-team evidence"],
    certifications: ["World Athletics Level 2 Coach - Jumps", "PSC-PSI Level 2 Certified Coach"],
    achievements: [
      "Named by PNA as coach of long jumper John Mike Lera after Lera's 2023 Singapore Open silver.",
      "Named among coaches accompanying Philippine athletes to the 2024 Thailand Track and Field Championships.",
      "Lists World Athletics Level 2 jumps specialization and current national-coach status on his official coaching site.",
      "Former national athlete and active masters athlete according to his coaching profile.",
    ],
    bio:
      "Djundi Biñas is presented as a medium-confidence national-coach profile because the public evidence is real but mixed: a self-published current national coach claim, PNA athlete-coach reporting, and independent delegation coverage. His specialty lane is clear: jumps and broader performance coaching.",
    researchSources: [
      {
        label: "TrainWithDjundi profile",
        url: "https://trainwithdjundi.com/",
        description: "Self-published coaching site listing national-coach status, World Athletics L2 jumps, and qualifications.",
      },
      {
        label: "PNA John Mike Lera report",
        url: "https://www.pna.gov.ph/articles/1200278",
        description: "Names Biñas as Lera's coach after a Singapore Open long-jump silver.",
      },
      {
        label: "Tempo Thailand Open report",
        url: "https://tempo.mb.com.ph/2024/06/14/grospe-shatters-own-ph-record-in-thai-meet/",
        description: "Names Djundi Binas among coaches accompanying Philippine athletes.",
      },
      {
        label: "FEU Advocate Taiwan Open report",
        url: "https://feuadvocate.net/lady-trackster-ramadan-makes-first-intl-appearance-in-2025-taiwan-open/",
        description: "Names Djundi Binas among coaches of Philippine athletes at the 2025 Taiwan Open.",
      },
    ],
  },
]

export const getCoachById = (idOrSlug: string) => coaches.find((coach) => matchesIdOrSlug(coach, idOrSlug))

export const getCoachOrStub = (idOrSlug: string, nameHint?: string) => {
  const coach = getCoachById(idOrSlug)
  if (coach) return coach
  const displayName = nameHint || idOrSlug.replace(/-/g, " ") || "Coach profile"
  return {
    id: idOrSlug,
    slug: slugify(idOrSlug),
    name: displayName,
    specialty: "Coach",
    location: "Philippines",
    club: "To be confirmed",
    experience: "TBD",
    bio: "Profile coming soon. Details to be updated.",
    isStub: true,
  }
}

export const getAthletesByCoach = (coachIdOrName: string) =>
  athleteSummaries.filter(
    (athlete) =>
      athlete.coachId === coachIdOrName ||
      (athlete.coach && athlete.coach.toLowerCase() === coachIdOrName.toLowerCase()),
  )
