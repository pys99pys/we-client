import { gql, useMutation } from "@apollo/client";
import { Schedule } from "../models/server/Schedule";

const UPDATE_SCHEDULE = gql`
  mutation UpdateSchedule(
    $id: String!
    $title: String!
    $content: String!
    $dueAt: String
    $tags: [String!]!
    $userIds: [Float!]!
  ) {
    updateSchedule(
      data: {
        _id: $id
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

export const useUpdateScheduleMutation = () => {
  return useMutation<
    { updateSchedule: Schedule },
    {
      id: string;
      title: string;
      content: string;
      dueAt: string | null;
      tags: string[];
      userIds: number[];
    }
  >(UPDATE_SCHEDULE);
};
