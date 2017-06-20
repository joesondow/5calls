import { Action } from 'redux';
import { Issue } from '../common/model';

export enum ActionType {
  GET_ISSUES,
}

export interface IssuesAction extends Action {
  type: ActionType;
  payload: Issue[];
}

// export interface IssueSelectedAction extends Action {
//   type: ActionType;
//   payload: Issue;
// }
