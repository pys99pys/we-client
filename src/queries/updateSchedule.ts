import { gql, useMutation } from "@apollo/client";
import { Schedule } from "../models/server/Schedule";

const UPDATE_SCHEDULE = gql`
  mutation UpdateSchedule(
    $id: Float!
    $title: String!
    $content: String!
    $dueAt: String
    $completedAt: String
    $tags: [String!]!
    $userIds: [Float!]!
  ) {
    updateSchedule(
      data: {
        id: $id
        title: $title
        content: $content
        dueAt: $dueAt
        completedAt: $completedAt
        tags: $tags
        userIds: $userIds
      }
    ) {
      id
      title
      content
      dueAt
      createdAt
      tags
      userIds
    }
  }
`;

export const useUpdateScheduleMutation = () => {
  return useMutation<
    { updateSchedule: Schedule },
    {
      id: number;
      title: string;
      content: string;
      dueAt: string | null;
      completedAt: string | null;
      tags: string[];
      userIds: number[];
    }
  >(UPDATE_SCHEDULE);
};
