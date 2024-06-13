"use client";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface ButtonActionTableProps {
  url: string;
}

const ButtonActionTable: FC<ButtonActionTableProps> = ({ url }) => {
  const route = useRouter();

  return (
    <Button size="icon" variant="outline" onClick={() => route.push(url)}>
      <MoreVertical className="h-4 w-4" />
    </Button>
  );
};

export default ButtonActionTable;
