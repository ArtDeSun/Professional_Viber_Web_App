import KanbanBoard from "@/components/kanban-board";
import { getSession } from "@/lib/auth/auth";
import connectDB from "@/lib/db";
import { Board } from "@/lib/models";
import { redirect } from "next/navigation";

export default async function getDashBoard() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/");
  }

  await connectDB();

  const board = await Board.findOne({
    userId: session.user.id,
    name: "Job Hunt",
  }).populate({ path: "columns" });

  return (
    /* <div className="flex flex-col min-h-screen bg-white py-32">Dashboard</div> */
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-32">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-neutral-100">{board.name}</h1>
          <p className="text-neutral-400">Track your job applications</p>
        </div>
        <KanbanBoard
          board={JSON.parse(JSON.stringify(board))}
          userId={session.user.id}
        />
      </div>
    </div>
  );
}
