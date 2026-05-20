import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackgroundOrbs from "@/components/background-orbs";

// Helper for the arrow icon in the buttons
function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Helper to generate a colorful dot for the app tags that don't have SVGs yet
function getAppColor(appName: string) {
  const colors = ["#ff5f57", "#ffbd2e", "#28c840", "#0DF0B7", "#9b51e0", "#5ac8fa", "#ffcc00", "#ff3b30"];
  let hash = 0;
  for (let i = 0; i < appName.length; i++) hash = appName.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

const useCases = [
  {
    heading: "Robotics and Simulation",
    without: "Setting up Isaac Sim takes a week. A GPU workstation costs $15K.",
    with: "Launch Isaac Sim in 3 seconds. Chat: “Run 100 parallel simulations.” Done.",
    apps: [
      { name: "PyBullet", icon: "/images/logos/pybullet.svg" },
      { name: "Isaac", icon: "/images/logos/isaac.svg" },
      { name: "Gazebo", icon: "/images/logos/gazebo.svg" },
      { name: "ROS2", icon: "/images/logos/ros2.svg" },
      { name: "MuJoCo", icon: "/images/logos/mujoco.svg" }
    ],
    who: "University robotics labs, industrial automation, autonomous vehicles",
    image: "/images/use-cases/uc-robotics.png",
    alt: "Robotics simulation",
  },
  {
    heading: "3D Modeling & CAD",
    without: "A Blender render takes 4 hours on your laptop. An A100 workstation costs $15K.",
    with: "50 CPU cores. 64 GB RAM. GPU acceleration. On a Chromebook. Configure it yourself.",
    apps: [
      { name: "Blender", icon: "/images/logos/blender.svg" },
      { name: "FreeCAD", icon: "/images/logos/freecad.svg" },
      { name: "SolidWorks", icon: "/images/logos/solidworks.svg" },
      { name: "OpenSCAD", icon: "/images/logos/openscad.svg" },
      { name: "Fusion 360", icon:"/image/logos/fusion.svg" } 
    ],
    who: "Industrial designers, architects, freelance 3D artists",
    image: "/images/use-cases/uc-3d-modeling.png",
    alt: "3D modeling",
  },
  {
    heading: "Science & Research",
    without: "HPC queues are 48 hours. Local clusters cost $50K+.",
    with: "On-demand GPU compute. Pre-configured environments. No queue. Instant.",
    apps: [
      { name: "Gromacs", icon: "/images/logos/gromacs.svg" }, 
      { name: "AMBER", icon: "/images/logos/amber.svg" },
      { name: "VASP", icon: "/images/logos/vasp.svg" }, 
      { name: "Gaussian", icon: "/images/logos/gaussian.svg" } 
    ],
    who: "Bioinformaticians, climate scientists, academic researchers",
    image: "/images/use-cases/uc-science.png",
    alt: "Science and research",
  },
  {
    heading: "DevOps & Cloud Engineering",
    without: "Testing GPU workloads requires provisioning infrastructure.",
    with: "Chat-driven GPU environments for testing, staging, and CI/CD.",
    apps: [
      { name: "Terminal", icon: "/images/logos/terminal.svg" },
      { name: "VS Code", icon: "/images/logos/vscode.svg" },
      { name: "IntelliJ IDEA", icon: "/images/logos/intellij.svg" },
      { name: "Postman", icon: "/images/logos/postman.svg" }
    ],
    who: "DevOps engineers, SREs, platform teams",
    image: "/images/use-cases/uc-devops.png",
    alt: "DevOps and cloud engineering",
  },
  {
    heading: "Medical Imaging",
    without: "DICOM viewers locked to specific workstations in specific rooms.",
    with: "Any tablet in the hospital becomes a diagnostic workstation.",
    apps: [
      { name: "3D Slicer" }, 
      { name: "MONAI" }, 
      { name: "ITK-SNAP" }, 
      { name: "OHIF Viewer", icon: "/images/logos/ohif-viewer.svg" }
    ],
    who: "Radiologists, medical researchers, healthcare IT",
    image: "/images/use-cases/uc-medical.png",
    alt: "Medical imaging",
  },
  {
    heading: "AI/ML Development",
    without: "Cloud GPU provisioning takes minutes. Scaling means DevOps.",
    with: "Chat: “Launch a PyTorch notebook with A100.” Ready in 3 seconds.",
    apps: [
      { name: "Jupyter Lab", icon: "/images/logos/jupyter.svg" },
      { name: "PyTorch", icon: "/images/logos/pytorch.svg" },
      { name: "TensorFlow", icon: "/images/logos/tensorflow.svg" },
      { name: "JAX", icon: "/images/logos/jax.svg" }
    ],
    who: "ML engineers, data scientists, AI researchers",
    image: "/images/use-cases/uc-ai-ml.png",
    alt: "AI/ML development",
  },
  {
    heading: "Game Development & VFX",
    without: "DaVinci Resolve and Nuke need beefy local machines. Collaboration means shipping drives.",
    with: "Cloud-rendered, browser-streamed. Edit from anywhere. Share a session with a link.",
    apps: [
      { name: "DaVinci Resolve", icon: "/images/logos/davinci-resolve.svg" },
      { name: "Unreal Engine", icon: "/images/logos/unreal-engine.svg" },
      { name: "Houdini", icon: "/images/logos/houdini.svg" },
      { name: "Nuke" },
      { name: "OpenToonz", icon: "/images/logos/opentoonz.svg" },
      { name: "Pencil2D", icon: "/images/logos/pencil2d.svg" } 
    ],
    who: "VFX artists, indie game devs, post-production",
    image: "/images/use-cases/uc-game-dev.png",
    alt: "Game development and VFX",
  },
  {
    heading: "Education & Academia",
    without: "Underfunded labs. 5-year-old hardware. Students can't access real tools.",
    with: "Every student gets A100-class compute from their personal laptop. No IT tickets.",
    apps: [
      { name: "Any app in the catalog" }
    ],
    who: "Universities, bootcamps, K–12 STEM programs",
    image: "/images/use-cases/uc-education.png",
    alt: "Education AI accelerator",
  },
  {
    heading: "Enterprise IT",
    without: "Managing virtual desktops is slow. VPNs add latency. Hardware refreshes are expensive.",
    with: "Centralized session management. SSO. Instantly provision standardized secure workspaces.",
    apps: [
      { name: "SSO / RBAC" }, 
      { name: "Usage analytics" }, 
      { name: "Central dashboard", icon: "/images/logos/dashboard.svg" },
      { name: "VPC" } 
    ],
    who: "IT admins, enterprise security teams, CTOs",
    image: "/images/use-cases/uc-enterprise.png",
    alt: "Enterprise IT",
  },
];

export default function UseCases() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      
      <BackgroundOrbs />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative w-full flex justify-center pb-20 p-5 mt-7 md:mt-60 overflow-hidden z-10">
        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="font-bold text-[48px] md:text-[64px] leading-[1.1] tracking-tight text-gradient-primary mb-6 max-w-5xl capitalize">
            Powerful enough for<br /> supercomputers. Accessible<br /> enough for everyone
          </h1>
        </div>
      </section>

      {/* ── Use Cases Content ── */}
      <section className="relative py-8 px-6 max-w-[1300px] mx-auto flex flex-col gap-32 z-10">
        {useCases.map((uc, i) => (
          <div
            key={uc.heading}
            className={`flex flex-col-reverse ${
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-12 lg:gap-24`}
          >
            {/* Text Column */}
            <div className="flex-1 flex flex-col gap-6 w-full max-w-[500px]">
              
              <h2 className="text-gradient-primary text-[32px] md:text-[36px] font-bold leading-tight">
                {uc.heading}
              </h2>

              {/* Without / With Blocks */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <span className="text-white text-[15px] font-medium tracking-wide">Without Infinity</span>
                  <p className="text-muted text-[15px] leading-relaxed">{uc.without}</p>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <span className="text-white text-[15px] font-medium tracking-wide">With Infinity</span>
                  <p className="text-muted text-[15px] leading-relaxed">{uc.with}</p>
                </div>
              </div>

              {/* App Pills */}
              <div className="flex flex-wrap items-center gap-2.5 mt-2">
                {uc.apps.map(app => (
                  <div key={app.name} className="bg-neutral-900 border border-white/5 rounded-[4px] px-3 py-1.5 flex items-center gap-2">
                    {/* Conditionally render Logo SVG or fallback to Colored Dot */}
                    {app.icon ? (
                      <div className="relative w-[14px] h-[14px]">
                        <Image src={app.icon} alt={app.name} fill className="object-contain" />
                      </div>
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: getAppColor(app.name) }} />
                    )}
                    <span className="text-zinc-100 text-[12px] whitespace-nowrap">{app.name}</span>
                  </div>
                ))}
              </div>

              {/* Who uses it */}
              <div className="flex flex-col gap-1.5 mt-2">
                <span className="text-white text-[15px] font-medium tracking-wide">Who uses it</span>
                <p className="text-muted text-[15px]">{uc.who}</p>
              </div>

              {/* CTA Button */}
              <div className="mt-4">
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2.5 bg-btn text-black text-[13px] px-[18px] py-[12px] rounded-[4px] font-medium shadow-[inset_0px_1px_3px_0px_rgba(178,178,178,0.25),inset_0px_-1px_3px_0px_#b2b2b2] hover:bg-white transition-colors"
                >
                  Learn More
                  <ArrowRight />
                </Link>
              </div>

            </div>

            {/* Image Column */}
            <div className="flex-[1.2] w-full">
              <div className="relative w-full bg-[rgba(34,34,34,0.6)] rounded-[12px] p-[10px] pt-[32px] md:pt-[32px] flex flex-col justify-end shadow-2xl">
                {/* Mac Frame 2-Dots */}
                <div className="absolute top-[11px] left-[14px] flex gap-2">
                  <div className="w-[12px] h-[12px] rounded-full bg-neutral-300" />
                  <div className="w-[12px] h-[12px] rounded-full bg-neutral-300" />
                </div>
                
                <div className="relative w-full rounded-[8px] overflow-hidden bg-black">
                  <Image 
                    src={uc.image} 
                    alt={uc.alt} 
                    width={1200} 
                    height={800} 
                    className="w-full h-auto block" 
                  />
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* ── "Don't see yours? It still works." CTA ── */}
      <section className="relative py-32 px-6 text-center overflow-hidden z-10">
        <div className="relative max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-bold text-[56px] md:text-[64px] leading-[1.1] text-gradient-primary mb-6">
            Don&apos;t see yours?
            <br />
            It still works.
          </h2>
          <p className="text-dim text-[18px] font-medium mb-10 max-w-xl">
            If it runs on Linux, macOS, or Windows, it runs on Infinity.<br/> Bring your own image.
          </p>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2.5 bg-btn text-black text-[14px] px-[24px] py-[14px] rounded-[4px] font-medium shadow-[inset_0px_1px_3px_0px_rgba(178,178,178,0.25),inset_0px_-1px_3px_0px_#b2b2b2] hover:bg-white transition-colors"
          >
            Try Infinity
            <ArrowRight />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}