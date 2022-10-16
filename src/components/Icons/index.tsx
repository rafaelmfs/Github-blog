import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faCalendarDay,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Xmark = () => <FontAwesomeIcon icon={faXmark} />
export const Github = () => <FontAwesomeIcon icon={faGithub} />
export const UserGroup = () => <FontAwesomeIcon icon={faUserGroup} />
export const Building = () => <FontAwesomeIcon icon={faBuilding} />
export const Calendar = () => <FontAwesomeIcon icon={faCalendarDay} />
export const ChevronLeft = () => <FontAwesomeIcon icon={faChevronLeft} />
export const Comment = () => <FontAwesomeIcon icon={faComment} />
export const UpRight = () => <FontAwesomeIcon icon={faUpRightFromSquare} />
