import { gql, useMutation } from "@apollo/client";
import { Schedule } from "../models/server/Schedule";

const UPDATE_SCHEDULE = gql`
  mutation CreateSchedule(
    $title: String!
    $content: String!
    $dueAt: String
    $tags: [String!]!
    $userIds: [Float!]!
  ) {
    createSchedule(
      data: {
        title: $title
        content: $content
        dueAt: $dueAt
        tags: $tags
        userIds: $userIds
      }
    ) {
      _id
      title
      content
      dueAt
      createdAt
      tags
      userIds
    }
  }
`;

export const useCreateScheduleMutation = () => {
  return useMutation<
    { createSchedule: Schedule },
    {
      title: string;
      content: string;
      dueAt: string | null;
      tags: string[];
      userIds: number[];
    }
  >(UPDATE_SCHEDULE);
};
