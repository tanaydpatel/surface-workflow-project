"use client";

import React, { type PropsWithChildren } from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";

import Button from "./Button";
import { STATUS } from "~/constants";

interface ActionBannerProps extends PropsWithChildren {
  title: string;
  subTitle: string;
  buttonLabel: string;
  status: string;
  isDisabled: boolean;
  isExpanded: boolean;
  handleExpand: () => void;
}

const ActionBanner: React.FC<ActionBannerProps> = ({
  title,
  subTitle,
  buttonLabel,
  status = STATUS.PENDING,
  isDisabled = true,
  isExpanded = false,
  handleExpand,
  children,
}) => {
  return (
    <div className="mb-8 rounded-lg border-2 border-[#ebedf3] p-2 shadow-[2px_2px_4px_3px_rgba(0,0,0,0.03)] transition-transform sm:p-6">
      <div className="flex h-max w-full flex-col items-start justify-between gap-6 sm:h-14 sm:flex-row">
        <div className="flex h-full flex-row items-center">
          <div className="flex h-full flex-col items-center justify-center">
            {status === "error" && (
              <ExclamationCircleIcon className="h-8 w-8 text-red-600" />
            )}
            {status === "pending" && (
              <CheckCircleIcon className="h-8 w-8 text-gray-300" />
            )}
            {status === "completed" && (
              <CheckCircleIcon className="h-8 w-8 text-green-600" />
            )}
          </div>
          <div className="ml-6 flex h-full flex-col items-start justify-center">
            <p className="text-lg font-medium text-black">{title}</p>
            <p className="text-base leading-5 tracking-[1px] text-text-light-gray">
              {subTitle}
            </p>
          </div>
        </div>
        {!isExpanded && (
          <div className="flex h-full w-full flex-col items-end justify-center sm:w-auto sm:items-center">
            <Button
              isDisabled={isDisabled}
              label={buttonLabel}
              onClick={handleExpand}
            />
          </div>
        )}
      </div>
      {isExpanded && <div className="mt-3">{children}</div>}
    </div>
  );
};
export default ActionBanner;
