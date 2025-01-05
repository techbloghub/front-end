import { SVGProps } from 'react';

export default function MagnifyingGlass({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30" fill="none" {...props}>
      <rect x="0.592529" width="18.7654" height="20" rx="9.38272" fill="#6A6868" />
      <line
        y1="-2.5"
        x2="17.3613"
        y2="-2.5"
        transform="matrix(0.53184 0.846845 -0.814083 0.580749 9.97534 15)"
        stroke="#6A6868"
        strokeWidth="5"
      />
    </svg>
  );
}
