import { site } from "@/content/site";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 md:px-10">
      <div className="flex w-full flex-col items-center justify-between gap-6 border-t border-hairline pt-8 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>

        <SocialLinks />
      </div>
    </footer>
  );
}
