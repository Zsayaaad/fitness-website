import { PackageCard } from "./PackageCard.jsx";

export function PackagesGrid({ packages }) {
  return (
    <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
      {packages.map((pkg) => (
        <PackageCard key={pkg.name} {...pkg} />
      ))}
    </div>
  );
}
