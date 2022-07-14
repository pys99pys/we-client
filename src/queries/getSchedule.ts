import { gql, useQuery } from "@apollo/client";
import { Schedule } from "../models/server/Schedule";

const GET_SCHEDULE = gql`
  query GetSchedule($id: String!) {
    getSchedule(_id: $id) {
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

export const useGetScheduleQuery = (id: string) => {
  return useQuery<{ getSchedule: Schedule }>(GET_SCHEDULE, {
    variables: { id },
  });
};
