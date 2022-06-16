export interface Schedule {
  id: number;
  createdAt: string;
  dueAt: string | null;
  completedAt: string | null;
  title: string;
  tags: string[];
  userIds: number[];
}
