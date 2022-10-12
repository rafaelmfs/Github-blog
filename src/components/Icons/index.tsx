import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faCalendarDay,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function GithubIcon() {
  return <FontAwesomeIcon icon={faGithub} />
}

function UserGroupIcon() {
  return <FontAwesomeIcon icon={faUserGroup} />
}

function BuildingIcon() {
  return <FontAwesomeIcon icon={faBuilding} />
}

function CalendarIcon() {
  return <FontAwesomeIcon icon={faCalendarDay} />
}

function ChevronLeftIcon() {
  return <FontAwesomeIcon icon={faChevronLeft} />
}
function CommentIcon() {
  return <FontAwesomeIcon icon={faComment} />
}
function UpRightFromSquareIcon() {
  return <FontAwesomeIcon icon={faUpRightFromSquare} />
}

export const Github = GithubIcon
export const UserGroup = UserGroupIcon
export const Building = BuildingIcon
export const Calendar = CalendarIcon
export const ChevronLeft = ChevronLeftIcon
export const Comment = CommentIcon
export const UpRight = UpRightFromSquareIcon
