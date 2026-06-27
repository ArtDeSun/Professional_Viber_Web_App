// components/kanban-board-client.tsx
"use client";

import dynamic from "next/dynamic";

const KanbanBoardClient = dynamic(() => import("@/components/kanban-board"), {
  ssr: false,
});

export default KanbanBoardClient;
