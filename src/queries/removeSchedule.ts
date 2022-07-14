import { gql, useMutation } from "@apollo/client";
import { Schedule } from "../models/server/Schedule";

const REMOVE_SCHEDULE = gql`
  mutation RemoveSchedule($id: String!) {
    removeSchedule(_id: $id) {
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

export const useRemoveScheduleMutation = () => {
  return useMutation<{ removeSchdule: Schedule }, { id: string }>(
    REMOVE_SCHEDULE
  );
};
