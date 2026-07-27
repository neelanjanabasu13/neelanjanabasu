// Section divider now delegates to the shared MotifBand.
import { MotifBand, type BandVariant } from "./MotifBand";

interface SectionDividerProps {
  variant: BandVariant;
}

export const SectionDivider = ({ variant }: SectionDividerProps) => (
  <div className="my-4 md:my-6">
    <MotifBand variant={variant} height={44} />
  </div>
);
