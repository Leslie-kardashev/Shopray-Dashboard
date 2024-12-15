import { FeatureGrid } from "@/components/features";
import { Hero } from "@/components/hero";
import { PricingGrid } from "@/components/pricing";
import { stackServerApp } from "@/stack";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ComponentIcon, Users } from "lucide-react";

export default async function IndexPage() {
  const project = await stackServerApp.getProject();
  if (!project.config.clientTeamCreationEnabled) {
    return (
      <div className="w-full min-h-96 flex items-center justify-center">
        <div className="max-w-xl gap-4">
          <p className="font-bold text-xl">Setup Required</p>
          <p className="">
            {
              "To start using this project, please enable client-side team creation in the Stack Auth dashboard (Project > Team Settings). This message will disappear once the feature is enabled."
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero
        capsuleText="100% Free"
        capsuleLink="https://shopray.vercel.app"
        title="Optimized toolset for commerce"
        subtitle="Built for Brands "
        primaryCtaText="Get Started"
        primaryCtaLink={stackServerApp.urls.signUp}
        secondaryCtaText="Learn More"
        secondaryCtaLink="/sign-in"
        credits={
          <>
            Crafted with ❤️ by{" "}
            <a
              href="https://github.com/Leslie-kardashev"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Deltascale
            </a>
          </>
        }
      />

     
    </>
  );
}
