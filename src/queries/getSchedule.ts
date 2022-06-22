import { gql, useQuery } from "@apollo/client";
import { Schedule } from "../models/server/Schedule";

const GET_SCHEDULE = gql`
  query GetSchedule($id: Float!) {
    getSchedule(id: $id) {
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

export const useGetScheduleQuery = (id: number) => {
  return useQuery<{ getSchedule: Schedule }>(GET_SCHEDULE, {
    variables: { id },
  });
};
