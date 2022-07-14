export interface Schedule {
  _id: string;
  createdAt: string;
  dueAt: string | null;
  completedAt: string | null;
  title: string;
  tags: string[];
  userIds: number[];
}
