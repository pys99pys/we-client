import { Owner } from "./Owner";

export interface Schedule {
  id: number;
  title: string;
  tags: string[];
  owners: Owner[];
  createdAt: string;
  completedAt: string | null;
  dueAt: string | null;
}
