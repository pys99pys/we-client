import { gql, useQuery } from "@apollo/client";
import { ScheduleType } from "../models/client/ScheduleType";
import { Schedule } from "../models/server/Schedule";

const GET_SCHEDULES = gql`
  query GetSchedules($type: String!) {
    getSchedules(type: $type) {
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

export const useGetSchedulesQuery = (type: ScheduleType) => {
  return useQuery<{ getSchedules: Schedule[] }>(GET_SCHEDULES, {
    variables: { type },
  });
};
