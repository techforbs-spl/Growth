import Link from "next/link";
import { LogoMark } from "./LogoMark";

const COLUMNS = [
  { title: "Services", links: ["AI SEO", "Paid Search", "Paid Social", "Website Systems"] },
  { title: "Company", links: ["Work", "Method", "Team", "Careers"] },
  { title: "Resources", links: ["Case library", "Reporting sample", "FAQ", "Referrals"] },
];

export default function Footer() {
  return (
    <footer className="bg-dark-deep pt-20 text-paper">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 border-b border-paper/10 pb-16 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="#top" className="flex items-center gap-2.5 font-display text-[1.05rem] font-bold tracking-tight text-paper">
              <LogoMark size={28} shellColor="#ffffff" />
              The Growth Inc.
            </Link>
            <p className="mt-5 max-w-[300px] font-body text-[0.88rem] leading-relaxed text-paper/55">
              Performance marketing for B2B companies who report on pipeline,
              not impressions. Based in Austin.
            </p>
            <a href="mailto:hello@thegrowthinc.com" className="mt-6 inline-block font-body text-[0.85rem] text-green-soft underline">
              hello@thegrowthinc.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="eyebrow text-paper/40">{col.title}</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="font-body text-[0.88rem] text-paper/70 hover:text-green-soft">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 font-body text-[0.78rem] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Growth Incorporation.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-paper/70">Privacy</a>
            <a href="#" className="hover:text-paper/70">Terms</a>
            <a href="#" className="hover:text-paper/70">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
