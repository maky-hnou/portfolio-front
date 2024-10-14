import React, { memo } from "react";

export function IconCard({ Icon, description }) {
  return (
    <div className="grow-0 shrink-0 basis-3/12 max-w-3/12 px-4 lg:basis-1/3 md:basis-1/2 sm:basis-full">
      <Icon className="mx-auto" />
      <p className="block max-w-[318px] mx-auto mb-10 text-text_color text-base font-light">
        {description}
      </p>
    </div>
  );
}

export default memo(IconCard);
