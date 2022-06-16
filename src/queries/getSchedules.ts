import { gql, useQuery } from "@apollo/client";
import { Schedule } from "../models/server/Schedule";

const GET_SCHEDULES = gql`
  query GetSchedules {
    getSchedules {
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

export const useGetSchedulesQuery = () => {
  return useQuery<{ getSchedules: Schedule[] }>(GET_SCHEDULES);
};
