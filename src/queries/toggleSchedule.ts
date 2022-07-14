import { gql, useMutation } from "@apollo/client";
import { Schedule } from "../models/server/Schedule";

const TOGGLE_SCHEDULE = gql`
  mutation ToggleSchedule($id: String!) {
    toggleSchedule(_id: $id) {
      _id
      title
      content
      dueAt
      completedAt
      createdAt
      tags
      userIds
    }
  }
`;

export const useToggleScheduleMutation = () => {
  return useMutation<{ toggleSchedule: Schedule }, { id: string }>(
    TOGGLE_SCHEDULE
  );
};
