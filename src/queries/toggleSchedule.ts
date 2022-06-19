import { gql, useMutation } from "@apollo/client";
import { Schedule } from "../models/server/Schedule";

const TOGGLE_SCHEDULE = gql`
  mutation ToggleSchedule($id: Float!) {
    toggleSchedule(id: $id) {
      id
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
  return useMutation<{ toggleSchedule: Schedule }, { id: number }>(
    TOGGLE_SCHEDULE
  );
};
